import { createStore } from "redux";
import { reducer } from "./Reducers";

export let store = createStore(reducer);
