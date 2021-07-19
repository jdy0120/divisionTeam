import React from 'react';
import MenualModal from './MenualModal';
import styled from 'styled-components';

const MenualText = styled.p`

`;

const Menual = () => {
    const [modal, setModal] = React.useState(false);

    const openModal = (e:React.MouseEvent) => {
        setModal(!modal)
    }

    return (
        <>
            <MenualText onClick={openModal}>{'사용방법'}</MenualText>
            
        </>
    );
}

export default Menual;