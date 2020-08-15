import { Taction } from './../actions/Taction';
import { ACTION } from './../actions/constants';

type TState = {
    books: Array<any>;
}

const initialState: TState = {
    books: []
}

export const reducer = (state: TState = initialState, action: Taction): TState => {
    switch (action.type) {
        case ACTION.BOOKS_LOADED:
            return {
                books: action.payload
            }
        default:
            return state;
    }
}