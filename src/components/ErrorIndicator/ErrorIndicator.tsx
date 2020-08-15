import React from 'react';
import './ErrorIndicator.scss';

type TProps = {

}

enum cn {
    ErrorIndicator = 'error-indicator',
}

export const ErrorIndicator = (props: TProps) => {
    return (
        <div className={cn.ErrorIndicator}>
            ErrorIndicator
        </div>
    );
}