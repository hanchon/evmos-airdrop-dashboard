import React from 'react';

const MissionControlPage = React.lazy(() => import('@pages/MissionControl'));
const RektdropRewardsPage = React.lazy(() => import('@pages/RektdropRewards'));
const TestnetMissionsPage = React.lazy(() => import('@pages/TestnetMissions'));
// const DashboardPage = React.lazy(() => import('@pages/Dashboard'));

type Page = {
  name: string;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
};

export const MISSION_CONTROLL_ROUTE: Page = {
  name: 'Mission Control',
  path: 'mission-control',
  Component: MissionControlPage,
};

export const REWARDS_PAGE_ROUTE: Page = {
  name: 'Rektdrop Rewards',
  path: 'rewards',
  Component: RektdropRewardsPage,
};

export const MISSIONS_ROUTE: Page = {
  name: 'Testnet Missions',
  path: 'missions',
  Component: TestnetMissionsPage,
};

export const NAVIGATION_LINKS: Page[] = [
  MISSION_CONTROLL_ROUTE,
  REWARDS_PAGE_ROUTE,
  MISSIONS_ROUTE,
];

export const ALL_ROUTES: Page[] = [
  MISSION_CONTROLL_ROUTE,
  REWARDS_PAGE_ROUTE,
  MISSIONS_ROUTE,
];
