import *as styles from '../constant/actionStyle'

const nameInitialState = {
    id:'',
    name:'',
    status:false
}
const getEdit = (state = nameInitialState, action) => {
    switch (action.type) {
        case styles.GET_EDIT:
        state=action.getEdit;
        console.log(action)
        console.log(state)
            return {...state}
      
        default:
            return state
    }
}
export default getEdit