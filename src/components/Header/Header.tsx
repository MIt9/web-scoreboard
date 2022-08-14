import React, {FC} from "react";

import {LanguageType} from "../../types";
import {getLngDate, LNG_KEYS} from "../../services/lngService";

import Points from "../Points/Points";
import EditableBlock from "../EditableBlock/EditableBlock";

import "./Header.css";

const Header: FC<LanguageType> = ({lng}) => {
    return <header className="header-wrapper">
        <div className="weight">
            <Points key={1} maxValue={20} circle={true} fromZero={false} className="weight-value"/>
            <Points key={2} maxValue={9} circle={true} fromZero={true} className="weight-value"/>
            {getLngDate(LNG_KEYS.kg, lng)}
        </div>
        <div className="state">
            <div className="match">
                <EditableBlock editText={getLngDate(LNG_KEYS.match, lng)} defaultText={"0"}
                               className="match-value">{getLngDate(LNG_KEYS.match, lng)}: </EditableBlock>
            </div>
            <div className="period"><Points maxValue={2} circle={true}
                                            fromZero={false}
                                            className="period-value">{getLngDate(LNG_KEYS.period, lng)}: </Points>
            </div>
        </div>
    </header>
};

export default Header;
