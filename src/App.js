import './App.css';
import Brand from './components/brand/Brand';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';
import Features from './containers/features/Features';
import Possiblity from './containers/possiblity/Possiblity';
import Cta from './components/cta/Cta';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';



function App() {
  return (
<div className='App'>
  <div className="gradient__bg">
   <Navbar/>
   <Header/>
  </div>
  <Brand/>
  <WhatGPT3/>
  <Features/>
  <Possiblity/>
  <Cta/>
  <Blog/>
  <Footer/> 
</div>
  );
}

export default App;
