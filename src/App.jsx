
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field  } from 'formik';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const searchPictures = query => {
    console.log(query);
  }
  return (
    <div>
      <SearchBar onSearch={searchPictures}/>
    </div>
  )
};

export default App
