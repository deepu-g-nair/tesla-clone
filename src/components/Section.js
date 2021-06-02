import React from "react";
import styled from "styled-components";
// import bg from "../images/model-s.jpg";

const Section = (props) => {
  return (
    <Container bgImage={props.backgroundImg}>
      <ItemText>
        <h1> {props.title} </h1>
        <p> {props.description} </p>
      </ItemText>
      <ButtonGroup>
        <LeftButton> {props.leftBtnText} </LeftButton>
        <RightButton> {props.rightBtnText} </RightButton>
      </ButtonGroup>
      <DownArrow
        src="/images/down-arrow.svg"
        style={{ display: props.displayArrow }}
      />
    </Container>
  );
};

export default Section;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 100vh;
  background: ${(props) => `url(/images/${props.bgImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex-grow: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 15px;
`;
