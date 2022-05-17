import React, {FC} from "react";

import useUpdateNumberByClick from "../../hooks/useUpdateNumberByClick";

const ClickList: FC<{list: string[], className?: string}> = ({list, className}) => {
    const [index, onClick, onRightClick] = useUpdateNumberByClick(list.length - 1, true, true);
    return <article
        className={className}
        onClick={onClick}
        onContextMenu={onRightClick}
    >{list[index]}</article>
}

export default ClickList;
