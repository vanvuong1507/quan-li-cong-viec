import React, { Component } from 'react'

export default class TasksSeach extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="row mt-5">
          <div className="input-group float-left ">
            <input name="keyword" type="text" className="form-control" placeholder="nhap tu khoa...." />
            <button className="btn btn-primary " type="button">
              <span className="fas fa-search">tim</span>
            </button></div>
        </div>
      </div>
    )
  }
}
