import React from 'react';
import './App.scss';

type TProp = {

}

enum cn {
    App = 'app',
}

export const App = ({ }: TProp) => {
    return (
        <div className={cn.App}>
            App
        </div>
    );
}