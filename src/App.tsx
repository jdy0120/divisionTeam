import React from 'react';
import InsertUser from './components/InsertUser';
import DivTeam from './components/DivTeam'
import { UserInfo, Position } from '../types/type'
import { checkValidTeam } from './utils/checkValidTeam';

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

  const positionChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    const position = e.target.value as Position
    
    const changeUserPosition = userInfoList.map((element) => {
      if (element.userId === e.target.name) {
        return {
          ...element,
          position: position
        }
      } else {
        return {
          ...element
        }
      }
    })
    try {
      checkValidTeam(changeUserPosition)
    } catch(err) {
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
    setUserInfoList(changeUserPosition)
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
    <>
      {runDivTeam === false ?
        <div>
          <InsertUser userInfoList={userInfoList} setUserInfoList={setUserInfoList}/>
          
            {userInfoList?.map((element,index) => {
              return (
                <div key={index}>
                  <p >{element.userId}</p>
                  <select value={element.position} name={element.userId} onChange={positionChange}>
                    <option value="None">{`없음`}</option>
                    <option value="Top">{`탑`}</option>
                    <option value="Junggle">{`정글`}</option>
                    <option value="Mid">{`미드`}</option>
                    <option value="ADC">{`원딜`}</option>
                    <option value="Support">{`서폿`}</option>
                  </select>
                  <select value={element.team} name={element.userId} onChange={selectTeam}>
                    <option value="0">{`상관없음`}</option>
                    <option value="1">{`1팀`}</option>
                    <option value="2">{`2팀`}</option>
                  </select>
                </div>
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
