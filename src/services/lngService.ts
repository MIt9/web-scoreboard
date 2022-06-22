import {LANGUAGE} from "../constants";
import {initialSettingsState} from "../providers/SettingsProvider";
const PRE_SAVED_LNG = initialSettingsState().lng;

export enum LNG_KEYS {
    p="p",
    kg="kg",
    match="match",
    period="period",
    stages="stages",
    labelLng="labelLng",
    labelMatch="labelMatch",
    sportsmanPlaceholder="sportsmanPlaceholder"
}

const ENG = {
    [LNG_KEYS.p]: "P",
    [LNG_KEYS.kg]: "kg",
    [LNG_KEYS.labelLng]: "Language",
    [LNG_KEYS.labelMatch]: "Match",
    [LNG_KEYS.match]: "match",
    [LNG_KEYS.period]: "period",
    [LNG_KEYS.stages]: ["Qual","1/32", "1/16","1/8","1/4","1/2","Rep","F3","F"],
    [LNG_KEYS.sportsmanPlaceholder]: "Rival"
};

const UKR = {
    [LNG_KEYS.p]: "П",
    [LNG_KEYS.kg]: "кг",
    [LNG_KEYS.labelLng]: "Мова",
    [LNG_KEYS.labelMatch]: "Тривалість сутички",
    [LNG_KEYS.match] : "сутичка",
    [LNG_KEYS.period] : "періуд",
    [LNG_KEYS.stages] : ["Кв.","1/32", "1/16","1/8","1/4","1/2","Ут.","Ф3","Ф"],
    [LNG_KEYS.sportsmanPlaceholder]: "Україна"
};

export const LANGUAGE_DIC: {[key: string]: {[key: string] : any | undefined}} = {
    [LANGUAGE.ENG] : ENG,
    [LANGUAGE.UKR] : UKR,
};

export function getLngDate(id: string, lng: LANGUAGE): string | any {
    const dic = LANGUAGE_DIC[lng || PRE_SAVED_LNG];

    return !!dic && dic[id] ? dic[id] : lng + "." + id;
}
