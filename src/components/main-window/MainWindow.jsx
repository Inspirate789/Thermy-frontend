import React from "react";
import "./style.css";

export function MainWindow() {
  return (
    <div className="main-window">
      <header className="header">
        <div className="title-wrapper">
          <h1 className="title">Thermy</h1>
          <div className="version">v.0.1.0</div>
        </div>
        <div className="header-spacer" />
        <div className="name-wrapper">
          <div className="text-wrapper">Andrey Sapozhkov</div>
          <div className="div">Admin</div>
        </div>
        <div className="exit-button-wrapper">
          <img className="logout" alt="Logout" src="/img/logout.png" />
        </div>
      </header>
      <div className="editor">
        <div className="layers">
          <div className="layer-button">
            <div className="text-wrapper">Layer name 1</div>
          </div>
          <div className="layer-name-wrapper">
            <div className="text-wrapper">Layer name 2</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper">Layer name 3</div>
          </div>
          <div className="layer-button-2">
            <div className="text-wrapper">Layer name 4</div>
          </div>
          <div className="layer-button-3">
            <div className="text-wrapper">Layer name 5</div>
          </div>
          <div className="new-layer-button">
            <div className="text-wrapper">+</div>
          </div>
          <div className="layer-buttons-spacer" />
          <div className="save-button-wrapper">
            <div className="save-button">
              <div className="save-button-text">
                Save text
                <br />
                markup
              </div>
            </div>
          </div>
        </div>
        <div className="text-editor" />
        <div className="text-editor" />
      </div>
    </div>
  );
};
