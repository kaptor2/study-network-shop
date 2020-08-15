import React from "react";
import { ServiceConsumer } from "../ServiceContext/ServiceContext";
import { IStoreService } from "../../services/IStoreService";

export const WithContextService = (Wrapped: any) => (props: any) => (
  <ServiceConsumer>
    {(StoreService: IStoreService) => <Wrapped {...props} StoreService={StoreService} />}
  </ServiceConsumer>
);