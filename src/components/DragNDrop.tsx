import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { UserInfo, Position } from '../../types/type';
import { overlapPosition,  excessPersonnel } from '../utils/checkValidTeam';

const DragNDropStyle = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
`;

const DropStyle = styled.div`
    width: 250px;
    padding: 30px;
    border: 1px solid #BDBDC0;
    border-radius: 5px
`;

const PrintUserInfo = styled.div`
    display: flex;
    justify-content: space-between;
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
            alert('한 팀에 중복된 포지션이 있습니다.')
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
            alert('한 팀에 너무 많은 인원이 있습니다.')
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
                                            <p>
                                                {element.userId}
                                            </p>
                                            <select value={element.position} name={element.userId} onChange={positionChange}>
                                                <option value="None">{`없음`}</option>
                                                <option value="Top">{`탑`}</option>
                                                <option value="Junggle">{`정글`}</option>
                                                <option value="Mid">{`미드`}</option>
                                                <option value="ADC">{`원딜`}</option>
                                                <option value="Support">{`서폿`}</option>
                                            </select>
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
                                        <p>
                                            {element.userId}
                                        </p>
                                        <select value={element.position} name={element.userId} onChange={positionChange}>
                                            <option value="None">{`없음`}</option>
                                            <option value="Top">{`탑`}</option>
                                            <option value="Junggle">{`정글`}</option>
                                            <option value="Mid">{`미드`}</option>
                                            <option value="ADC">{`원딜`}</option>
                                            <option value="Support">{`서폿`}</option>
                                        </select>
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
                                        <p>
                                            {element.userId}
                                        </p>
                                        <select value={element.position} name={element.userId} onChange={positionChange}>
                                            <option value="None">{`없음`}</option>
                                            <option value="Top">{`탑`}</option>
                                            <option value="Junggle">{`정글`}</option>
                                            <option value="Mid">{`미드`}</option>
                                            <option value="ADC">{`원딜`}</option>
                                            <option value="Support">{`서폿`}</option>
                                        </select>
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