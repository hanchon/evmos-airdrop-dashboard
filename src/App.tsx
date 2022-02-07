import React, { useEffect, useMemo } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

// Pages
import LandingPage from '@pages/Landing';

// Constants
import { MISSION_CONTROLL_ROUTE } from '@constants/routes';
import { WalletContext } from '@constants/contexts';

// Components
import InnerRoutes from './InnerRoutes';

function App() {
  const navigate = useNavigate();
  const [userAddress, setUserAddress] = React.useState('');

  const updateKeplrState = (address: string | null): void => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
  };

  // useEffect(() => {
  //   if (userAddress) {
  //     navigate(userAddress ? '/mission-control' : '', { replace: true });
  //   }
  // }, []);

  useEffect(() => {
    if (userAddress) {
      navigate(MISSION_CONTROLL_ROUTE.path);
    }
  }, [userAddress]);

  const providerValue = useMemo(() => {
    return { address: userAddress };
  }, [userAddress]);

  return (
    <div className="page-base">
      <WalletContext.Provider value={providerValue}>
        <Routes>
          <Route
            path="/"
            element={<LandingPage updateKeplrState={updateKeplrState} />}
          />
          <Route path="*" element={<InnerRoutes />} />
        </Routes>
      </WalletContext.Provider>
    </div>
  );
}

export default App;
