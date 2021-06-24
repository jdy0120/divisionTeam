import React from 'react';
import { UserInfo, MaterialMMR } from '../../types/type';
import { getUserInfo, getUserAccountId } from '../utils/getUserInfo';
import { calculate } from '../utils/calculate';
import DivTeam from './DivTeam';
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

const InsertUser = () => {
  const [userInfoList, setUserInfoList] = React.useState<UserInfo[]>([]);
  const [idState, setIdState] = React.useState<string>('')
  const [runDivTeam, setRunDivTeam] = React.useState<boolean>(false);

  const addId = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(divUserId(idState));
    divUserId(idState)?.map(async(element) => {
      const {id,name} =  await getUserAccountId(element)
      
      const userInfo = await getUserInfo(id)
      console.log(userInfo)
      
      userInfo.map((el:any) => {
        if (el.queueType === "RANKED_SOLO_5x5") {
          const { tier,rank,wins,losses,leaguePoints } = el
          const materialMMR:MaterialMMR = {
            tier,rank,wins,losses,leaguePoints
          } 
          setUserInfoList([
            ...userInfoList,
            {
              userId: name,
              tier,
              rank,
              wins,
              losses,
              leaguePoints,
              mmr: calculate(materialMMR)
            }
          ])
        }
      })
    });
  }

  const clickDivTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(true)
    // 팀나누는 계산
  }

  const clickSearchTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(false)
  }

  
  React.useEffect(() => {
    console.log(userInfoList)
  },[])

  return(
    <>
      {runDivTeam === false ? 
        <div>
          <input type="text" onChange={(e) => {setIdState(e.target.value)}} />
          <button onClick={addId}>{`검색`}</button>
          {userInfoList?.map((element,index) => {
            return (
              <p key={index}>{element.userId}</p>
            );
          })}
          <button onClick={clickDivTeam}>{'팀'}</button>
        </div>
       :
       <div>
         <DivTeam userInfoList={userInfoList} />
         <button onClick={clickSearchTeam}>{'인원 수정'}</button>
       </div>
      }
    </>
  );
}
export default InsertUser
