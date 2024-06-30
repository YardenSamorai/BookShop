import React from 'react'
import styled from "styled-components";
import { useState } from "react";
import UpperMenu from './components/UpperMenu';
import HomePage from './components/HomePage';
import BootomSection from './BootomSection';



const App = () => {

  return (
    <div>
      {/* Top Menu section */}
      <UpperMenu />
      <HomePage />
      <BootomSection />
    </div>
  )
}



export default App

const UpperPanel = styled.div`

`