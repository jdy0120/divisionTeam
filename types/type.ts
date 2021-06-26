type Tier = 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' |
  'PLATINUM' | 'DIAMOND' | 'MASTER' | 'GRANDMASTER' | 'CHALLENGER';

export type Position = 'None'|'Top' | 'Junggle' | 'Mid' | 'ADC' | 'Support'

export type UserInfo = {
  userId?: string,
  tier: Tier,
  rank: string,
  wins: number,
  losses: number,
  team: number, // 0: 아무팀, 1: 1번팀, 2: 2번팀
  leaguePoints: number,
  position?: Position,
  mmr: number,
}

export type MaterialMMR = {
  tier: Tier,
  rank: string,
  wins: number,
  losses: number,
  leaguePoints: number,
}