import { useRef, useCallback, useContext, createContext } from 'react';
// Form.jsx에서 구현된 컴포넌트를 참고하여 register와 handleSubmit을 구현해보세요.

const FormContext = createContext(null);

function useForm() {
  // formRef는 register를 통해 등록된 폼 상태를 관리합니다.
  const formRef = useRef({});

  const handleSubmit = useCallback(
    callback => e => {
      e.preventDefault();
      callback(formRef.current);
    },
    [formRef.current]
  );

  const register = useCallback(label => {
    const onChange = e => {
      formRef.current = { ...formRef.current, [label]: e.target.value };
    };

    return {
      onChange,
      name: label,
    };
  }, []);

  return { register, handleSubmit };
}

export function useFormContext() {
  //Context가 없을 경우 error를 던지는 로직
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('Use FormContext inside provider.');
  }
  return context;
}

export function FormProvider({ children }) {
  const formControls = useForm();

  return (
    <FormContext.Provider value={formControls}>{children}</FormContext.Provider>
  );
}
