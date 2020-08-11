import React, { ReactPropTypes as TProp } from "react";
import { ServiceConsumer } from "../ServiceContext/ServiceContext";

export const WithContextService = () => (Wrapped: any) => {
  return (props: TProp) => {
    return (
      <ServiceConsumer>
        {(StoreService) => {
          return <Wrapped {...props} StoreService={StoreService} />;
        }}
      </ServiceConsumer>
    );
  };
};