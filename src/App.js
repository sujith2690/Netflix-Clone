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
    <RowPoster url={Adventure} title='Drama' isSmall/>
    <RowPoster url={Animation} title='Drama' isSmall/>
    <RowPoster url={Crime} title='Drama' isSmall/>
    <RowPoster url={Documentory} title='Drama' isSmall/>
    <RowPoster url={Drama} title='Drama' isSmall/>
    <RowPoster url={ScienceFiction} title='Drama' isSmall/>
    <RowPoster url={Comedy} title='Drama' isSmall/>

  </div>
  );
}

export default App;
