
import './App.css';
import axios from 'axios'
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field  } from 'formik';
import SearchBar from './components/SearchBar/SearchBar';
import fetchPhotos from './fetchPhotos';

const App = () => {
   const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function searchPictures() {
      if (query === '') {
        return;
      }
    
      try {
        const apiRequest = await fetchPhotos(query, page);
        setPhotos(prevState => [...prevState, ...apiRequest]);
      }
      catch (error) { };
        
    }
     searchPictures();
  }, [query, page]);

function onFormSubmit(searchedWord) {
    if (query.toLowerCase() !== searchedWord.toLowerCase()) {
      setPhotos([]);
      setQuery(searchedWord);
    }
    setPage(1);
  }
  
  return (
    <div>
      <SearchBar onFormSubmit={onFormSubmit}/>
    </div>
  )
};

export default App
