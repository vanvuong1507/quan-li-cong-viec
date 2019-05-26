import React, { Component } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {connect} from 'react-redux'
import TasksSeach from './components/TasksSeach';
import *as actions from './actions/actions'


 class App extends Component {

  onToggleForm=()=>{
    var {getEdit}=this.props;
    if(getEdit&&getEdit.id!=''){
      this.props.showForm();

    }else {
         
  this.props.onToggleForm();
  
    }
    this.props.onClearTask({
      id:'',
      name:'',
      status:false
    })

 }
  render() {
    const {isDisplayForm}=this.props;
    const elementForm=isDisplayForm?
      <TaskForm

      />:null;
    return (
      <div className="container">
    <div className="text-center">
      <h1>Quan li cong viec</h1>
      <hr />
      <div className="row">
        {/* start from */}
        <div className= {isDisplayForm?"col-xs-4 col-sm-4 col-md-4 col-lg-4":'' }>
         {elementForm}
         </div>
        {/* end from */}
        <div className={isDisplayForm? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
          <button
           type="button"
            className="btn btn-info float-left"
            onClick={this.onToggleForm}
            >
            <span className="fa fa-plus" />
             them cong viec
             </button>
         <TasksSeach/>
          {/* tasks list */}
         <TaskList/>
          {/* tasks List */}
        </div>
      </div>
    </div>
  </div>
  
  );
}
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      isDisplayForm: state.isDisplayForm,
      getEdit:state.getEdit
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onToggleForm: () => {
        dispatch(actions.onToggleForm())
      },
      onClearTask: (getEdit) => {
        dispatch(actions.getEdit(getEdit))
      },
      showForm: () => {
        dispatch(actions.showForm())
      },
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps) (App);

