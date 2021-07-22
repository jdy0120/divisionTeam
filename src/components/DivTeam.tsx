import React from 'react';
import { UserInfo } from '../../types/type';
import { divisionTeam } from '../utils/division';
import styled, { css } from 'styled-components';
import { colors } from '../style/color';

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
  border: 1px solid ${colors.line};
  border-radius: 10px;
  background-color: ${colors.box};
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

const NotDivTeam = styled.p`
  font-siez: 2rem;
  color: ${colors.fontColor};
  font-weight: bold;
`;

const PrintUserID = styled.p`
    font-size: 1rem;
    color: ${colors.fontColor};
    font-weight: bold;
`;

interface Props {
  userInfoList: UserInfo[]
}

const DivTeam = (props: Props) => {
  const {redTeam, blueTeam} = divisionTeam(props.userInfoList)
  return (
    <>
      {(redTeam.length === 0 || blueTeam.length === 0) ?
        <NotDivTeam>{'팀을 나눌 수 없습니다.'}</NotDivTeam>
        :
        <DivTeamContainer>
          <PrintTeam>
            <TeamName teamColor='blue'>{'블루팀'}</TeamName>
            {blueTeam.map((el,idx) => {
              return (
                <PrintUserID key={idx}>{el.userId}</PrintUserID>
              )
            })}
          </PrintTeam>
          <PrintTeam>
            <TeamName teamColor='red'>{'레드팀'}</TeamName>
            {redTeam.map((el,idx) => {
              return (
                <PrintUserID key={idx}>{el.userId}</PrintUserID>
              )
            })}
          </PrintTeam>
        </DivTeamContainer>
      }
    </>
  );
}

export default DivTeam