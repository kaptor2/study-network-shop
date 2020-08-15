import { createContext } from "react";
import { IStoreService } from "../../services/IStoreService";

const defaultService: IStoreService = {
    getBooks: () => []
}

const {
    Provider: ServiceProvider,
    Consumer: ServiceConsumer
} = createContext(defaultService);

export {
    ServiceProvider,
    ServiceConsumer
}