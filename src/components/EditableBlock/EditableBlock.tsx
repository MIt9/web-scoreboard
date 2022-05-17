import React, {FC} from "react";

const EditableBlock: FC<{defaultText? :string; className?: string;}> = ({defaultText, className}) => {
    return <div className={className} contentEditable suppressContentEditableWarning>{defaultText}</div>
}

export default EditableBlock;
