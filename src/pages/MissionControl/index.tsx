import { useContext, useEffect, useMemo, useState } from 'react';

// Components
import Card from '@components/Card';

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

export default function MissionControlPage() {
  const { address } = useContext(WalletContext);
  const [globalMissionStats, setGlobalMissionStats] =
    useState<GlobalMissionStats>();
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const userMissionStats: UserMissionStats = useMemo(
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

      <Card title="Foo title" aria-label="This is a foo card">
        Foo
      </Card>

      <Card title="Foo title" aria-label="This is a foo card">
        Foo
      </Card>

      <Card title="Foo title" aria-label="This is a foo card">
        Foo
      </Card>
    </div>
  );
}
