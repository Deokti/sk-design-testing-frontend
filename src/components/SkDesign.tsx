import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 940px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

const Subtitle = styled.h2`
  margin: 40px 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: #353238;
`;

const Text = styled.p`
  color: #353238;
`;

const Link = styled.a`
  cursor: pointer;
  display: inline-block;
  color: #0086a8 !important;
  margin: 0;

  &:hover {
    color: currentColor;
    text-decoration: underline !important;
  }
`;

export const SKDesign = () => {
  return (
    <Wrapper>
      <Logo />
      <Subtitle>Оставьте заявку и станьте частью нашей команды</Subtitle>
      <Text>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству
        креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
        интерьерные студии — все, кто дизайн интерьера сделали своим призванием.
      </Text>
      <Text>
        Партнерство мы видим как доверительные отношения, основанные на
        честности реализации бизнес идей в сфере создания и продаж современной,
        качественной, удобной, функциональной и эксклюзивной мебели.
      </Text>

      <Text>
        Ознакомиться с проектами можете в нашем{" "}
        <Link href="https://skdesign.ru/" target="_blank">
          портфолио
        </Link>
        . Если Вы оформляете интерьеры жилых или коммерческих помещений — мы с
        радостью поможем Вам: составим уникальные условия сотрудничества,
        предоставим 3D модели (уточняйте у менеджеров) и разработаем
        коммерческое предложение к Вашему проекту или изображениям.
      </Text>
    </Wrapper>
  );
};
