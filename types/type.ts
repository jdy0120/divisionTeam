type Tier = 'underRank' | 'Iron' | 'Bronze' | 'Silver' | 'Gold' |
  'Platinum' | 'Diamond' | 'Master' | 'GrandMaster' | 'Challenger';

type Position = 'Top' | 'Junggle' | 'Mid' | 'Bottom' | 'Support'

export type UserInfo = {
  userId: string,
  tier: Tier,
  position: Position,
  mmr: number,
}