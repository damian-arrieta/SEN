import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <> 
      <Navbar />
      <Hero />
    </>
  )
}