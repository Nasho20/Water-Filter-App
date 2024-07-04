import React, { FC } from "react";
interface Type {
    color?: string,
    width?: number,
    height?: number
}
const Icon: FC<Type> = ({ color = '#FFF', width = 23, height = 23 }) => {
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            fill="none"
            viewBox={`0 0 ${width} ${height}`}
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
            ></path>
        </svg>
    );
}

export default Icon;