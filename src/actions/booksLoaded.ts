import { ACTION } from './constants';

export const booksLoaded = (newBooks: Array<any>)  => {
    return {
        type: ACTION.BOOKS_LOADED,
        payload: newBooks
    }
}