import React, {FC, useCallback, useContext} from "react";
import { LANGUAGE } from "../../constants";

import {SettingsContext} from "../../providers/SettingsProvider";
import {getLngDate, LNG_KEYS} from "../../services/lngService";

import "./Settings.css";

const Settings: FC = () => {
    const {state: {lng, match}, dispatch} = useContext(SettingsContext);

    const onLngChange = useCallback((e)=> {
        dispatch({type: "update", payload: {lng: e.target.value}});
    }, [dispatch]);

    const onMatchTimeChange = useCallback((e)=> {
        dispatch({type: "update", payload: {match: +e.target.value}});
        setTimeout(() => {window.location.reload()}, 200);
    }, [dispatch]);

    return (
        <div className="setting__form">
            <label>{getLngDate(LNG_KEYS.labelLng, lng)}: <select name="lng" value={lng} onChange={onLngChange}>
                {Object.keys(LANGUAGE).map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            </label>
            <label>{getLngDate(LNG_KEYS.labelMatch, lng)}: <select name="match" value={match} onChange={onMatchTimeChange}>
                <option value="180">3:00</option>
                <option value="150">2:30</option>
                <option value="120">2:00</option>
                <option value="90">1:30</option>
                <option value="60">1:00</option>
            </select>
            </label>
        </div>
    )
}

export default Settings;
