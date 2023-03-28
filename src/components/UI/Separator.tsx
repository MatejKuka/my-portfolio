import React from 'react';

type propsType = {
    classProp: string
}

const Separator: React.FC<propsType> = ({classProp}) => {
    return (
        <div className={classProp}>
        </div>
    );
}

export default Separator;