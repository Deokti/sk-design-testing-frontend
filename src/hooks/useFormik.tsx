import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

export interface FormikFields {
  username: string;
  phone: string;
  email: string;
  linkToProfile: string;
  city: string;
  organization: string;
  recipient: string;
  howDidYouKnow: string;
}

interface useValidateFormikProps {
  onSubmit: (field: FormikFields) => void;
}

export const useValidateFormik = ({ onSubmit }: useValidateFormikProps) => {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit,
    validationSchema: validationSchema(),
    validateOnChange: true,
  });

  function initialValues(): FormikFields {
    return {
      city: "",
      email: "",
      howDidYouKnow: "",
      linkToProfile: "",
      organization: "",
      phone: "",
      recipient: "",
      username: "",
    };
  }

  function validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .min(2, "2 или более символов")
        .required("Обязательное поле"),
      email: Yup.string()
        .email("Некорректный E-mail")
        .required("Обязательное поле"),
      phone: Yup.string()
        .phone("RU", true, "Недействительный номер")
        .required("Обязательное поле"),
      linkToProfile: Yup.string()
        .min(3, "3 или более символов")
        .required("Обязательное поле"),
      city: Yup.string().required("Обязательное поле"),
    });
  }

  const handlerDropdownChange =
    (field: string, callback: () => void) => (value: string) => {
      formik.setValues({
        ...formik.values,
        [field]: value as string,
      });
      callback();
    };

  return {
    formik,
    handlerDropdownChange,
  };
};
