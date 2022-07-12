import { combineReducers } from "redux";
import { INCREMENT, DECREMENT, DIVIDE, DOUBLE } from "../actions";
const initApp = {
    count:0,
    clicked:0
}
function fc_app(state = initApp,action){
    console.log(action)
    switch(action.type){
        case INCREMENT:{
            return{
                count:state.count+1,
                clicked: state.clicked+1
            }
        }
        case DECREMENT:{
            return{
                count:state.count-1,
                clicked: state.clicked+1
            }
        }
        case DIVIDE:{
            return{
                count:state.count/2,
                clicked: state.clicked+1
            }
        }
        case DOUBLE:{
            return{
                count:state.count*2,
                clicked: state.clicked+1
            }
        }
        default:
            return state;
    }
}
const reduxApp = combineReducers({
    dataApp : fc_app
})
 
export default reduxApp;