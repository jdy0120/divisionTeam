import React from 'react';
import { UserInfo } from '../../types/type';
import styled from 'styled-components';
import { colors } from '../assets/color';

const DeleteButton = styled.button`
    background-color: ${colors.innerBox};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        color: ${colors.fontColor}
    }
`;

interface Props {
    userInfoList:UserInfo[],
    setUserInfoList:React.Dispatch<React.SetStateAction<UserInfo[]>>,
    userIndex: number;
  }

const DeleteUser = (props: Props) => {
    const deleteUserInfo = (e:React.MouseEvent<HTMLButtonElement>) => {
        const filterUser = props.userInfoList.filter((element,index) => {
            if (index === props.userIndex) {
                return false
            }
            return true
        })

        props.setUserInfoList(filterUser);
    }
    return (
        <DeleteButton onClick={deleteUserInfo}>{'X'}</DeleteButton>
    );
}

export default DeleteUser;