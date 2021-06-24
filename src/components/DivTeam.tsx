import React from 'react';
import { UserInfo } from '../../types/type';
import { divisionTeam } from '../utils/division';

interface Props {
  userInfoList: UserInfo[]
}

const DivTeam = (props: Props) => {
  const {redTeam, blueTeam} = divisionTeam(props.userInfoList)
  console.log(redTeam, blueTeam)
  return (
    <>
      <div>
        {'레드팀'}
      </div>
      <div>
        {'블루팀'}
      </div>
    </>
  );
}

export default DivTeam