import { SetStateAction, useEffect, useState } from "react";
import "./Form.css";
import useTelergam from "../../hooks/useTelergam";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const {tg} = useTelergam();

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, [])

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [country, street])

  const onChangeCountry = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e: { target: { value: SetStateAction<string>; }; }) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input 
          className={"input"} 
          type="text" 
          placeholder={"Страна"} 
          value={country}
          onChange={onChangeCountry}
      />

      <input 
          className={"input"} 
          type="text" 
          placeholder={"Улица"}
          value={street}
          onChange={onChangeStreet} 
      />

      <select value={subject} onChange={onChangeSubject} className={"select"}>
        <option value={"physical"}>Физ. лицо</option>
        <option value={"legal"}>Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
