import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import "../src/components/CSS/Animation.css"

const Body = styled.div`
background-color: #4facf7;
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
  //   <Router>
  //   <div className="app">
  //         <Switch>
  //  <Route path="/checkout">
  //  <Header />
  //  <Checkout />
  //  </Route>
   
  //  <Route path="/login" >
  //   <Login />
  //  </Route>
   
  //  {/* default route */}
  //  <Route path="/">
  //    <Header />
  //    <Headermini/>
  //    <Home />
  //    <Footer/>
  //  </Route>
   
  //        </Switch>
  //      </div>
  //      </Router>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
      <Switch>
    

        {/* projects page */}
      <Route path="/Projects">
      <Navbar />
      <Body>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
                    <Footer />
      </Body>
          </Route>

          {/* Contact */}
          <Route path="/Contact">
      <Navbar />
      {/* <Body> */}
      <div className="body2">
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>

      <Contact />
      <Footer />
      </div>
        {/* </Body> */}
          </Route>
          
          {/* Home page */}
      <Route path="/">
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Wrapper>
            <Education />
          </Wrapper>
          <Footer />
         </Body>
        </Route>
 
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
