import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchInitialData } from "./api";

export const initializeSession = () => ({
    type: "INITIALIZE_SESSION",
});

const storeData = (data) => ({
    type: "STORE_DATA",
    data,
});

const updateFilterValue = (k, val) => ({
    type: "SET_YEAR",
    payload: {
        key: k,
        value: val
    },
});

export const fetchData = (year, launchSuccess, landSuccess) => (dispatch, getState) => {

    let selectedYear = year
    let selectedLaunchSuccess = launchSuccess
    let selectedLandSuccess = landSuccess

    if (getState().filter.year) {
        selectedYear = getState().filter.year
    }
    if (getState().filter.launchSuccess) {
        selectedLaunchSuccess = getState().filter.launchSuccess
    }
    if (getState().filter.landSuccess) {
        selectedLandSuccess = getState().filter.landSuccess
    }
    return fetchInitialData(selectedYear, selectedLaunchSuccess, selectedLandSuccess).then(res => dispatch(storeData(res)));
}



export const filterYearData = (key, value) => (dispatch) =>
    dispatch(updateFilterValue(key, value));


const sessionReducer = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};
let initialState = {
    year: null,
    launchSuccess: null,
    landSuccess: null
}
const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_YEAR":
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };
            
        default: return state;
    }
};

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers({
    loggedIn: sessionReducer,
    data: dataReducer,
    filter: filterReducer
});

export default (initialState) =>
    createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
