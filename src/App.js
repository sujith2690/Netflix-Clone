import React from 'react'
import './App.css'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPoster from './Components/Rowposter/RowPoster';
import {Action,Originals,Horror, Drama, Animation, Crime, Documentory, ScienceFiction, Comedy, Adventure} from './urls'

function App() {
  return (
  <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPoster url={Action} title= 'Action' />
    <RowPoster url={Horror} title= 'Horror' isSmall/>
    <RowPoster url={Originals} title='Netflix Orginals' isSmall/>
    <RowPoster url={Adventure} title='Adventure' isSmall/>
    <RowPoster url={Animation} title='Animation' isSmall/>
    <RowPoster url={Crime} title='Crime' isSmall/>
    <RowPoster url={Documentory} title='Documentary' isSmall/>
    <RowPoster url={Drama} title='Drama' isSmall/>
    <RowPoster url={ScienceFiction} title='Science Fiction' isSmall/>
    <RowPoster url={Comedy} title='Comedy' isSmall/>

  </div>
  );
}

export default App;
