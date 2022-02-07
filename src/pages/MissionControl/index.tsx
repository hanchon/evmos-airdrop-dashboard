import './index.css';
import '../../index.css';

import { useContext, useEffect, useMemo, useState } from 'react';

import GridLayout from 'react-grid-layout';

// Constants
import { WalletContext } from '@constants/contexts';
import { GlobalMissionStats, UserMissionStats } from '@types';

import MissionData from '@assets/missiondata';

// Services
import {
  getCompletedTasks,
  getAnalytics,
  getGlobalMissionStats,
} from '../../services/missionsService';

const ResponsiveGridLayout = GridLayout.WidthProvider(GridLayout.Responsive);

/// Helper
const getLayoutForKeys = (keys: string[]) => {
  const createLayout = (numItemsPerRow: number) => {
    return keys.map((key, index) => ({
      i: key,
      x: (index % numItemsPerRow) * 4,
      y: Math.floor(index / numItemsPerRow) * 2,
      w: 4,
      h: 2,
      static: true,
    }));
  };

  const defaultLayout = createLayout(3);
  const smLayout = createLayout(2);
  const xsLayout = createLayout(1);

  return {
    lg: defaultLayout,
    md: defaultLayout,
    sm: smLayout,
    xs: xsLayout,
  };
};

export type MissionControlProps = {
  userMissionStats?: UserMissionStats;
  globalMissionStats?: GlobalMissionStats;
};

function MissionControlGrid(props: MissionControlProps) {
  const {
    userMissionStats = {} as UserMissionStats,
    globalMissionStats = {} as GlobalMissionStats,
  } = props;

  const keys = ['1', '2', '3'];
  const layout = getLayoutForKeys(keys);

  const fieldCardRow = (
    field: string,
    value1: string,
    value2?: string,
    hideDivider?: boolean,
  ) => (
    <div className="m--card--row-container">
      <div className="m--card--row-content">
        <div className="m--card--field">{field}</div>
        <div>
          <div className="m--card--value">
            {value1}
            {value2 && (
              <>
                <span className="m--card--fraction">/</span>
                {value2}
              </>
            )}
          </div>
        </div>
      </div>
      {!hideDivider && <div className="m--card--divider" />}
    </div>
  );

  const textCardRow = (text: string, hideDivider?: boolean) => (
    <div className="m--card--row-container">
      <div className="m--card--text">{text}</div>
      {!hideDivider && <div className="m--card--divider" />}
    </div>
  );

  return (
    <ResponsiveGridLayout
      className="layout m--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
      rowHeight={240}
      margin={[48, 48]}
      cols={{ lg: 12, md: 12, sm: 8, xs: 4 }}
    >
      <div className="m--card" key="1">
        <div className="m--card--title">My Summary</div>
        {fieldCardRow(
          'TOTAL POINTS',
          String(userMissionStats.totalPoints || 0),
        )}
        {fieldCardRow('RANK', String(globalMissionStats.rank || 0))}
        {fieldCardRow(
          'COMPLETED MISSIONS',
          String(userMissionStats.numCompletedTasks || 0),
          '20',
        )}
        {fieldCardRow(
          'UNEARNED POINTS',
          String(
            userMissionStats.totalPoints - userMissionStats.completedPoints ||
              0,
          ),
          undefined,
          true,
        )}
      </div>
      <div className="m--card" key="2">
        <div className="m--card--title">Everyone Else</div>
        {fieldCardRow(
          'PARTICIPANTS',
          String(globalMissionStats.participants || 0),
        )}
        {fieldCardRow(
          'COMPLETED MISSIONS',
          String(globalMissionStats.completedMissions || 0),
        )}
        {fieldCardRow(
          'HIGHEST POINTS',
          String(globalMissionStats.highestPoints || 0),
          undefined,
          true,
        )}
      </div>
      <div className="m--card" key="3">
        <div className="m--card--title">Latest Transmissions</div>
        {textCardRow(
          'Mauris in odio fermentum, auctor dui pretium, commodo neque. Nulla facilisi.',
        )}
        {textCardRow(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit in odio fermentum.',
        )}
        {textCardRow(
          'Mauris in odio fermentum, auctor dui pretium, commodo neque. Nulla facilisi.',
        )}
        {textCardRow(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit in odio fermentum.',
          true,
        )}
      </div>
    </ResponsiveGridLayout>
  );
}

export default function MissionControlPage() {
  const { address } = useContext(WalletContext);
  const [globalMissionStats, setGlobalMissionStats] =
    useState<GlobalMissionStats>();
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const userMissionStats = useMemo(
    () =>
      getAnalytics(
        completedTasks,
        Object.values(MissionData).flatMap(array => array),
      ),
    [completedTasks],
  );

  useEffect(() => {
    async function apiCalls() {
      const globalMissionStatsResposne = getGlobalMissionStats(address);
      const completedTasksResponse = getCompletedTasks(address);
      setGlobalMissionStats(await globalMissionStatsResposne);
      setCompletedTasks(await completedTasksResponse);
    }
    apiCalls();
  }, []);

  // useEffect(() => {
  //   console.log('completedTasks:', completedTasks);
  //   console.log('globalMissionStats:', globalMissionStats);
  //   console.log('userMissionStats:', userMissionStats);
  // }, [globalMissionStats, completedTasks, userMissionStats]);

  return (
    <div className="page-base page-content">
      <div className="page--header">Mission Control</div>
      <MissionControlGrid
        userMissionStats={userMissionStats}
        globalMissionStats={globalMissionStats}
      />
    </div>
  );
}
