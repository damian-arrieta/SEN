import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <> 
      <Navbar />
      <div className='bg-olive w-full h-screen'>Navbar</div>
    </>
  )
}