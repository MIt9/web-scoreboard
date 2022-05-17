import {FC, useCallback, useState} from "react";

import "./Toggle.css";

const Toggle: FC<{className: string}> = ({className, children}) => {
    const [active, setActive] = useState<boolean>(false);
    const onClick = useCallback(() => setActive((old) => !old), [])
    const cn = `toggle ${className || ""} ${active? "toggle-active" : ""}`
    return <div className={cn} onClick={onClick}>
        {children}
    </div>
}

export default Toggle;
