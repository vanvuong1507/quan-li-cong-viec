
import *as styles from './../constant/actionStyle'
const uuidv1 = require('uuid/v1');
var tasks=JSON.parse(localStorage.getItem('data'));


const nameInitialState=tasks?tasks:[];
const myReducer = (state = nameInitialState, action) => {
    switch (action.type) {
        case styles.SHOW_DATA:
            return state
        case styles.ON_SAVE_TASKS:
       var task={
           id:action.tasks.id,
           name:action.tasks.name,
           status:action.tasks.status

       }
       console.log(task);
       if(!task.id){
           task.id=uuidv1();
        state.push(task);
       }else{
           var indexX=state.findIndex(value=>value.id===task.id);
           console.log(indexX);
           state[indexX]=task;
           console.log( state[indexX]);
       }
   
    console.log(indexId);

       localStorage.setItem('data',JSON.stringify(state));
        return [...state]
        case styles.DELETE_DATA:
        state=[...state].filter(value=>value.id!==action.tasks.id)
        localStorage.setItem('data',JSON.stringify(state));
        return[...state]
        
        case styles.CHANGE_STATUS:
var indexId=state.findIndex(value=>value.id===action.tasks.id);
console.log(indexId);
state[indexId]={
    ...state[indexId],
    status:!state[indexId].status
}
localStorage.setItem('data',JSON.stringify(state)); 
            console.log(action);
                return [...state]
        default:
            return state
    }
}
export default myReducer