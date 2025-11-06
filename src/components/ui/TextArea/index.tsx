import { forwardRef } from 'react';
import * as S from './style';

export interface ITextAreaType {
  placeholder: string;
  label?: string;
  height?: number;
  value?: string;
  name?: string;
  state?: 'default' | 'error';
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaType>(
  (
    {
      placeholder,
      label,
      height,
      value,
      onChange,
      name,
      state = 'default',
      'aria-invalid': ariaInvalid,
      'aria-describedby': ariaDescribedBy,
    },
    ref,
  ) => {
    return (
      <S.TextAreaContainer>
        <S.Label>{label}</S.Label>
        <S.TextAreaContent
          ref={ref}
          value={value}
          placeholder={placeholder}
          height={height}
          name={name}
          state={state}
          onChange={onChange}
          aria-invalid={ariaInvalid}
          aria-describedby={ariaDescribedBy}
        ></S.TextAreaContent>
      </S.TextAreaContainer>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
