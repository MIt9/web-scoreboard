import React, {useCallback, useContext, useState} from 'react';

import {SettingsContext} from "./providers/SettingsProvider";
import {getLngDate, LNG_KEYS} from "./services/lngService";

import Center from './components/Center/Center';
import ClickList from './components/ClickList/ClickList';
import Header from "./components/Header/Header";
import Sportsman from './components/Sportsman/Sportsman';
import Timer from './components/Timer/Timer';
import TimerControl from "./components/TimerControl/TimerControl";
import SettingPanel from "./components/SettingPanel/SettingPanel";
import Settings from "./components/Settings/Settings";

import './App.css';

const BREAK = 30;

function App() {
    const {state: {lng, match}} = useContext(SettingsContext);
    const [display, setDisplay] = useState(true);
    const [revers, setRevers] = useState(false);
    const [time, setTime] = useState(match);

    const startBreak = useCallback(() => setDisplay(() => {
        setTimeout(() => {
            setTime(BREAK);
            setRevers(true);
            setDisplay(true);
        },0);
        return false;
    }), []);

    const startMatch = useCallback(() => setDisplay(() => {
        setTimeout(() => {
            setTime(match);
            setRevers(false);
            setDisplay(true);
            },0);
        return false;
    }), [match]);

    return (
    <div className="layout">
        <Header lng={lng}/>
        <div className="content">
            <Sportsman align="left" color="red" lng={lng}/>
            <Sportsman align="right" color="blue" lng={lng}/>
        </div>
        <Center className="center-holder">
            <TimerControl startMatch={startMatch} startBreak={startBreak}/>
            {display && <Timer maxValue={time} revers={revers} size={"large"}/>}
            <ClickList list={getLngDate(LNG_KEYS.stages, lng)} className="center-list"/>
        </Center>
        <SettingPanel>
            <Settings/>
        </SettingPanel>
    </div>
  );
}

export default App;
