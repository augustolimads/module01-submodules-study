import React from "react";
import styled from "styled-components";
import style from "./style.module.css";

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;

const Button = styled.button`
  flex: 1;
  color: black;
  font-size: 20px;
  background-color: blue;
  border: none;
  border-radius: 4px;
  &:active {
    background-color: black;
    color: white;
  }
`;

export function CounterButtons({ increase, decrease }) {
  return (
    <Buttons>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </Buttons>
  );
}
