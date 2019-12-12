import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Persons from './components/Persons';
import styled from "styled-components";


const AppBox = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const PageButtons = styled.div`
  display: flex;
  width: 75%;
  justify-content: flex-end;
  align-items: center;
  height: 25px;
`;

const ButtonPrevious = styled.button`
  width: 25%;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 3px 5px 6px #c2b280;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 5px 6px #c2b280;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 5px 6px #c2b280;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  font-size: 15px;
  margin-right: 125px;
`;

const ButtonNext = styled.button`
  width: 25%;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 3px 5px 6px #c2b280;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 5px 6px #c2b280;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 5px 6px #c2b280;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
  font-size: 15px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    axios.get(`https://swapi.co/api/people/?page=${page}&format=json`)
    // 'https://swapi.co/api/people/2/?format=api'

    // 'https://swapi.co/api/people/?format=json'
    .then(response => {
      setData(response.data.results)
    })
    .catch(error =>{console.log('error in api request :(')})
  }


  useEffect(fetchData, [page])

  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PageButtons>
        <ButtonPrevious onClick={() => setPage(page - 1)}>Previous</ButtonPrevious>

        <ButtonNext onClick={() => setPage(page + 1)}>Next</ButtonNext>
      </PageButtons>
      <AppBox>
        {data.map((starwars, index) => {
          return <Persons name={starwars.name} key={index}  height={starwars.height} birthday={starwars.birth_year} mass={starwars.mass} gender={starwars.gender}/>
        })}
      </AppBox>
      <PageButtons>
        <ButtonPrevious onClick={() => setPage(page - 1)}>Previous</ButtonPrevious>

        <ButtonNext onClick={() => setPage(page + 1)}>Next</ButtonNext>
      </PageButtons>
    </div>
  );
}

export default App;
