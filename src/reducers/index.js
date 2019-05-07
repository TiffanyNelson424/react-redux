import { combineReducers } from "redux"
import postReducer from "./PostReducer.js"

export default combineReducers({
  posts: postReducer,
})
