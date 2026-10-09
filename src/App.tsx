import { HashRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './hooks/useBooking';
import { DemoBanner } from './components/layout/DemoBanner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileQuickBar } from './components/layout/MobileQuickBar';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { TeamPage } from './pages/TeamPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <BookingProvider>
      <HashRouter>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <DemoBanner />
          <Navbar />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <MobileQuickBar />
          <Footer />
        </div>
      </HashRouter>
    </BookingProvider>
  );
}

export default App;
