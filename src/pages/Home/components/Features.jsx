import React from 'react';
import styled from 'styled-components';

import { media } from '../../../styles';
import {
  featurePhone,
  featurePhone2,
  twinkle1,
  twinkle2,
  bankBook,
} from '../../../assets';
import { useScrollFadeIn, useScrollClipPath } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    ${media.small} {
      max-width: 100vw;
      min-height: 1024px;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 10rem;
      background: linear-gradient(
        to bottom,
        ${({ theme }) => theme.palette.secondary},
        ${({ theme }) => theme.palette.accent}
      );
    }
    ${media.large} {
      padding: 120px 20px;
    }
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Label: styled.p`
    ${media.small} {
      ${(props) => props.theme.typography.mobileLabel};
    }
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${media.small} {
      ${(props) => props.theme.typography.mobileTitle};
    }
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${media.small} {
      ${(props) => props.theme.typography.mobileDescription};
    }
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  List: styled.span`
    ${media.small} {
      margin-bottom: 0;
    }
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${media.small} {
      ${(props) => props.theme.typography.mobileDescription};
    }
    min-height: 200px;
    ${(props) => props.theme.typography.description};

    & > b {
      font-weight: bold;
      color: ${(props) => props.theme.palette.darkPurple};
    }
  `,
  Blob: styled.div`
    ${media.small} {
      width: 97%;
      background: #6e98fa;
    }
    width: 580px;
    aspect-ratio: 1 / 1;
    background: ${(props) => props.theme.palette.secondary};
    border-radius: 50%;
    position: relative;
  `,
  BankBook: styled.span`
    ${media.small} {
      display: none;
    }
    width: 155px;
    height: 95px;
    position: absolute;
    top: 5px;
    left: 245px;
    background: no-repeat center/cover url(${bankBook});
    z-index: 2;
  `,
  Twinkle1: styled.span`
    ${media.small} {
      display: none;
    }
    width: 150px;
    height: 106px;
    position: absolute;
    top: -30px;
    left: -50px;
    background: no-repeat center/cover url(${twinkle1});
  `,
  Twinkle2: styled.span`
    ${media.small} {
      display: none;
    }
    width: 150px;
    height: 106px;
    position: absolute;
    top: 20px;
    right: -65px;
    background: no-repeat center/cover url(${twinkle2});
  `,
  Phone1: styled.span`
    ${media.small} {
      display: none;
    }
    width: 100%;
    height: 550px;
    position: absolute;
    top: -10px;
    left: -150px;
    background: no-repeat center/cover url(${featurePhone});
  `,
  Phone2: styled.span`
    ${media.small} {
      display: none;
    }
    width: 100%;
    height: 550px;
    position: absolute;
    bottom: -10px;
    right: -150px;
    background: no-repeat center/cover url(${featurePhone2});
  `,
};

const Features = () => {
  const animatedList = useScrollClipPath();
  const animatedTwinkle = {
    0: useScrollFadeIn('up'),
    1: useScrollFadeIn('up'),
    2: useScrollFadeIn('up'),
  };
  const animatedImage = {
    0: useScrollFadeIn('up'),
    1: useScrollFadeIn('up', 1.2, 0.1),
  };

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>Our Features</S.Label>
        <S.Title>사용자 맞춤형 월급 계산</S.Title>
        <S.Description>
          주휴/연장/휴일/야간근로까지, 내 스케줄에 맞춰서 <br />
          자동으로 월급 계산!
        </S.Description>
        <S.List>
          <S.ListItem {...animatedList}>
            지금 받는 월급
            <br />
            <b>법적으로 받을 수 있는 월급보다 적지는 않을까?</b>
            <br />
            한눈에 비교하고 편하게 상담받자!
          </S.ListItem>
        </S.List>
      </S.TextWrapper>
      <S.Blob>
        <S.BankBook {...animatedTwinkle[0]} />
        <S.Twinkle1 {...animatedTwinkle[1]} />
        <S.Twinkle2 {...animatedTwinkle[2]} />
        <S.Phone1 {...animatedImage[0]} />
        <S.Phone2 {...animatedImage[1]} />
      </S.Blob>
    </S.Wrapper>
  );
};

export default Features;
