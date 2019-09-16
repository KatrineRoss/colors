import {createStore, combineReducers} from 'redux';
import {ColorListReducers} from '../../Modules/Color/ColorReducers';
import {SortingReducers} from '../Sorting/SortingReducers';
import {ESortTypes} from '../Sorting/Consts';

const initialState = {
    colors: [
        {
            id: '0',
            name: 'palePink',
            code: '#ff85b4',
            rating: '4'
        },
        {
            id: '1',
            name: 'slowGreen',
            code: '#0f9451',
            rating: '4'
        }
    ],
    sorting: ESortTypes.BY_DATE
}

const reducersMap = {
    colors: ColorListReducers,
    sorting: SortingReducers
}

export const store = createStore(combineReducers(reducersMap), initialState);
