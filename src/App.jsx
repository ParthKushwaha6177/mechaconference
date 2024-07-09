// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Impdates } from './Components/Impdates';
import { Home } from './Components/Home';
import { Speakers } from './Components/Speakers';
import { AboutUs } from './Components/AboutUs';
import { Callforpapers } from './Components/Callforpapers';
import { Committees } from './Components/Committees';
import { ContactUs } from './Components/ContactUs';
import { Registration } from './Components/Registration';
import { Sponsorship } from './Components/Sponsorship';
import { Venue } from './Components/Venue';
import { Footer } from './Components/Footer';
import { Headertailwind } from './Components/Headertailwind';
import { Impdates_main } from './Components/Impdates_main';
import Loading from './Components/Loading';
import NotFound from './Components/NotFound';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { Helmet } from 'react-helmet-async';
import PublicationPartner from './Components/PublicationPartner';

injectSpeedInsights();
inject();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Helmet>
        <title>ICDMT 2024</title>
        <meta name="description" content="Website designed for International Conference on design and manufacturing organized at Punjab Engineering College (PEC) Chandigarh" />
      </Helmet>
      <BrowserRouter>
        <Headertailwind />
        <div className="flex-1">
          {isLoading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path='/Impdates' element={<Impdates_main />} />
              <Route path='/' element={<Home />} />
              <Route path='/speakers' element={<Speakers />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/callforpapers' element={<Callforpapers />} />
              <Route path='/committees' element={<Committees />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/sponsorship' element={<Sponsorship />} />
              <Route path='/venue' element={<Venue />} />
              <Route path='/publication-partners' element={<PublicationPartner />}/>
              <Route path='*' element={<NotFound />} />
            </Routes>
          )}
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
