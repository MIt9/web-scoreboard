import React, {FC} from "react";
import EditableBlock from "../EditableBlock/EditableBlock";
import Points from "../Points/Points";
import Toggle from "../Toggle/Toggle";

import "./Sportsman.css";
import {LANGUAGE} from "../../constants";
import {getLngDate, LNG_KEYS} from "../../services/lngService";

type SportsmanType = {
    align: "left" | "right";
    color: "red" | "blue";
    lng: LANGUAGE,
    className?: string;
}

const Sportsman: FC<SportsmanType> = ({className, align, color, lng}) => {
    const cn = `sportsman-wrapper direction-${align} ${className || ""}`;
    return <div className={cn} style={{backgroundColor: color}}>
        <EditableBlock defaultText={getLngDate(LNG_KEYS.sportsmanPlaceholder, lng)} className="sportsman-city"/>
        <Toggle className="sportsman-toggle">{getLngDate(LNG_KEYS.p, lng)}</Toggle>
        <Points maxValue={99} className="sportsman-points"/>
    </div>
}

export default Sportsman;
