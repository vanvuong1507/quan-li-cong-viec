import React, { Component } from 'react'
import *as actions from './../actions/actions'
import {connect} from 'react-redux'
 class TasksItem extends Component {
  deleteData=()=>{
    this.props.deleteData(this.props.tasks);
  }
  changeStatus=()=>{
    this.props.changeStatus(this.props.tasks);
  }
showForm=()=>{
  this.props.showForm();
}
twoAction=()=>{
this.showForm();
this.props.getEdit(this.props.tasks);
}
  render() {
    const {stt, tasks}=this.props;
    return (
        <tr>
        <th>{stt+1}</th>
        <td>{tasks.name}</td>
        <td>
        <span 
        className={tasks.status?"badge badge-success":"badge badge-danger"}
        onClick={this.changeStatus}
        >{tasks.status?"kich hoat":"an"}

        </span>
        </td>
        <td>
          <button type="button"
           className="btn btn-warning mr-2"
           onClick={this.twoAction}
          >
            <span 
            className="fas fa-pencil-alt"
             />Sửa
          </button>
          <button type="button"
           className="btn btn-danger"
           onClick={this.deleteData}
          >
            <span className="fas fa-trash " 
            ></span>Xóa
          </button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteData: (tasks) => {
      dispatch(actions.deleteData(tasks))
    },
    changeStatus: (tasks) => {
      dispatch(actions.changeStatus(tasks))
    },
    showForm: () => {
      dispatch(actions.showForm())
    },
    getEdit: (getEdit) => {
      dispatch(actions.getEdit(getEdit))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TasksItem)