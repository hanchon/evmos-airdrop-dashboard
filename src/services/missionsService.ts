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

export async function getLeaderboardData(
  page: number,
  perPage: number,
): Promise<LeaderBoardEntry[]> {
  const res = await axios.get(`${apiDomain}/leaderboard`, {
    params: {page, per_page: perPage},
  });
  const {data}: {data: LeaderboardReturnObject} = res;
  return data.leaderboard;
}

export async function getGlobalMissionStats(
  walletAddress: string,
): Promise<GlobalMissionStats> {
  const res = await axios.get(`${apiDomain}/mission_stats/${walletAddress}`);
  const {data}: {data: {stats: GlobalMissionStats}} = res;
  return data.stats;
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
