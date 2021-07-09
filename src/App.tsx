import React from 'react';
import InsertUser from './components/InsertUser';
import DivTeam from './components/DivTeam'
import { UserInfo, Position } from '../types/type'
import { checkValidTeam } from './utils/checkValidTeam';
import styled from 'styled-components';
import DragNDrop from './components/DragNDrop';

const SelectOptionUser = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 3rem;
`;

const DivTeamButton = styled.button`
  margin-top: 10px;
  width: 120px;
  height: 50px;
  border: 1px solid #BDBDC0;
  border-radius: 2px;
  background-color: white;

  &:hover {
    background-color: #BDBDC0;
  }
`;

function App() {
  const [userInfoList, setUserInfoList] = React.useState<UserInfo[]>([]);
  const [runDivTeam, setRunDivTeam] = React.useState<boolean>(false);

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

  const selectTeam = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const team = parseInt(e.target.value)

    const changeUserTeam = userInfoList.map((element) => {
      if (element.userId === e.target.name) {
        return {
          ...element,
          team: team
        }
      } else {
        return {
          ...element
        }
      }
    })
    try {
      checkValidTeam(changeUserTeam)
    } catch (err) {
      switch (err.message) {
        case 'overlapPosition':
          alert('한 팀에 중복된 라인이 있습니다.')
          break
        case 'excessPersonnel':
          alert('한 팀에 너무 많은 인원이 있습니다.')
          break
        default:
          alert('알 수 없는 오류')
      }
    }
    setUserInfoList(changeUserTeam)
  }
  
  React.useEffect(() => {
    console.log(userInfoList)
  },[userInfoList])

  return (
    <SelectOptionUser>
      {runDivTeam === false ?
        <>
          <InsertUser userInfoList={userInfoList} setUserInfoList={setUserInfoList}/>
          <DragNDrop userInfoList={userInfoList} setUserInfoList={setUserInfoList}/>
          <DivTeamButton onClick={clickDivTeam}>{'팀 나누기'}</DivTeamButton>
        </>
      :
      <div>
        <DivTeam userInfoList={userInfoList} />
        <DivTeamButton onClick={clickSearchTeam}>{'인원 수정'}</DivTeamButton>
      </div>
      }
    </SelectOptionUser>
  );
}

export default App;
