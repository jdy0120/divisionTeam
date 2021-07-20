import React from 'react';
import styled from 'styled-components';
import { colors } from '../../assets/color';
import MenualContent from './MenualContent';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 1;
`;

const ModalWrapper = styled.div`
    width: 67%;
    height: 70%;
    padding: 10px;
    border: 1px solid ${colors.white};
    background-color: ${colors.innerBox};
    border-radius: 15px;
    text-align: left;
    overflow: auto;
`;

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenualModal = ({ showModal, setShowModal }: Props) => {
    return (
        <>
            {showModal ? 
                <Background>
                    <ModalWrapper>
                        <MenualContent/>
                    </ModalWrapper>
                </Background>
            : null}
        </>
    );
}

export default MenualModal;