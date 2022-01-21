export interface Task {
  id: number;
  description: string;
  points: number;
  reward_category: number;
  isCompleted: boolean;
}

export interface MissionsObject {
  [key: string]: Task[];
}

export interface AllCompletesMissionsByWallet {
  wallet: string;
  missions: number[];
}

export interface CompletedTasksReturnObject {
  missions: number[];
}

export interface LeaderBoardEntry {
  walletAddress: string;
  points: number;
}

export interface LeaderboardReturnObject {
  leaderboard: LeaderBoardEntry[];
}

export interface GlobalMissionStats {
  rank: number;
  participants: number;
  completedMissions: number;
  highestPoints: number;
}

export interface UserMissionStats {
  completedPoints: number;
  totalPoints: number;
  numCompletedTasks: number;
}
