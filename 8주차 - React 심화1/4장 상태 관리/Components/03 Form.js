import React from 'react';
import styled from 'styled-components';
import { useFormContext } from './FormContext';

export function Form({ children, onSubmit }) {
  const { handleSubmit } = useFormContext();
  //handleSubmit은 onSubmit을 콜백으로 받음
  //onSubmit은 event객체를 받는 handler 형태인데, 그럼 handleSubmit이 함수를 리턴한다고 추론가능
  return <StyledForm onSubmit={handleSubmit(onSubmit)}>{children}</StyledForm>;
}

export function TextInput({ label, ...props }) {
  const { register } = useFormContext();
  return <input type="text" {...register(label)} {...props} />;
}

export function SubmitButton({ children }) {
  return <button type="submit">{children}</button>;
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;
