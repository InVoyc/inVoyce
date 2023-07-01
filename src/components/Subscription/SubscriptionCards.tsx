import styled from "styled-components";

interface CardProps {
  plan?: string;
  price?: string;
  style?: any;
  onClick: () => void;
}

const SubscriptionCards = ({ plan, price, style, onClick }: CardProps) => {
  return (
    <Card onClick={onClick} style={style}>
      <h1>{plan}</h1>
      <span>{price}</span>
    </Card>
  );
};

export default SubscriptionCards;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 14rem;
  padding-bottom: 2rem;
  // border: 1px solid #777;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    margin-top: -0.5rem;
    transition: 0.5s;
    transform: translatey(-10px) translatex(-10px) scale(1.05);
    // border: 1px solid #5ca9fb;
  }
`;
