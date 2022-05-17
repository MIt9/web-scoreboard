import {MouseEventHandler, useCallback, useState} from "react";

const useUpdateNumberByClick = (maxValue: number, fromZero: boolean = true, circle: boolean = false) : [number, MouseEventHandler<HTMLHeadingElement> | undefined, MouseEventHandler<HTMLHeadingElement> | undefined] => {
    const min = fromZero? 0 : 1;
    const [value, setValue] = useState<number>(min);

    const onLeftClick = useCallback(() =>
        setValue((oldValue) => {
            const newValue = oldValue + 1;
            if (newValue > maxValue) {
                return circle? min : oldValue;
            }
            return newValue;
        }), [maxValue, circle, min]);

    const onRightClick = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        setValue((oldValue) =>
            oldValue > min ? oldValue - 1 : circle? maxValue : oldValue)
    }, [min, maxValue, circle]);

    return [value, onLeftClick, onRightClick];
}

export default useUpdateNumberByClick;
