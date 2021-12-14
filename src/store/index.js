import {createStore, combineReducers} from 'redux';
import ListReducer from './reducers/List.reducers';

const RootReducer = combineReducers({
    list: ListReducer,
});

export default createStore(RootReducer);
