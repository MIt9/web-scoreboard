import React, {FC, useState} from "react";

const EditableBlock: FC<{editText?: string, defaultText? :string; className?: string;}> = ({editText, defaultText, className, children}) => {
    const [text, setText] = useState(defaultText);

    const onClick = () => {
        const newText = prompt(editText || "", defaultText)
        setText(newText || defaultText)
    }

    return <div onClick={onClick} className={className} >{children}{text}</div>
}

export default EditableBlock;
