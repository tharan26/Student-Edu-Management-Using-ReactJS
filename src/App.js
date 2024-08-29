import React from "react";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Cards from './Components/Cards';
import Menu from './Components/Menu';

function App(){
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Cards/>
      <Menu/>
    </div>
  );
}

export default App;