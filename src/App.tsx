import React, { useContext, useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import LandingPage from '@pages/Landing';

// Constants
import { MISSION_CONTROLL_ROUTE } from '@constants/routes';
import WalletProvider, { WalletContext } from '@providers/WalletProvider';

// Components
import Backdrop from '@components/Backdrop';

// Local Components
import InnerRoutes from './InnerRoutes';

// Styles
// import css from './index.module.css';

function App() {
  const { address } = useContext(WalletContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (userAddress) {
  //     navigate(userAddress ? '/mission-control' : '', { replace: true });
  //   }
  // }, []);

  useEffect(() => {
    if (address) {
      navigate(MISSION_CONTROLL_ROUTE.path);
    }
  }, [address]);

  return (
    <WalletProvider>
      <Backdrop>
        <React.Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<InnerRoutes />} />
          </Routes>
        </React.Suspense>
      </Backdrop>
    </WalletProvider>
  );
}

export default App;
