import React from 'react';
import { UserInfo } from '../../types/type';
import styled from 'styled-components';

const divUserId = (combinedID:string): string[] => {
  const regExp = /([a-z|A-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){1,}(님)/g
  const divisionId = combinedID.match(regExp)
  if (divisionId === null) {
    return []
  } else {
    return divisionId;
  }
}

const InsertUser = () => {
  const [userInfoList, setUserInfoList] = React.useState<UserInfo[]>([
    {
      userId: 'doyeon',
      tier: 'Bronze',
      position: 'Mid',
      mmr: 0,
    },
    {
      userId: 'miya',
      tier: 'Bronze',
      position: 'Mid',
      mmr: 0,
    },
  ]);
  const [idState, setIdState] = React.useState<string>('');
  const [idList, setIdList] = React.useState<string[]>([]);


  const addId = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    const divisionId = divUserId(idState)
      .filter((element) => {
        if (idList.indexOf(element) === -1) {
          return true
        }
      });

    // setIdList가 없어지고 requestApi로 받아와 setUserInfoList로 상태변경
    setIdList([...idList, ...divisionId])
  }

  React.useEffect(() => {
    console.log(idList);
  },[idList])
  return(
    <>
      <input type="text" onChange={(e) => {setIdState(e.target.value)}} />
      <button onClick={addId}></button>
      {idList?.map((element,index) => {
        return (
          <p key={index}>{element}</p>
        );
      })}
      <button>{'팀'}</button>
    </>
  );
}
export default InsertUser