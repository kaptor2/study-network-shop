import React from 'react';
import './Spinner.scss'

type TProp = {

}

enum cn {
    Spinner = 'spinner',
}

export const Spinner = ({ }: TProp) => {
    return (
        <div className={cn.Spinner}>
            Spinner
        </div>
    );
}