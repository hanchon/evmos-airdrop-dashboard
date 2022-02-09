import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import NavigationBar from '@components/NavigationBar';

import MissionData from '@assets/missiondata';

// Constants
import { WalletContext } from '@constants/contexts';
import { ALL_ROUTES } from '@constants/routes';

// Styles
import css from './index.module.css';

import { getCompletedTasks, getAnalytics } from './services/missionsService';

export default function InnerRoutes() {
  const { address } = useContext(WalletContext);
  const [completedTasks, setCompletedTasks] = useState([] as number[]);

  const userMissionStats = getAnalytics(
    completedTasks,
    Object.values(MissionData).flatMap(array => array),
  );

  useEffect(() => {
    if (!address) {
      return;
    }

    async function apiCall() {
      const completedTasksResponse = getCompletedTasks(address);
      setCompletedTasks(await completedTasksResponse);
    }

    apiCall();
  }, [address]);

  return (
    <>
      <NavigationBar pointCount={userMissionStats.completedPoints} />
      <div className={css.content}>
        <React.Suspense fallback={<></>}>
          <Routes>
            {ALL_ROUTES.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route
              path="*"
              element={
                <main style={{ padding: '1rem' }}>
                  <p>404 Page</p>
                </main>
              }
            />
          </Routes>
        </React.Suspense>
      </div>
    </>
  );
}
