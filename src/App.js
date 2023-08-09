import { useState } from 'react';
import './components/authorization/AuthorizationWindow';
import { AuthorizationWindow } from './components/authorization/AuthorizationWindow';

export default function App() {
  let [authorized, setAuthorized] = useState(false);

  if (authorized) {
    // TODO
  }

  function authorize(login, password) {
    setAuthorized(true);
    alert(`Login: ${login}, Password: ${password}`);
  }

  return (
    <AuthorizationWindow authorize={authorize}></AuthorizationWindow>
  );
}
