import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueRef {
  value: string;
}
interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, ...props },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue, fieldName, error } = useField(name);
  const inputRef = useRef<InputValueRef>({ value: defaultValue });

  const [isFocus, setFocus] = useState(false);
  const [isField, setField] = useState(false);

  const handleInputFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleInputField = useCallback(() => {
    setFocus(false);
    setField(!!inputRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocus={isFocus} isError={!!error}>
      <Icon
        isFocus={isFocus}
        isField={isField}
        isError={!!error}
        name={icon}
        size={20}
        color="#666360"
      />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputField}
        onChangeText={value => {
          inputRef.current.value = value;
        }}
        {...props}
      />
    </Container>
  );
};

export default forwardRef(Input);
