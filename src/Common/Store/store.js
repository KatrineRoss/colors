import {createStore, combineReducers} from 'redux';
import {ColorListReducers, SelectedColorReducers} from '../../Modules/Color/ColorReducers';
import {SortingReducers} from '../Sorting/SortingReducers';
import {ESortTypes} from '../Sorting/Consts';

const initialState = {
    colors: [
        {
            id: '0',
            name: 'palePink',
            code: '#ed95b4',
            rating: '4'
        },
        {
            id: '1',
            name: 'slowGreen',
            code: '#68d9b3',
            rating: '4'
        },
        {
            id: '2',
            name: 'slowBlue',
            code: '#51b5e0',
            rating: '4'
        },
        {
            id: '3',
            name: 'slowYellow',
            code: '#edce77',
            rating: '4'
        },
        {
            id: '4',
            name: 'slowOrange',
            code: '#ff7b61',
            rating: '4'
        }
    ],
    sorting: ESortTypes.BY_DATE,
    selectedColor: []
}

const reducersMap = {
    colors: ColorListReducers,
    sorting: SortingReducers,
    selectedColor: SelectedColorReducers
}

export const store = createStore(
    combineReducers(reducersMap),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
