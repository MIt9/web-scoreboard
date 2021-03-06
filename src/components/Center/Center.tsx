import React, {FC} from "react";

const Center: FC<{className?: string;}> = ({className, children}) => {
    return <div className={className}>
        {children}
    </div>
}

export default Center;
