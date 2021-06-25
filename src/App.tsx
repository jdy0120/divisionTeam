import React from 'react';
import InsertUser from './components/InsertUser';
import DivTeam from './components/DivTeam'
import { UserInfo } from '../types/type'

function App() {
  const [userInfoList, setUserInfoList] = React.useState<UserInfo[]>([]);
  const [runDivTeam, setRunDivTeam] = React.useState<boolean>(false);

  const clickDivTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(true)
  }

  const clickSearchTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRunDivTeam(false)
  }

  return (
    <>
      {runDivTeam === false ?
        <div>
          <InsertUser userInfoList={userInfoList} setUserInfoList={setUserInfoList}/>
          
            {userInfoList?.map((element,index) => {
              return (
                <p key={index}>{element.userId}</p>
              );
            })}
          <button onClick={clickDivTeam}>{'팀 나누기'}</button>
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

export default App;
