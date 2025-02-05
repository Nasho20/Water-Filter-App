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
                d="M19.743 10.3165L10.743 0.3165C10.364 -0.1055 9.63598 -0.1055 9.25698 0.3165L0.256984 10.3165C0.12744 10.4601 0.0424085 10.6382 0.0122281 10.8293C-0.0179524 11.0203 0.00801875 11.216 0.0869837 11.3925C0.246984 11.7535 0.604984 11.9855 0.999984 11.9855H2.99998V18.9855C2.99998 19.2507 3.10534 19.5051 3.29288 19.6926C3.48041 19.8801 3.73477 19.9855 3.99998 19.9855H16C16.2652 19.9855 16.5196 19.8801 16.7071 19.6926C16.8946 19.5051 17 19.2507 17 18.9855V11.9855H19C19.1937 11.9863 19.3834 11.9308 19.546 11.8256C19.7087 11.7205 19.8372 11.5703 19.916 11.3934C19.9947 11.2165 20.0203 11.0204 19.9896 10.8292C19.9589 10.638 19.8732 10.4599 19.743 10.3165ZM14 12.9855H11V15.9855H8.99998V12.9855H5.99998V10.9855H8.99998V7.9855H11V10.9855H14V12.9855Z"
                ></path>
        </svg>
    );
}

export default Icon;