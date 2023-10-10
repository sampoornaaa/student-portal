import { combineReducers } from "redux";
import addStuReducer from "./addstuReducer";
import favouriteReducer from "./favoriteReducer";

export const reducer=combineReducers({
    add:addStuReducer,
    fav:favouriteReducer
})