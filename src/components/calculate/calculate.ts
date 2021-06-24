import { MaterialMMR } from '../../../types/type';
import { rankMMR, tierMMR, winPercentMMR } from '../../assets/gameEnv';

const winRateMMr = (wins:number,losses:number):number => {
  const winrate = Math.round((wins/(wins+losses)*100) * 10) / 10
  console.log(winrate)
  return (winrate-50)*winPercentMMR
  //(winrate - 50) * winPercentMMr
}

const calculateMMR = (rank:string,tier:string,leaguePoints:number) => {
  /**
   * i 450 ~ 750
   * b 800 ~ 1100
   * s 1150 ~ 1450
   * g 1500 ~ 1800
   * p 1850 ~ 2150
   * m 2200 ~ 2500
   * gm 2550 ~ 3050
   * c 3100 ~ +point
   */
  const convertTier = tierMMR[tier]
  const convertRank = rankMMR[rank]
  return convertTier + convertRank + leaguePoints
}

export const calculate = (userInfo: MaterialMMR) => {
  const convertWinRateMMR = winRateMMr(userInfo.wins,userInfo.losses)
  
  const convertTierMMR = calculateMMR(userInfo.rank,userInfo.tier,userInfo.leaguePoints)
  console.log(convertWinRateMMR,convertTierMMR)
  return convertWinRateMMR + convertTierMMR
}