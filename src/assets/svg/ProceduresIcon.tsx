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
            viewBox="0 0 20 20"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M5 0C2 0 0 3 0 6C0 8.11 1 11 2 12C3 13 4 20 6 20C10.54 20 8 13 10 13C12 13 9.46 20 14 20C16 20 17 13 18 12C19 11 20 8.11 20 6C20 3 18 0 15 0C12 0 12 1 10 1C8 1 8 0 5 0Z"                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default Icon;