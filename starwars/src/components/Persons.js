import React from "react";
import './StarWars.css';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  text-decoration: underline;
  text-align: center;
`;

const StyleP = styled.p`
    color: lightgray;
    font-size: 1.2rem;
`;

const Persons = (props) => {
    return (
        <div className="ContainerComp">
          <StyledH2>{props.name}</StyledH2>
          <StyleP>Gender: {props.gender}</StyleP>
          <StyleP>Birth Year: {props.birthday}</StyleP>
          <StyleP>Height: {props.height} cm</StyleP>
          <StyleP>Weight: {props.mass} kg</StyleP>
        </div>
    )
}

export default Persons;
