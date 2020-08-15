type book = {
    id: 1,
    title: string,
    author: number,
    description: string,
    image: string
}

export interface IStoreService {
    getAllbooks: () => Promise<book[]>,
    getbook: (id: number) => Promise<book>
}