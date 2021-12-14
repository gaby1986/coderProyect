import { Switch } from 'react-native';
import dummy from '../../data'
import { SELECT_ITEM } from '../actions/List.actions';


const initialState = {
    list: dummy,
    selected: null,
}
 
const ListReducer = (state = initialState, action) =>{

    switch(action.type){
        case SELECT_ITEM:
            return {
                ...state,
                selected: action.itemId
            };
        default:
            return state; //devuelvo el mismo estado para evitar renders adicionales
    }
};

export default ListReducer;