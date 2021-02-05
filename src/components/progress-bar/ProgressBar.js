import React from "react";
import styled, { keyframes } from "styled-components";

const Fill = (props) => keyframes`
from {
    width:0%;
  }
  to {
      width:${props.maxWidth}%;
  }
`;

const Meter = styled.div`
  display: flex;
  flex-direction: column;
  //   margin-top: 1rem;
  position: relative;
  height: 1rem;
  overflow: hidden;
  background-color: #ccc;
  border-radius: 10px;
`;
const Label = styled.div`
  margin-top: 1rem;
  margin-bottom: 5px;
  text-align: left;
  font-weight: 500;
`;
const Progress = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: green;
  animation: ${Fill} 3s ease-in-out forwards;
  border-radius: 10px;
`;

const ProgressBar = () => {
  const Options = [
    { BarName: "Lable1", width: "50" },
    { BarName: "Lable2", width: "80" },
  ];
  return (
    <div>
      {Options.map((item, index) => (
        <div key={index}>
          <Label>{item.BarName}</Label>
          <Meter key={index}>
            <Progress maxWidth={item.width} />
          </Meter>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
