import { createContext } from "react";
import { StoreService } from "../../services/StoreService";

const {
    Provider: ServiceProvider,
    Consumer: ServiceConsumer
} = createContext(new StoreService());

export {
    ServiceProvider,
    ServiceConsumer
}