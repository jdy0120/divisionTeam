import React from 'react';
import { UserInfo, MaterialMMR } from '../../types/type';
import { getUserInfo, getUserAccountId } from '../utils/getUserInfo';
import { calculate } from '../utils/calculate';
import styled from 'styled-components';

const InsertContainer = styled.div`
  margin-bottom: 30px;
`;

const Search = styled.input`
  padding: 5px 80px 5px 20px;
  border-radius: 25px;
  outline: none;
  border: none;
  width: 450px;
  height: 35px;

  @media ${(props) => props.theme.mobile} {
    width: auto;
  }
`;

const SearchButton = styled.button`
  margin-left: -70px;
  outline: none;
  border: none;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: #BDBDC0;
  color: #3E3F47;

  &:hover {
    background-color: #3E3F47;
    color:  #BDBDC0;
  }
`;

const divUserId = (combinedID:string): string[] => {
  const convertUserId = combinedID.replace(/님이 로비에 참가하셨습니다./gi,',');
  // const regExp = /([a-z|A-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){1,}(님이 로비에 참가하셨습니다.)/g
  // const divisionId = combinedID.match(regExp)

  const divisionId = convertUserId.split(',');

  const userIdGroup = divisionId?.map((element) => {
    return element.trim()
  })

  console.log(userIdGroup);
  if (divisionId === null) {
    return [combinedID]
  } else {
    if (userIdGroup !== undefined) return userIdGroup;
    return ['']
  }
}

// default값 (underRank)는 실버 1 0포인트 승률: 50% 입니다.
const underRankMMR:MaterialMMR = {
  tier: 'SILVER',
  rank: 'I',
  wins: 1,
  losses: 1,
  leaguePoints: 0,
} 

const underRankUserInfo: UserInfo = {
  userId: '',
  ...underRankMMR,
  position: 'None',
  team: 0,
  mmr: calculate(underRankMMR)
}

const getUserRankInfo = (userInfoList: UserInfo[]): UserInfo|undefined => {
  
  const userRankInfo = userInfoList.map((el:any):UserInfo|undefined => {
    
    if (el.queueType === "RANKED_SOLO_5x5") {
      const { tier,rank,wins,losses,leaguePoints } = el
      const materialMMR:MaterialMMR = {
        tier,rank,wins,losses,leaguePoints
      } 
      
      return {
        userId: '',
        tier,
        rank,
        wins,
        losses,
        leaguePoints,
        team: 0,
        mmr: calculate(materialMMR)
      }
    }
    return undefined

  }).filter((el) => {
    if (el) {
      return true
    }
    return false
  })
  return userRankInfo[0]
}

const getUserInfoList = async (idState:string,userInfoList:UserInfo[]):Promise<any> => {

  const fetchUserInfoList = await Promise.all(divUserId(idState).map(async(element) => {
    if (element === '') {
      return
    }
    try{
      const {id,name} =  await getUserAccountId(element)

      const userInfo = await getUserInfo(id)

      const userRankInfo = {
        ...underRankUserInfo,
        ...getUserRankInfo(userInfo),
        userId: name
      }
      

      // 중복검사
      const confirmUserID = userInfoList.filter((element) => {
        if (element.userId === name) return true
        return false
      })

      if (confirmUserID.length === 0) {
        
        return ({
          ...userRankInfo
        })
      }
      
    } catch(err) {
      switch (err.message) {
        case 'Not Exist UserID':
          alert(`${element}는 찾을 수 없는 아이디입니다.`)
          break
        case 'Not Exist UserInfo':
          alert(`${element}의 랭크정보를 불러올 수 없습니다.`)
          break
        default:
          alert(`${err.message} 알 수 없는 에러`)
      }
    }
  }))

  const filtUndefinedData = fetchUserInfoList.filter((el) => {
    if (el) return true

    return false
  })
  return filtUndefinedData
}

interface Props {
  userInfoList:UserInfo[],
  setUserInfoList:React.Dispatch<React.SetStateAction<UserInfo[]>>,
}

const InsertUser = (props: Props) => {
  const {userInfoList, setUserInfoList} = props
  const [idState, setIdState] = React.useState<string>('');

  const addId = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    const response = await  getUserInfoList(idState,userInfoList)
    
    setUserInfoList([
      ...response,
      ...userInfoList,
    ])
  };

  return(
    <InsertContainer>
      <Search placeholder='Name1, Name2, ...' type="text" onChange={(e) => {setIdState(e.target.value)}} />
      <SearchButton onClick={addId}>{`검색`}</SearchButton>
    </InsertContainer>
  );
}
export default InsertUser;