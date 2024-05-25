import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, Overview, Roadmap, Tokenomic } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Overview />
        <Roadmap />
        <Tokenomic />
      </div>
    </BrowserRouter>
  )
}

export default App
