import React from 'react';
import { UserInfo, MaterialMMR } from '../../types/type';
import { getUserInfo, getUserAccountId } from '../utils/getUserInfo';
import { calculate } from '../utils/calculate';
import styled from 'styled-components';

const divUserId = (combinedID:string): string[] => {
  if (combinedID === '') {
    return []
  }
  const regExp = /([a-z|A-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){1,}(님)/g
  const divisionId = combinedID.match(regExp)
  if (divisionId === null) {
    return [combinedID]
  } else {
    return divisionId;
  }
}

const underRankMMR:MaterialMMR = {
  tier: 'SILVER',
  rank: 'I',
  wins: 1,
  losses: 1,
  leaguePoints: 0,
} 

const underRankUserInfo: UserInfo = {
  userId: '',
  ... underRankMMR,
  position: 'None',
  mmr: calculate(underRankMMR)
}

const getUserRankInfo = (userInfoList: UserInfo[]): UserInfo|void => {
  userInfoList.map((el:any) => {
    if (el.queueType === "RANKED_SOLO_5x5") {
      const { tier,rank,wins,losses,leaguePoints } = el
      const materialMMR:MaterialMMR = {
        tier,rank,wins,losses,leaguePoints
      } 
      return {
        tier,
        rank,
        wins,
        losses,
        leaguePoints,
        mmr: calculate(materialMMR)
      }
    }
  })
}

interface Props {
  userInfoList:UserInfo[],
  setUserInfoList:React.Dispatch<React.SetStateAction<UserInfo[]>>,
}

const InsertUser = (props: Props) => {
  const {userInfoList, setUserInfoList} = props
  const [idState, setIdState] = React.useState<string>('');

  const addId = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(divUserId(idState));
    
    divUserId(idState)?.map(async(element) => {
      
      try{
        const {id,name} =  await getUserAccountId(element)

        const userInfo = await getUserInfo(id)
        
        const userRankInfo = {
          ...underRankUserInfo,
          ...getUserRankInfo(userInfo),
          userId: name
        }

        setUserInfoList([
          ...userInfoList,
          userRankInfo
        ])
        
      } catch(err) {
        switch (err.message) {
          case 'Not Exist UserID':
            alert(`${element}는 찾을 수 없는 아이디입니다.`)
            break
          case 'Not Exist UserInfo':
            alert(`${element}의 랭크정보가 없습니다.`)
            break
          default:
            alert(`${err.message} 알 수 없는 에러`)
        }
      }
    });
  };
  
  React.useEffect(() => {
  },[]);

  return(
    <>
      <input type="text" onChange={(e) => {setIdState(e.target.value)}} />
      <button onClick={addId}>{`검색`}</button>
    </>
  );
}
export default InsertUser;