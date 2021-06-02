/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
// import logo from "/images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="tesla logo" />
      </a>
      <MenuGroup>
        <div>Model S</div>
        <div>Model 3</div>
        <div>Model X</div>
        <div>Model Y</div>
        <div>Solar Roof</div>
        <div>Solar Panels</div>
      </MenuGroup>
      <RightMenu>
        <a href="#">Tesla Account</a>
        <MenuIconContainer onClick={() => setBurgerStatus(!burgerStatus)}>
          <MenuIcon />
        </MenuIconContainer>
      </RightMenu>
      <BurgerNav status={burgerStatus}>
        <CloseContainer onClick={() => setBurgerStatus(!burgerStatus)}>
          <Close />
        </CloseContainer>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MenuGroup = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-left: 80px;
  div {
    font-weight: 600;
    padding: 0px 10px;
    cursor: pointer;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding-right: 10px;
  }
`;

const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BurgerNav = styled.div`
  width: 300px;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  list-style: none;
  transform: ${(props) =>
    props.status ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;
