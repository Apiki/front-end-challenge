import Header from '../components/Header/index.jsx';
import Cards from '../components/Cards/index.jsx';
import Button from '../components/Button/index.jsx';
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {

  return (
    <div>
      <Header />
      <Cards />
      
      <Button title={'Carregar mais...'} />
    </div>
  )
}
