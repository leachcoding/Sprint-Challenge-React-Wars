import React from "react";
import './StarWars.css';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1rem;
  text-decoration: underline;
  text-align: center;
`;

const StyleP = styled.p`
    color: lightgray;
`;

const Persons = (props) => {
    return (
        <div className="ContainerComp">
          <StyledH2><h2>{props.name}</h2></StyledH2>
          <StyleP><p>Gender: {props.gender}</p></StyleP>
          <StyleP><p>Birth Year: {props.birthday}</p></StyleP>
          <StyleP><p>Height: {props.height} cm</p></StyleP>
          <StyleP><p>Weight: {props.mass} kg</p></StyleP>
        </div>
    )
}

export default Persons;
