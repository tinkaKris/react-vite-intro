import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  const [buttonText, setButtonText] = useState("Увійти");
  const [color, setColor] = useState("#ebb6b6");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  function changeEmail(event) {
    setEmailColor(event.target.value);
  }
  function changePassword(event) {
    setPasswordColor(event.target.value);
  }
  return (
    <fieldset>
      <legend>
        <h1>Авторизація</h1>
      </legend>
      <Input
        text="Email"
        placeholder="Введіть свій email"
        type="email"
        value={emailColor}
        style={{ border: emailColor.trim().length ? null : "2px solid red" }}
        onChange={changeEmail}
      />
      <Input
        text="Пароль"
        placeholder="Введіть пароль до облікового запису"
        type="password"
        value={passwordColor}
        style={{ border: passwordColor.trim().length ? null : "2px solid red" }}
        onChange={changePassword}
      />
      <Button
        text={buttonText}
        type="submit"
        style={{ background: color }}
        onClick={() => {
          setButtonText("Вхід...");
          setColor("#c0b2b2");
        }}
      />
    </fieldset>
  );
};

export default App;
