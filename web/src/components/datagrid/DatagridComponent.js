import React from 'react';
import {connect} from 'react-redux';

import SpinnerComponent from '../spinner/spinner';
import * as DatagridAction from './DatagridAction';


class DatagridComponent extends React.Component{
    componentDidMount(){
        this.props.Init();
    }

    render(){
        console.log(this.props.dataset);
        return (
            <div>
                <SpinnerComponent show={this.props.loading}/>
                <table>
                    <thead>
                        <tr>
                        {
                            Object.keys(this.props.dataset[1] ? this.props.dataset[1][0] : {}).map(function(key, idx){
                                return <th key={'th' + idx}>{key}</th>
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.dataset[1] || []) .map(function(obj, idx){
                                return (
                                    <tr key={'tr' + idx}>
                                        {
                                            Object.keys(obj).map(function(key, i){
                                                return <td key={'td' + i}>{obj[key]}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.datagrid.loading,
        dataset: state.datagrid.dataset || {}
    }
}

export default connect(mapStateToProps, DatagridAction)(DatagridComponent)