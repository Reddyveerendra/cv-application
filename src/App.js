import './App.css';
import { data } from './components/data';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from "./components/Experience";
import { LiveResume } from './components/LiveResume';
import React from 'react';
function App() {
  const [info, setInfo] = React.useState(data)
  function handleChange(e) {
    const { name, value } = e.target
    console.log(name, value)
    setInfo(
      (prev) => {
        return {
          ...prev, [name]: value
        }
      }
    )
  }
  return (
    <div className="App">
      <Header
        {...info}
        function={handleChange}
      />
      <Education
        {...info}
        function={handleChange}
      />
      <Experience
        {...info}
        function={handleChange}
      />
      <Projects
        {...info}
        function={handleChange}
      />
      <Skills
        {...info}
        function={handleChange}
      />
      <hr style={{ height: "5px", background: "black" }} />
      <LiveResume
        {...info}
      />
    </div>
  );

}

export default App;
