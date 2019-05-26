import React, { Component } from 'react'
import {connect} from 'react-redux'
import *as actions from './../actions/actions'
const uuidv1 = require('uuid/v1');
 class TaskForm extends Component {
   constructor(props) {
     super(props);
     this.state={
       id:'',
       name:'',
       status:false
     }
   }
   
  closeForm=()=>this.props.closeForm();
  onChange=(e)=>{
   
    const target=e.target;
    const name=target.name;
    var value=target.value;
    
if(name === 'status'){
    value = target.value === 'true' ? true : false
}
    this.setState({
      
      [name]:value
    })
  }
 
  clearForm=()=>{
    this.setState({
      name:'',
      status:false
    })
  }
  onSave=(e)=>{
    e.preventDefault();
    this.props.onSaveTasks(this.state);
    this.props.closeForm();
    this.clearForm();
    
  }
  componentWillMount(){
    if(this.props.getEdit&&this.props.getEdit.id!=null){
      this.setState({
        id:this.props.getEdit.id,
        name:this.props.getEdit.name,
        status:this.props.getEdit.status
        
        })
    }

  }
  componentWillReceiveProps(nextProps){
    if(nextProps&&nextProps.getEdit){
      this.setState({
        id:nextProps.getEdit.id,
        name:nextProps.getEdit.name,
        status:nextProps.getEdit.status
      })
    }
    
  else{
    this.clearForm();
  }

  }
  render() {
    const {id}=this.state;
    console.log(this.props.getEdit.name);
    return (
       
        <div className="card border-primary mb-3" >
          <div className="card-header text-left">
          {!id?"Them cong viec":"edit data"}
          <span className="fa fa-times-circle float-right "
          
                onClick={this.closeForm}
           />
          </div>
          <div className="card-body text-primary">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label className="float-left">Ten:</label>
                <input
                 type="text" 
                 className="form-control" 
                 id="formGroupExampleInput" 
                 name="name"
                 value={this.state.name}
                 onChange={this.onChange}
                 />
              </div>
              <div className="form-group">
                <label className="float-left">Chon trang thai</label>
                <select
                 className="custom-select mr-sm-2" 
                 id="inlineFormCustomSelect"
                 onChange={this.onChange}
                 name="status"
                 value={this.state.status}
                 >
                
                  <option value={false}>an</option>
                  <option value={true}>kich hoat</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" 
                className="btn btn-danger"><span className="fa fa-plus" /> luu lai</button>
                <button type="button"
                 className="btn btn-info"
                 onClick={this.clearForm}
                 >
                 <span className="fas fa-times" 
                /> huy bo</button>
              </div>
            </form>
          </div>
          </div>
     
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    getEdit: state.getEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeForm: () => {
      dispatch(actions.closeForm())
    },
    onSaveTasks: (tasks) => {
      dispatch(actions.onSaveTasks(tasks))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (TaskForm)