import React from 'react';
import InsertUser from './components/InsertUser';
import DivTeam from './components/DivTeam'
import { UserInfo } from '../types/type'
import styled from 'styled-components';
import DragNDrop from './components/DragNDrop';
import { colors } from './assets/color';
import Adsense from './components/Adsense';
import Menual from './components/menual/Menual';

const SelectOptionUser = styled.div`
  min-width: 900px;
  text-align: center;
  margin-top: 3rem;
`;

const DivTeamButton = styled.button`
  margin-top: 10px;
  width: 120px;
  height: 50px;
  border: 0px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${colors.innerBox};
  color: ${colors.fontColor};

  &:hover {
    background-color: ${colors.background};
    color:  #BDBDC0;
    cursor: pointer;
  }
`;

function App() {
  const [userInfoList, setUserInfoList] = React.useState<UserInfo[]>([]);
  const [runDivTeam, setRunDivTeam] = React.useState<boolean>(false);

  const userLang = navigator.language;

  console.log(userLang);

  const clickDivTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (userInfoList.length%2 !== 0) {
      alert('인원을 짝수로 맞춰주세요')
    } else {
      setRunDivTeam(true)
    }
  }

  const clickSearchTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(false)
  }
  
  React.useEffect(() => {
    console.log(userInfoList)
  },[userInfoList])

  return (
    <SelectOptionUser>
      {runDivTeam === false ?
        <>
          <div>
            <Menual/>
            <InsertUser userInfoList={userInfoList} setUserInfoList={setUserInfoList}/>
          </div>
          <DragNDrop userInfoList={userInfoList} setUserInfoList={setUserInfoList}/>
          <DivTeamButton onClick={clickDivTeam}>{'팀 나누기'}</DivTeamButton>
        </>
      :
      <div>
        <DivTeam userInfoList={userInfoList} />
        <DivTeamButton onClick={clickSearchTeam}>{'인원 수정'}</DivTeamButton>
      </div>
      }
      <Adsense />
    </SelectOptionUser>
  );
}

export default App;
