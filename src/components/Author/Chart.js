import React from "react";
// chart
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// context stuff
import { useAuthorContext } from "../../context/author_context";
// styled components
import styled from "styled-components";
const Chart = () => {
  const { dashboard } = useAuthorContext();
  return (
    <Wrapper className="chart">
      <p className="chart__text">broj objava po kategorijama</p>
      <ResponsiveContainer width={"99%"} height={"100%"}>
        <LineChart data={dashboard}>
          <Line type="monotone" dataKey="counter" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .chart__text {
    color: var(--black-1);
    text-transform: capitalize;
    font-weight: 999;
  }
  @media screen and (min-width: 500px) {
    display: block;
    height: calc(100vh - 53px - 444px - 32px - 21px - 16px);
  }
`;
export default Chart;
