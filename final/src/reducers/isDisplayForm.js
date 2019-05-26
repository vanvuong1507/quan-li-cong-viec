import *as styles from '../constant/actionStyle'

const nameInitialState = false
const isDisplayForm = (state = nameInitialState, action) => {
    switch (action.type) {
        case styles.ON_TOGGLE_FORM:
            return !state
        case styles.CLOSE_FORM:
            state=false;
            return state
        case styles.SHOW_FORM:
            state=true;
            return state
        default:
            return state
    }
}

export default isDisplayForm