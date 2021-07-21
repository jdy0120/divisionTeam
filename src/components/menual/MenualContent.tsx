import React from 'react';
import styled from 'styled-components';
import { colors } from '../../style/color';
import multiSearch1 from '../../img/multiSearch1.png';

const ContentText = styled.p`
    color: ${colors.fontColor};
`;

const ContentImg = styled.img`
    width: 100px;
`;

const MenualContent = () => {
    return (
        <>
            <ContentText>
                {'Lol Team은 4인 6인 8인 10인의 롤플레이어들을 비슷한 MMR의 두 팀으로 나눠주는 프로그램입니다.'}
            </ContentText>
            <ContentText>
                {'멀티서치 가능합니다.'}
            </ContentText>
            <ContentImg src={multiSearch1} alt="" />
            <ContentText>
                {'유저 카드를 드래그해서 1팀 또는 2팀으로 이동할 수 있습니다.'}
            </ContentText>
            <ContentText>
                {'꼭 같은 팀이어야 하는 유저들을 1팀 또는 2팀으로 이동시켜 팀을 나눌 수 있습니다.'}
            </ContentText>
            <ContentText>
                {'자신있는 라인을 선택해 팀을 나눌 수 있습니다. 만약 같은 라인에 3명 이상의 유저가 지정되어있다면 MMR이 높은 유저 두명을 기준으로 팀이 나눠집니다.'}
            </ContentText>
            <ContentText>
                {'솔로 랭크 기준으로 MMR을 계산했으면 계산법은 아래 링크에서 확인하실 수 있습니다.'}
            </ContentText>
            <ContentText>
                {'만약 언랭 유저인 경우 실버2 0포인트로 생각하여 MMR을 계산합니다.'}
            </ContentText>
            <ContentText>
                {'나눠진 두 팀의 MMR은 거의 비슷하며 MMR이 높은 팀은 레드팀으로 배정됩니다.'}
            </ContentText>
        </>
    );
}

export default MenualContent;