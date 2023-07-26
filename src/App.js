import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

export default function App() {
  return (
    <> 
      <Navbar />
      <Hero />
      <Services />
    </>
  )
}