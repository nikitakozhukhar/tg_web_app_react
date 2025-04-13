import { SetStateAction, useCallback, useEffect, useState } from "react";
import "./Form.css";
import useTelergam from "../../hooks/useTelergam";

const Form = () => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("physical");
  const {tg} = useTelergam();

  const onSendData = useCallback(() => {
    const data = {
      city,
      street,
      subject
    }
    console.log('data: ', data)
    tg.sendData(JSON.stringify(data))
  }, [city, street, subject])

  useEffect(() => {
   tg.onEvent('mainButtonClicked', onSendData)

   return () => {
    tg.offEvent('mainButtonClicked', onSendData)
   }
  }, [])

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  }, [])

  useEffect(() => {
    if (!city || !street) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [city, street])

  
  const onChangeCity = (e: { target: { value: SetStateAction<string>; }; }) => {
    setCity(e.target.value);
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
          placeholder={"Город"} 
          value={city}
          onChange={onChangeCity}
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
