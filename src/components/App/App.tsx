import React from 'react';
import './App.scss';
import { WithContextService } from '../HOC/WithContextService';
import { IStoreService } from '../../services/IStoreService';

type TProp = {
    StoreService: IStoreService
}

enum cn {
    App = 'app',
}

export const App = WithContextService((props: TProp) => {
    const { StoreService } = props;
    StoreService && console.log(StoreService.getAllbooks());
    return (
        <div className={cn.App}>
            <b>App</b>
        </div>
    );
});
