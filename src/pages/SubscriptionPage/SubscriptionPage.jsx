import React from "react";
import { Navigation } from "../../components/navigation";
import { Subscription } from "../../components/Subscription/Subscription.tsx";
import styled from "styled-components";

const SubscriptionPage = () => {
  return (
    <SubscriptionWrapper>
      <Navigation />
      <Subscription />
    </SubscriptionWrapper>
  );
};

export default SubscriptionPage;

const SubscriptionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
