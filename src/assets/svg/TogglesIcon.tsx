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
                d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"
                ></path>
        </svg>
    );
}

export default Icon;