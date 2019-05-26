import {combineReducers} from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import getEdit from './getEdit';

 const myReducer=combineReducers({
     tasks:tasks,
     isDisplayForm:isDisplayForm,
     getEdit:getEdit
    

 })
 export default myReducer