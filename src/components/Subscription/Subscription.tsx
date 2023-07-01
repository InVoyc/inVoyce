import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import "./Subscription.css";
import Button from "../Button";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import InputField from "../InputField";
import { monthlyPlanDetails, yearlyPlanDetails } from "./SidebarData";
import SubscriptionCards from "./SubscriptionCards";

interface ModalProp {
  handleCloseModal: () => void;
}

export const Subscription = ({ handleCloseModal }: ModalProp) => {
  const [selectedOption, setSelectedOption] = useState("Monthly");
  const [plans, setPlans] = useState(monthlyPlanDetails);
  const [selectedPlan, setSelectedPlan] = useState<any>(plans[2]);
  const [currentIndex, setCurrentIndex] = useState<number>(2);

  const cardStyle = {
    color: "#fff",
    backgroundColor: "#5ca9fb",
    backgroundImage: "linear-gradient(to right, #5ca9fb 0%, #6372ff 100%)",
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    selectedOption === "Monthly"
      ? setPlans(yearlyPlanDetails)
      : setPlans(monthlyPlanDetails);
    setSelectedPlan(plans[currentIndex]);
  };

  const selectPlan = (index: number) => {
    setSelectedPlan(plans[index]);
    setCurrentIndex(index);
  };

  useEffect(() => {
    setSelectedPlan(plans[currentIndex]);
  }, [currentIndex, plans]);

  return (
    <>
      <Modal
        children={
          <>
            <SubscriptionContainer>
              <SideBar>
                <StyledButton
                  onClick={handleCloseModal}
                  btnText={<IoMdClose />}
                />
                <ul className="features">
                  {selectedPlan[Object.keys(selectedPlan)[0]]?.features?.map(
                    (detail: string, index: number) => (
                      <li key={index}>{detail}</li>
                    )
                  )}
                </ul>
              </SideBar>
              <CardsContainer>
                <Title>
                  <span>Choose a plan</span>
                  <h1>Pick a plan for your organisation</h1>
                  <p>How often do you want to pay?</p>
                  <RadioBtns>
                    <label htmlFor="monthly">
                      <span>Monthly</span>
                      <InputField
                        type="radio"
                        value="Monthly"
                        id="monthly"
                        checked={selectedOption === "Monthly"}
                        onChange={handleOptionChange}
                      />
                    </label>
                    <label htmlFor="yearly">
                      <span>Yearly</span>
                      <InputField
                        type="radio"
                        value="Yearly"
                        id="yearly"
                        checked={selectedOption === "Yearly"}
                        onChange={handleOptionChange}
                      />
                    </label>
                  </RadioBtns>
                </Title>
                <CardsDisplay>
                  {plans.map((details: any, index: number) => (
                    <SubscriptionCards
                      key={index}
                      plan={Object.keys(details)[0]}
                      price={details[`${Object.keys(details)[0]}`]?.cost}
                      onClick={() => selectPlan(index)}
                      style={index === currentIndex ? cardStyle : null}
                    />
                  ))}
                </CardsDisplay>
                <PayBtn
                  btnText={`Pay ${selectedPlan[
                    `${Object.keys(selectedPlan)[0]}`
                  ]?.cost
                    .split(" ")
                    .slice(0, 1)}`}
                />
              </CardsContainer>
            </SubscriptionContainer>
          </>
        }
      />
    </>
  );
};

const SubscriptionContainer = styled.div`
  width: 80%;
  background-color: #fff;
  height: 80%;
  border-radius: 0.5rem;
  display: flex;
  font-size: 16px;
`;

const RadioBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 20rem;

  label {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-around;
    height: 100%;
  }
`;
const StyledButton = styled(Button)`
  width: 3rem;
  height: 3rem;
  border: none;
  color: #777;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #fff;

  &:hover {
    color: red;
  }
`;

const SideBar = styled.div`
  // border: 1px solid red;
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  border-radius: 0.5rem;

  .features {
    padding: 0 1rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    margin-top: 3rem;
    // border:1px solid red;
  }

  .features li {
    text-align: left;
    // border: 1px solid red;
    width: 100%;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 2rem 0.5rem;
    // display: flex;
    align-items: center;
    justify-content: flex-end;
    border-radius: 0.2rem;
    // background-color: #fff;
    // background-color: #5ca9fb;
    list-style-type: square;
    list-style-position: inside;
  }
`;

const CardsContainer = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  padding: 2rem;
`;

const Title = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  // border: 1px solid red;
  margin-top: 4rem;
`;
// export default Subscription;
const PayBtn = styled(Button)`
  width: 16rem;
  background-color: #5ca9fb;
  background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  margin: 10rem auto 0 auto;
  color: #fff;
  border: none;
  // border: 1px solid #777;
  border-radius: 2rem;
  padding: 1rem 2rem;

  &:hover {
    background-color: transparent;
    background-image: none;
    border: 1px solid #777;
    color: #5ca9fb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
