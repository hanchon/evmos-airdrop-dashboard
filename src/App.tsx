import React, { useEffect } from 'react';

import type { Claim } from '@hanchon/evmosjs';

// Pages
import LandingPage from './pages/Landing';
import DashboardPage from './pages/Dashboard';
import MissionControlPage from './pages/MissionControl';
import RektdropRewardsPage from './pages/RektdropRewards';
import TestnetMissionsPage from './pages/TestnetMissions';

// Components
import NavigationBar from './components/NavigationBar';

import {
  getCompletedTasks,
  getAnalytics,
  getGlobalMissionStats,
} from './services/missionsService';
import MissionData from './assets/missiondata';
import type { GlobalMissionStats } from './types';
import getRektDropInformation from './services/evmos';

function App() {
  const [page, setPage] = React.useState(0);
  const [userAddress, setUserAddress] = React.useState('');
  const [completedTasks, setCompletedTasks] = React.useState([] as number[]);
  const [rektDropClaims, setRektDropClaims] = React.useState([] as Claim[]);
  const [rektDropError, setRektDropError] = React.useState('');
  const [globalMissionStats, setGlobalMissionStats] = React.useState(
    {} as GlobalMissionStats,
  );

  const userMissionStats = getAnalytics(
    completedTasks,
    Object.values(MissionData).flatMap(array => array),
  );

  const updateKeplrState = (address: string | null): void => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
    setPage(3);
  };

  async function getContent() {
    const completedTasksResponse = getCompletedTasks(userAddress);
    const rektDropInformationResponse = getRektDropInformation(userAddress);
    const globalMissionStatsResposne = getGlobalMissionStats(userAddress);

    setCompletedTasks(await completedTasksResponse);
    setRektDropClaims((await rektDropInformationResponse).claims);
    setRektDropError((await rektDropInformationResponse).error);
    setGlobalMissionStats(await globalMissionStatsResposne);
  }

  useEffect(() => {
    if (userAddress) {
      getContent();
    }
  }, [userAddress]);

  const pageContent = () => {
    if (page === 0) {
      return <LandingPage updateKeplrState={updateKeplrState} />;
    }

    if (page === 1) {
      return (
        <MissionControlPage
          userMissionStats={userMissionStats}
          globalMissionStats={globalMissionStats}
        />
      );
    }

    if (page === 2) {
      return (
        <RektdropRewardsPage
          rektDropClaims={rektDropClaims}
          rektDropError={rektDropError}
        />
      );
    }

    if (page === 3) {
      return <TestnetMissionsPage />;
    }

    if (page === 4) {
      return (
        <DashboardPage
          userAddress={userAddress}
          userMissions={completedTasks}
        />
      );
    }

    return null;
  };

  return (
    <div className="page-base">
      {page !== 0 && (
        <NavigationBar
          pointCount={userMissionStats.completedPoints}
          selectedPage={page}
          address={userAddress}
          didSelectPage={(newPage: number) => {
            setPage(newPage);
          }}
        />
      )}
      {pageContent()}
    </div>
  );
}

export default App;
