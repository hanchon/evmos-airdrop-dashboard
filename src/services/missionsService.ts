import axios from 'axios';
import {
  CompletedTasksReturnObject,
  GlobalMissionStats,
  LeaderBoardEntry,
  LeaderboardReturnObject,
  Task,
  UserMissionStats,
} from 'src/types';
import {apiDomain} from '../const';

export async function getCompletedTasks(address: string): Promise<number[]> {
  const res = await axios.get(`${apiDomain}/user_missions/${address}`);
  const {data}: {data: CompletedTasksReturnObject} = res;
  return data.missions;
}

export async function getLeaderboardData(): Promise<LeaderBoardEntry[]> {
  // const res = await axios.get(`${apiDomain}/leaderboard`);
  // const {data}: {data: LeaderboardReturnObject} = res;
  // return data.leaderboard;
  return [
    {
      walletAddress: '0x25dd91069f120d955803def92f2d1b32c2b471de',
      points: 560,
    },
    {
      walletAddress: '0x25dd91061f220d955804def92f2d1b32c2b491dc',
      points: 535,
    },
    {
      walletAddress: '0x25dd91069f120d955803def92f2d1b32c2b471de',
      points: 510,
    },
    {
      walletAddress: '0x25dd91061f220d955804def92f2d1b32c2b491dc',
      points: 495,
    },
  ];
}

export async function getGlobalMissionStats(
  walletAddress: string,
): Promise<GlobalMissionStats> {
  // const res = await axios.get(`${apiDomain}/mission_stats/${walletAddress}`);
  // const {data}: {data: any} = res;
  // return data;
  return {
    rank: 0,
    participants: 4768,
    completedMissions: 36789,
    highestPoints: 455,
  };
}

export function getAnalytics(
  completedTasks: number[],
  allTasks: Task[],
): UserMissionStats {
  let [completedPoints, totalPoints, numCompletedTasks] = [0, 0, 0];
  allTasks.forEach(task => {
    const {points, id} = task;
    if (completedTasks.includes(id)) {
      completedPoints += points;
      numCompletedTasks += 1;
    } else {
      totalPoints += points;
    }
  });

  return {
    completedPoints,
    totalPoints,
    numCompletedTasks,
  };
}
