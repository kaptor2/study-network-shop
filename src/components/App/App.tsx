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
    StoreService && console.log(StoreService.getBooks());
    return (
        <div className={cn.App}>
            App
        </div>
    );
});
