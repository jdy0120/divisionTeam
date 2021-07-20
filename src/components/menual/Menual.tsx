import React from 'react';
import MenualModal from './MenualModal';
import styled from 'styled-components';
import { colors } from '../../assets/color';

const MenualText = styled.p`
    display: inline;
    font-size: 13px;
    color: ${colors.fontColor};
    cursor: pointer;
`;

const SplitMenu = styled.p`
    display: inline;
    font-size: 13px;
    color: ${colors.fontColor};
`;

const Menual = () => {
    const [showModal, setShowModal] = React.useState(false);

    const openModal = (e:React.MouseEvent) => {
        setShowModal(!showModal)
    }

    return (
        <>
            <MenualText onClick={openModal}>{showModal ? '닫기' : '사용방법'}</MenualText>
            <SplitMenu>{'    |    '}</SplitMenu>
            <MenualText>{'문의하기'}</MenualText>
            <MenualModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    );
}

export default Menual;