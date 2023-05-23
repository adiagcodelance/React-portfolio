
import './App.css';
import React from 'react';
import { Nav } from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skills';
import Contact from './components/Contact';


function App() {
 

  let Component
  switch (window.location.pathname) {
    case "/":
      Component = About
      break;

      case "/about":
        Component = About
        break;
        case "/projects":
          Component = Project
          break;
          case "/skills":
            Component = Skill
            break;
            case "/Contact":
              Component = Contact
              break;
    default:
      break;
  }
  return (
   
    <div className="App">
      <div className='background'>
    <canvas></canvas>
    </div>
      <div className='nav'>
        <Nav />  
        <Component />
   
    </div>
    </div>
 
    
  );
  
}


export default App;
