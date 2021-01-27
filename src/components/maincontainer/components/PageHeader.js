import React from "react";
import RocketIcon from "../../../assets/RocketIcon";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import DatePicker from "../../date-picker/DatePicker";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 0 2rem 2rem;
  background-color: #fafafa;
`;

const useStyle = makeStyles((theme) => ({
  headerTitle: {
    marginLeft: theme.spacing(1),
    color: "#31394d",
    fontWeight: "500",
  },
}));

function PageHeader() {
  const classes = useStyle();
  return (
    <Wrapper>
      <RocketIcon />
      <Typography variant="h5" className={classes.headerTitle}>
        RELEASE
      </Typography>
      <DatePicker />
    </Wrapper>
  );
}

export default PageHeader;
