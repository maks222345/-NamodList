// AppButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  path: string;
  onClick?: () => void;
}

const AppButton = ({ type, disabled, buttonLabel, path, onClick }: AppButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Предотвратите отправку формы
    if (onClick) {
      onClick();
    }
    navigate(path);
  };

  return (
    <button type={type} disabled={disabled} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

export default AppButton;