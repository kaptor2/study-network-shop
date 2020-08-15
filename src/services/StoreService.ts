import { IStoreService } from './IStoreService';

export class StoreService implements IStoreService {
    private _apiBase = "http://localhost:3004/";

    private async getResource(url: string) {
        const fetchURL = `${this._apiBase}${url}`;
        const res = await fetch(fetchURL);
        if (!res.ok) {
            throw new Error(`Cold not fetch ${fetchURL}
            received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    public getAllbooks = async () => {
        const books = await this.getResource(`books/`);
        return books;
    }

    public getbook = async (id: number) => {
        const book = await this.getResource(`books/${id}`);
        return book;
    }
}