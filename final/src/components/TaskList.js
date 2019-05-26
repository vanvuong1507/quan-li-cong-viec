import React, { Component } from 'react'
import TasksItem from './TasksItem';
import {connect} from 'react-redux'
 class TaskList extends Component {


  render() {
    const {tasks}=this.props;
    const showData=tasks.map((value,key)=>{
      return <TasksItem
                  key={key}
                  stt={key}
                  tasks={value}
      />
    })
    return (
        <div className="row mt-5">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">ten</th>
                <th scope="col">trang thai</th>
                <th scope="col">hanh dong</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th />
                <th>
                  <input type="text" className="form-control" />
                </th>
                <td>
                  <select className="form-control" name="filterStatus">
                    <option>Tất Cả</option>
                    <option >Ẩn</option>
                    <option >Kích Hoạt</option>
                  </select>
                </td>
                <td />
              </tr>
              
{showData}

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskList)