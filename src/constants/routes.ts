import React from 'react';

import AirdropIcon from '@images/icons/AirdropIcon';
import MarsIcon from '@images/icons/MarsIcon';
import GaugeIcon from '@images/icons/GaugeIcon';

const MissionControlPage = React.lazy(() => import('@pages/MissionControl'));
const RektdropRewardsPage = React.lazy(() => import('@pages/RektdropRewards'));
const TestnetMissionsPage = React.lazy(() => import('@pages/TestnetMissions'));
// const DashboardPage = React.lazy(() => import('@pages/Dashboard'));

type Page = {
  name: string;
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
  Icon?: React.ReactNode;
};

export const MISSION_CONTROLL_ROUTE: Page = {
  name: 'Mission Control',
  path: 'mission-control',
  Component: MissionControlPage,
  Icon: GaugeIcon,
};

export const REWARDS_PAGE_ROUTE: Page = {
  name: 'Claim Your Rektdrop',
  path: 'rewards',
  Component: RektdropRewardsPage,
  Icon: AirdropIcon,
};

export const MISSIONS_ROUTE: Page = {
  name: 'Mars Missions',
  path: 'missions',
  Component: TestnetMissionsPage,
  Icon: MarsIcon,
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
