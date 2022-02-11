import { useContext, useEffect, useMemo, useState } from 'react';

// Components
import Card from '@components/Card';
import Text from '@components/Text';
import Breakdown from '@components/Breakdown';
import StatCard from '@components/StatCard';
import Info from '@components/Info';

// Constants
import { WalletContext } from '@providers/WalletProvider';
import { GlobalMissionStats, UserMissionStats } from '@types';

// Icons
import AstronautIcon from '@images/icons/AstronautIcon';
import AirdropIcon from '@images/icons/ParachuteIcon';
import FlameIcon from '@images/icons/FlameIcon';
import EthIcon from '@images/icons/EthIcon';

import MissionData from '@assets/missiondata';

// Styles
import cn from 'classnames';
import css from './index.module.css';

// Local Components
import MySummaryCard from './MySummaryCard';

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
    <>
      <Text type="pageTitle">Mission Control</Text>

      <div className={css.missionControl}>
        <StatCard
          Icon={AstronautIcon}
          title="Total Recipients"
          value={2785}
          className={css.statCard1}
          aria-label="Number of Total Recipients"
        />
        <StatCard
          Icon={AirdropIcon}
          title="Total Tokens Airdropped"
          value={38952}
          className={css.statCard2}
          aria-label="Number of Total Tokens Airdropped"
        />

        <StatCard
          Icon={FlameIcon}
          title="Total Gas Burned in Drop"
          value={180735}
          className={css.statCard3}
          aria-label="Number of Total Gas Burned in Drop"
        />

        <StatCard
          Icon={EthIcon}
          title="Total Eth Lost in Rektdrop"
          value={24}
          className={css.statCard4}
          aria-label="Number of Total Eth Lost in Rektdrop"
        />

        <MySummaryCard className={css.mySummary} />

        <Card
          title="Airdrop Tokens"
          className={css.airdropTokens}
          aria-label="Airdrop Tokens"
        >
          <Breakdown
            title="Total Tokens Airdropped"
            items={[
              { title: 'Total Claimed', value: 31617 },
              { title: 'Clawed Back', value: 7335 },
            ]}
          />
        </Card>
        <Card
          title="Recipient Addresses"
          className={css.recipientAddresses}
          aria-label="Recipient Addresses"
        >
          <Breakdown
            title="Total Recipients"
            items={[
              { title: 'Cosmos', value: 1840 },
              { title: 'Osmosis', value: 523 },
              { title: 'Ethereum', value: 422 },
            ]}
          />
        </Card>

        <div className={cn(css.linksArea, css.externalLinks)}>
          <a href="" target="_blank" rel="noreferrer">
            <Card
              type="secondary"
              className={css.externalLink}
              aria-label="Instructions for Claiming your Rektdrop"
            >
              <Text type="valueSmall">
                Instructions for Claiming your Rektdrop
              </Text>
              <AirdropIcon className={css.externalLinkIcon} />
            </Card>
          </a>

          <a
            href="https://evmos.blog/the-evmos-token-model-edc07014978b"
            target="_blank"
            rel="noreferrer"
          >
            <Card
              type="secondary"
              className={css.externalLink}
              aria-label="The Evmos Token Model"
            >
              <Text type="valueSmall">The Evmos Token Model</Text>
              <AirdropIcon className={css.externalLinkIcon} />
            </Card>
          </a>
        </div>

        <Card
          title="TOP 3 DAPPS by ETH LOST"
          className={css.top3Area}
          aria-label="This is a foo card"
        >
          <div className={css.top3Wrapper}>
            <div className={css.dappWrapper}>
              <AstronautIcon />
              <Info title="CloudsDaisy Digital" value="12.03827 ETH" />
            </div>
            <div className={css.dappWrapper}>
              <AstronautIcon />
              <Info title="Silicon Valley Network" value="8.5638 ETH" />
            </div>
            <div className={css.dappWrapper}>
              <AstronautIcon />
              <Info title="Genie Dot" value="3.000298 ETH" />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
