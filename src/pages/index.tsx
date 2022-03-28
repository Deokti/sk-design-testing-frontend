import React from "react";
import { Input } from "../components/Input";
import { Overlay } from "../components/Overlay";

export const App = () => {
  return (
    <Overlay>
      <div className="d-flex flex-wrap justify-between">
        <Input placeholder="Иван" title="Ваше имя *" />
        <Input placeholder="+7 (000) 000-00-00" title="Номер телефона *" />
        <Input placeholder="example@skdesign.ru" title="E-mail *" />
        <Input placeholder="instagram.com/skde…" title="Ссылка на профиль *" />

        <Input
          placeholder="SK Design"
          title="Название организации/студии"
          fullWidth
        />

        <Input placeholder="ФИО" title="Получатель" fullWidth />
      </div>
    </Overlay>
  );
};
