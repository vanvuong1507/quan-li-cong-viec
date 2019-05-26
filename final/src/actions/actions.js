
import *as types from './../constant/actionStyle'
export const showData=()=>{
    return{
        type:types.SHOW_DATA

    }
}
export const onToggleForm=()=>{
    return{
        type:types.ON_TOGGLE_FORM

    }
}
export const closeForm=()=>{
    return{
        type:types.CLOSE_FORM

    }
}

export const onSaveTasks=(tasks)=>{
    return{
        type:types.ON_SAVE_TASKS,
        tasks

    }
}
export const deleteData=(tasks)=>{
    return{
        type:types.DELETE_DATA,
        tasks

    }
}
export const changeStatus=(tasks)=>{
    return{
        type:types.CHANGE_STATUS,
        tasks

    }
}

export const showForm=()=>{
    return{
        type:types.SHOW_FORM
        

    }
}

export const getEdit=(getEdit)=>{
    return{
        type:types.GET_EDIT,
        getEdit
        

    }
}