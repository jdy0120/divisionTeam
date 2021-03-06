import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import styled, { css } from 'styled-components';
import { UserInfo, Position } from '../../types/type';
import { overlapPosition,  excessPersonnel } from '../utils/checkValidTeam';
import { colors } from '../style/color';
import DeleteUser from './DeleteUser';

interface TeamTagProps {
    teamNumber: number;
}

const DragNDropStyle = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
`;

const DropStyle = styled.div`
    position: relative;
    width: 250px;
    padding: 30px;
    border: 1px solid ${colors.line};
    background-color: ${colors.box};
    border-radius: 5px;
`;

const TeamTag = styled.p`
    position: absolute;
    top: -10px;

    ${({teamNumber}:TeamTagProps) => {
        if (teamNumber === 0) {
            return css`
                color: ${colors.nonTeam};
            `;
        }
        
    
        else if (teamNumber === 1) {
            return css`
                color: ${colors.oneTeam};
            `;
        }

        else if (teamNumber === 2) {
            return css`
                color: ${colors.twoTeam};
            `;
        }
    }}
`;

const PrintUserInfo = styled.div`
    padding: 0 5px 0 5px;
    border: none;
    border-radius: 5px;
    background-color: ${colors.innerBox};
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }

    @media ${(props) => props.theme.mobile} {
        display: inline-block;

      }
`;

const SelectUserPosition = styled.select`
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: ${colors.innerBox};
    color: ${colors.white};
    
    @media ${(props) => props.theme.mobile} {
        font-size: 0.5rem;
      }
`;

const PrintUserID = styled.p`
    font-size: 1rem;
    color: ${colors.fontColor};
    font-weight: bold;

    @media ${(props) => props.theme.mobile} {
        font-size: 0.5rem;
      }
`;

interface Props {
    userInfoList: UserInfo[]
    setUserInfoList: React.Dispatch<React.SetStateAction<UserInfo[]>>
}

const DragNDrop = ({userInfoList, setUserInfoList}: Props) => {
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

        if (!overlapPosition(changeUserPosition)) {
            alert('??? ?????? ????????? ???????????? ????????????.')
        }

        setUserInfoList(changeUserPosition)
    }

    const onDragEnd = (result:DropResult) => {
        const { draggableId, destination } = result;

        const movedTeam = destination ?  destination.droppableId : '0';

        const moveUserInfo = userInfoList.map((el) => {
            if (el.userId === draggableId) {
                return {
                    ...el,
                    team: parseInt(movedTeam)
                }
            } else {
                return {
                    ...el
                }
            }
        })

        if (!excessPersonnel(moveUserInfo)) {
            alert('??? ?????? ?????? ?????? ????????? ????????????.')
        }

        setUserInfoList(moveUserInfo)
    }

    return (
        <DragNDropStyle>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='0'>
                    {(provided) => (
                        <DropStyle
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <TeamTag teamNumber={0}>{'????????????'}</TeamTag>
                            {userInfoList.filter((el) => {
                                if (el.team === 0) return true
                                return false
                            }).map((element,index) => {
                                return (
                                    <Draggable index={index} key={element.userId} draggableId={element.userId}>
                                        {(provided) => 
                                        <PrintUserInfo
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <PrintUserID>
                                                {element.userId}
                                            </PrintUserID>
                                            <div>
                                                <SelectUserPosition value={element.position} name={element.userId} onChange={positionChange}>
                                                    <option value="None">{`??????`}</option>
                                                    <option value="Top">{`???`}</option>
                                                    <option value="Junggle">{`??????`}</option>
                                                    <option value="Mid">{`??????`}</option>
                                                    <option value="ADC">{`??????`}</option>
                                                    <option value="Support">{`??????`}</option>
                                                </SelectUserPosition>
                                                <DeleteUser userInfoList={userInfoList} setUserInfoList={setUserInfoList} userIndex={index} />   
                                            </div>
                                        </PrintUserInfo>
                                        }
                                    </Draggable>
                                );
                            })}
                        </DropStyle>
                    )}
                </Droppable>
                <Droppable droppableId='1'>
                    {(provided) => (
                        <DropStyle
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <TeamTag teamNumber={1}>{'1???'}</TeamTag>
                        {userInfoList.filter((el) => {
                            if (el.team === 1) return true
                            return false
                        }).map((element,index) => {
                            return (
                                <Draggable index={index} key={element.userId} draggableId={element.userId}>
                                    {(provided) => 
                                        <PrintUserInfo
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                    >
                                        <PrintUserID>
                                            {element.userId}
                                        </PrintUserID>
                                        <div>
                                                <SelectUserPosition value={element.position} name={element.userId} onChange={positionChange}>
                                                    <option value="None">{`??????`}</option>
                                                    <option value="Top">{`???`}</option>
                                                    <option value="Junggle">{`??????`}</option>
                                                    <option value="Mid">{`??????`}</option>
                                                    <option value="ADC">{`??????`}</option>
                                                    <option value="Support">{`??????`}</option>
                                                </SelectUserPosition>
                                                <DeleteUser userInfoList={userInfoList} setUserInfoList={setUserInfoList} userIndex={index} />   
                                            </div>
                                    </PrintUserInfo>
                                    }
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </DropStyle>
                    )}
                </Droppable>
                <Droppable droppableId='2'>
                    {(provided) => (
                        <DropStyle
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <TeamTag teamNumber={2}>{'2???'}</TeamTag>
                        {userInfoList.filter((el) => {
                            if (el.team === 2) return true
                            return false
                        }).map((element,index) => {
                            return (
                                <Draggable index={index} key={element.userId} draggableId={element.userId}>
                                    {(provided) => 
                                        <PrintUserInfo
                                        ref={provided.innerRef}
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                    >
                                        <PrintUserID>
                                            {element.userId}
                                        </PrintUserID>
                                        <div>
                                                <SelectUserPosition value={element.position} name={element.userId} onChange={positionChange}>
                                                    <option value="None">{`??????`}</option>
                                                    <option value="Top">{`???`}</option>
                                                    <option value="Junggle">{`??????`}</option>
                                                    <option value="Mid">{`??????`}</option>
                                                    <option value="ADC">{`??????`}</option>
                                                    <option value="Support">{`??????`}</option>
                                                </SelectUserPosition>
                                                <DeleteUser userInfoList={userInfoList} setUserInfoList={setUserInfoList} userIndex={index} />   
                                            </div>
                                    </PrintUserInfo>
                                    }
                                </Draggable>
                            );
                        })}
                        {provided.placeholder}
                    </DropStyle>
                    )}
                </Droppable>
            </DragDropContext>
        </DragNDropStyle>
    );
}

export default DragNDrop