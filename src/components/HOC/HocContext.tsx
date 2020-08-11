import React, { ReactPropTypes as TProp } from "react";
import { ServiceConsumer } from "../ServiceContext/ServiceContext";

export const HocContext = () => (Wrapped: any) => {
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