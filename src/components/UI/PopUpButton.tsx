import React from 'react';

type propsType = {
    linkPath: string,
    iconPath: string,
    className: string
}

const PopUpButton: React.FC<propsType> = ({linkPath, iconPath, className}) => {

    return (
        <div className={className}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={linkPath}>
                <img src={iconPath} alt="Icon"/>
            </a>
        </div>
    );
}

export default PopUpButton;