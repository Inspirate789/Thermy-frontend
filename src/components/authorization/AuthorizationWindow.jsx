import { React, useState } from "react";
import "./style.css";

export function AuthorizationWindow({ authorize }) {
  const [formData, setFormData] = useState({ login: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    authorize(formData.login, formData.password);
  };

  return (
    <div className="authorization-window">
      <div className="title-wrapper">
        <h1 className="title">Thermy</h1>
        <span className="version">v.0.1.0</span>
      </div>
      <form className="authorization-form" onSubmit={handleSubmit}>
        <div className="authorization-box">
          <span className="authorization-text">Авторизация</span>
          <div className="div">
            <div className="text-wrapper">
              <label htmlFor="login" className="login-text">Логин:</label>
              <label htmlFor="password" className="password-text">Пароль:</label>
            </div>
            <div className="inputs-wrapper">
              <input type="text" id="login" name="login" className="text-input" value={formData.login} onChange={handleChange} />
              <input type="text" id="password" name="password" className="text-input" value={formData.password} onChange={handleChange} />
            </div>
          </div>
          <button className="authorization-button">
            <span className="button-text">Войти</span>
          </button>
        </div>
      </form>
      <div className="spacer" />
    </div>
  );
};
