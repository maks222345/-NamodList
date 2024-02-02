import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {
  buttonLabel: string;
}

const LogoutButton: FC<LogoutButtonProps> = ({ buttonLabel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Перенаправляем пользователя на страницу входа
    localStorage.clear(); // Удаляем все данные из localStorage
    window.location.reload(); // Полностью обновляем страницу
    
  };

  return (
    <button onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

export default LogoutButton;