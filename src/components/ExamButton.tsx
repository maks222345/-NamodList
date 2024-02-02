import React, { FC, ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonLabel: string;
  path: string;
  onSubmit?: () => boolean; // Обновляем тип функции onSubmit
}

const ExamButton: FC<AppButtonProps> = ({ type, disabled, buttonLabel, path, onSubmit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    let shouldNavigate = true;
    if (onSubmit) {
      shouldNavigate = onSubmit(); // Вызываем функцию onSubmit и проверяем ее результат
    }
    if (shouldNavigate) {
      navigate(path);
    }
  };

  return (
    <button type={type} disabled={disabled} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

export default ExamButton;