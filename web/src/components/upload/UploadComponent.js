import React from 'react';
import baseurl from '../../../../app/src/libs/baseurl.js';

export default class UploadComponent extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };
  state = {
    upfilePath:""
  }
  constructor(props) {
    super(props);
  }
  upload() {
    /* FormData 是表单数据类 */
    var fd = new FormData();
    var ajax = new XMLHttpRequest();
    fd.append("upload", 1);
    /* 把文件添加到表单里 */
    fd.append("upfile", this.refs.upfile.files[0]);
    ajax.open("post", baseurl + "doAction.php", true);
    ajax.onload = function () {
      console.log(ajax.responseText);
        this.setState({upfilePath:ajax.responseText});
    }.bind(this);
    ajax.send(fd);

    console.log(fd);
    }


  render() {
    console.log(this.state.upfilePath);
    return (
        <div>
            <p><input type="file" id="upfile" ref="upfile"/></p>
            <p><input type="button" onClick={this.upload.bind(this)} value="用原生JS上传" /></p>
            {
                this.state.upfilePath != '' ? <img src={this.state.upfilePath} /> : null
            }
        </div>
    );
  }
}
