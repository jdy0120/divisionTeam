type Tier = 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' |
  'PLATINUM' | 'DIAMOND' | 'MASTER' | 'GRANDMASTER' | 'CHALLENGER';

type Position = 'Top' | 'Junggle' | 'Mid' | 'Bottom' | 'Support'

export type UserInfo = {
  userId: string,
  tier: Tier,
  rank: string,
  wins: number,
  losses: number,
  position?: Position,
  mmr: number,
}