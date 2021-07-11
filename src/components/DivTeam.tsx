import React from 'react';
import { UserInfo } from '../../types/type';
import { divisionTeam } from '../utils/division';
import styled, { css } from 'styled-components';

interface TeamNameProps {
  teamColor: 'red'|'blue';
}

const DivTeamContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PrintTeam = styled.div`
  position: relative;
  width: 40%;
  min-height: 100px;
  margin: 10px;
  border: 1px solid red;

`;

const TeamName = styled.h4`
  position: absolute;
  top: -30px;

  ${({teamColor}:TeamNameProps) => {
    if (teamColor === 'red') {
      return css`
        background-color: red;
    `;
    }
    

    else if (teamColor === 'blue') {
      return css`
        background-color: blue;
      `
    }
  }}
`;

interface Props {
  userInfoList: UserInfo[]
}

const DivTeam = (props: Props) => {
  const {redTeam, blueTeam} = divisionTeam(props.userInfoList)
  console.log(redTeam, blueTeam)
  return (
    <>
      {(redTeam.length === 0 || blueTeam.length === 0) ?
        <p>{'팀을 나눌 수 없습니다.'}</p>
        :
        <DivTeamContainer>
          <PrintTeam>
            <TeamName teamColor='red'>{'레드팀'}</TeamName>
            {redTeam.map((el,idx) => {
              return (
                <p key={idx}>{el.userId}</p>
              )
            })}
          </PrintTeam>
          <PrintTeam>
            <TeamName teamColor='blue'>{'블루팀'}</TeamName>
            {blueTeam.map((el,idx) => {
              return (
                <p key={idx}>{el.userId}</p>
              )
            })}
          </PrintTeam>
        </DivTeamContainer>
      }
      
    </>
  );
}

export default DivTeam