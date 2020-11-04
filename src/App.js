import React from 'react';
import style from './App.module.css';
import UserForm from './components/userForm/UserForm';

export default function App() {
  return (
    <div className = { style.app }>
      <UserForm/>
    </div>
  );
}
