import React from 'react';
import './ErrorIndicator.scss';

type TProp = {

}

enum cn {
    ErrorIndicator = 'error-indicator',
}

export const ErrorIndicator = ({ }: TProp) => {
    return (
        <div className={cn.ErrorIndicator}>
            ErrorIndicator
        </div>
    );
}