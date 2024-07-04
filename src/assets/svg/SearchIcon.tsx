import React, { FC } from "react";
interface Type {
    color?: string,
    width?: number,
    height?: number
}
const Icon: FC<Type> = ({ color = '#FFF', width = 25, height = 25 }) => {
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            fill="none"
            viewBox="0 0 18 18"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            ></path>
        </svg>
    );
}

export default Icon;