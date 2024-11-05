import { combineReducers, createStore } from "redux";
import { scienceReducer } from "./scienceReducer";
import { countryReducer } from "./countryReducer";
import { ideologyReducer } from "./ideologyReducer";
import { internetReducer } from "./internetReducer";
import { videosReducer } from "./videosReducer";
import { linguisticsReducer } from "./linguisticsReducer"
import { religionReducer } from "./religionReducer";
import { sociologyReducer } from "./sociologyReducer";
import { phylosofyReducer } from "./phylosofyReducer";
import { itReducer } from "./itReducer";
import { psychologyReducer } from "./psychologyReducer";
import { economyReducer } from "./economyReducer"
import { commonReducer } from "./commonReducer";

const rootReducer = combineReducers({
    science: scienceReducer,
    country: countryReducer,
    ideology: ideologyReducer,
    internet: internetReducer,
    videos: videosReducer,
    linguistics: linguisticsReducer,
    religion: religionReducer,
    sociology: sociologyReducer,
    phylosofy: phylosofyReducer,
    psychology: psychologyReducer,
    economy: economyReducer,
    it: itReducer,
    common: commonReducer
})

export const store = createStore(rootReducer);