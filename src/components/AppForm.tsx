import { useState } from "react";
import { useClickAwayListener } from "../hooks/useClickAwayListener";
import { useFetch } from "../hooks/useFetch";
import { FormikFields, useValidateFormik } from "../hooks/useFormik";
import { useToogle } from "../hooks/useToggle";
import { City } from "../models/city.interface";
import { ApiService } from "../services/ApiService";
import { AdditionallyFields } from "./AdditionallyFields";
import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { Overlay } from "./Overlay";

export const AppForm = () => {
  const [additionally, onAdditionally] = useToogle(false);
  const [isOpenCities, onCloseSities, onOpenSities] = useClickAwayListener();
  const [isOpenAbount, onCloseAbount, onOpenAbount] = useClickAwayListener();
  const { formik, handlerDropdownChange } = useValidateFormik({ onSubmit });
  const { data: cities } = useFetch<City[]>(ApiService.get("/cities.json"));
  const { data: sources } = useFetch<string[]>(ApiService.get("/sources.json"));
  const [isLoading, setLoading] = useState(false);

  function onSubmit(values: FormikFields) {
    setLoading(true);
    const timeout = setTimeout(() => {
      console.log(JSON.stringify(values));
      setLoading(false);
      clearTimeout(timeout);
      formik.resetForm();
    }, 2000);
  }

  const onClose = () => {
    onCloseSities();
    onCloseAbount();
  };

  return (
    <Overlay>
      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-wrap justify-between">
          <div className="d-flex flex-wrap justify-between">
            <Input
              placeholder="Иван"
              title="Ваше имя *"
              name="username"
              value={formik.values.username}
              error={formik.errors.username}
              onChange={formik.handleChange}
            />
            <Input
              placeholder="+7 (000) 000-00-00"
              name="phone"
              value={formik.values.phone}
              error={formik.errors.phone}
              title="Номер телефона *"
              onChange={formik.handleChange}
              type="phone"
            />
            <Input
              placeholder="example@skdesign.ru"
              title="E-mail *"
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
              name="email"
            />
            <Input
              placeholder="instagram.com/skde…"
              title="Ссылка на профиль *"
              value={formik.values.linkToProfile}
              error={formik.errors.linkToProfile}
              name="linkToProfile"
              onChange={formik.handleChange}
            />
          </div>

          <Dropdown
            placeholder="Выберите город *"
            open={isOpenCities}
            name="city"
            onSelect={handlerDropdownChange("city", onClose)}
            onClose={onCloseSities}
            onOpen={onOpenSities}
            selectedValue={formik.values.city}
            error={formik.errors.city}
            options={cities}
          />
          <Input
            placeholder="SK Design"
            title="Название организации/студии"
            name="organization"
            value={formik.values.organization}
            onChange={formik.handleChange}
            fullWidth
          />

          <AdditionallyFields
            title={"Показать дополнительные поля"}
            open={additionally}
            onOpen={onAdditionally}
          >
            <>
              <Input
                placeholder="ФИО"
                title="Получатель"
                fullWidth
                value={formik.values.recipient}
                onChange={formik.handleChange}
                name="recipient"
                className="mb-15"
              />
              <Dropdown
                placeholder="От куда узнали про нас?"
                open={isOpenAbount}
                options={sources}
                name="howDidYouKnow"
                onClose={onCloseAbount}
                onSelect={handlerDropdownChange("howDidYouKnow", onClose)}
                onOpen={onOpenAbount}
                selectedValue={formik.values.howDidYouKnow}
              />
            </>
          </AdditionallyFields>

          <Button
            fullWidth
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || isLoading}
            isLoading={isLoading}
          >
            Отправить заявку
          </Button>
        </div>
      </form>
    </Overlay>
  );
};
