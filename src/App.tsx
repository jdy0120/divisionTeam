import React from 'react';
import InsertUser from './components/InsertUser';
import DivTeam from './components/DivTeam'
import { UserInfo, Position } from '../types/type'

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

    setUserInfoList(changeUserPosition)
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
                  <select name={element.userId} onChange={positionChange}>
                    <option value="None">{`없음`}</option>
                    <option value="Top">{`탑`}</option>
                    <option value="Junggle">{`정글`}</option>
                    <option value="Mid">{`미드`}</option>
                    <option value="ADC">{`원딜`}</option>
                    <option value="Support">{`서폿`}</option>
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
