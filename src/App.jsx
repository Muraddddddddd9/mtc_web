import { BrowserRouter } from "react-router-dom";

import { Hero, Navbar, Overview, Roadmap, Tokenomic, Nft, Fairlaunch } from './components';

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
        <Nft />
        <Fairlaunch />
      </div>
    </BrowserRouter>
  )
}

export default App
