import React from 'react';
import InsertUser from './components/InsertUser';
import DivTeam from './components/DivTeam'
import {UserInfo} from '../types/type'

function App() {
  const [userInfoList, setUserInfoList] = React.useState<UserInfo[]>([]);
  const [runDivTeam, setRunDivTeam] = React.useState<boolean>(false);

  const clickDivTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(true)
    // 팀나누는 계산
  }

  const clickSearchTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(false)
  }

  return (
    <>
      <InsertUser /> 
      <div>
         <DivTeam userInfoList={userInfoList} />
         <button onClick={clickSearchTeam}>{'인원 수정'}</button>
       </div>
    </>
  );
}

export default App;
