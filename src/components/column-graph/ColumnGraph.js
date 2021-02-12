import React from "react";
import styled, { keyframes } from "styled-components";

const Fill = (props) => keyframes`
from {
    height:0%;
  }
  to {
      height:${props.height}%;
  }
`;

const BarContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;
const ScaleY = styled.ul`
  display: block;
  height: 200px;
  margin-right: 5px;
`;
const ScaleYItems = styled.li`
  list-style: none;
  height: 100px;
  font-size: 10px;
  font-weight: bold;
`;
const ScaleX = styled.ul`
  display: flex;
  width: 100%;
  background: transparent;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
`;
const ScaleXItems = styled.li`
  list-style: none;
  width: 50px;
  position: relative;
`;
const ScaleXItemsLabel = styled.span`
  position: absolute;
  bottom: -13px;
  text-align: center;
`;
const ScaleXItemsBar = styled.div`
  position: absolute;
  bottom: 0;
  background: green;
  width: 40px;
  margin-left: 10px;
  text-align: center;
  animation: ${Fill} 1s ease-in-out forwards;
`;

const BarGraph = () => {
  const Options = [
    { Label: "L1", height: "30" },
    { Label: "L2", height: "50" },
    { Label: "L3", height: "80" },
    { Label: "L4", height: "20" },
  ];

  return (
    <BarContainer>
      <ScaleY>
        <ScaleYItems>100%</ScaleYItems>
        <ScaleYItems>50%</ScaleYItems>
        <ScaleYItems>0%</ScaleYItems>
      </ScaleY>
      <ScaleX>
        {Options.map((item, index) => (
          <ScaleXItems key={index}>
            <ScaleXItemsBar height={item.height}>{item.height}%</ScaleXItemsBar>
            <ScaleXItemsLabel>{item.Label}</ScaleXItemsLabel>
          </ScaleXItems>
        ))}
      </ScaleX>
    </BarContainer>
  );
};

export default BarGraph;
