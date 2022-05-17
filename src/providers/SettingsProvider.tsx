import React, {Context, createContext, Dispatch, FC, useEffect, useReducer} from "react";
import {LANGUAGE} from "../constants";

export interface SettingsStateContext {
    lng: LANGUAGE;
    match: number;
}

export interface ISettingsContext {
    state: SettingsStateContext;
    dispatch: Dispatch<any>;
}

const reducer = (state: SettingsStateContext, action: {type: string, payload: any}): SettingsStateContext =>  {
    switch (action.type) {
        case 'update':
            return {...state, ...action.payload};
        default:
            throw new Error();
    }
}

export const SettingsContext: Context<ISettingsContext> = createContext(
    {} as ISettingsContext
)

export const initialSettingsState = () => {
    const state: SettingsStateContext = {lng: LANGUAGE["ENG"], match: 180};
    try {
        const saveString = localStorage.getItem("settings");
        if (saveString) {
            const tmp = JSON.parse(saveString);
            if (!!tmp && typeof tmp.lng === "string" && typeof tmp.match === "number") {
                state.lng = tmp.lng;
                state.match = tmp.match;
            }
        }
    } catch (err) {
        console.log(err);
    }
    return state;
}

export const SettingsProvider: FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialSettingsState());

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(state));
    }, [state]);

    return (
        <SettingsContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}
