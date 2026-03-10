import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import DocsPage from './pages/DocsPage';
import HomePage from './pages/HomePage';
import IssuePage from './pages/IssuePage';
import PurchasePage from './pages/PurchasePage';
import ConditionsPage from './pages/ConditionsPage';
import MedicationsPage from './pages/MedicationsPage';
import UsageDocsPage from './pages/UsageDocsPage';

function AppFrame() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('route-enter');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('route-exit');
    }
  }, [location, displayLocation]);

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (transitionStage === 'route-exit') {
      setDisplayLocation(location);
      setTransitionStage('route-enter');
    }
  };

  return (
    <div className="app-shell motion-static">
      <main className="stage">
        <div
          className={`route-transition ${transitionStage}`}
          onAnimationEnd={handleTransitionEnd}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<HomePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="/issue" element={<IssuePage />} />
            <Route path="/conditions" element={<ConditionsPage />} />
            <Route path="/medications" element={<MedicationsPage />} />
            <Route path="/usage-docs" element={<UsageDocsPage />} />
            <Route path="*" element={<Navigate to="/conditions" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppFrame />
    </BrowserRouter>
  );
}

export default App;
