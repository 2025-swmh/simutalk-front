/** @jsxImportSource @emotion/react */
import type React from 'react';
import { forwardRef } from 'react';
import { css } from '@emotion/react';
import { theme } from '../../../styles';
import {
  baseInputStyles,
  endIconStyles,
  errorMessageStyles,
  fullWidthStyle,
  helperTextStyles,
  inputContainerStyles,
  inputWithEndIconStyles,
  inputWithStartIconStyles,
  inputWrapperStyles,
  labelStyles,
  rightTextStyles,
  startIconStyles,
  stateStyles,
  variantStyles,
} from './style';

export interface InputProps {
  variant?: 'default';
  state?: 'default' | 'error';
  disabled?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  width?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  name?: string;
  rightText?: string;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  label?: string;
  helperText?: string;
  errorMessage?: string;

  startIcon?: React.ReactNode;
  endButton?: React.ReactNode;

  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      state = 'default',
      disabled = false,
      readOnly = false,
      fullWidth = false,
      type = 'text',
      placeholder,
      value,
      defaultValue,
      autoFocus = false,
      maxLength,
      minLength,
      required = false,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      label,
      name,
      helperText,
      errorMessage,
      startIcon,
      endButton,
      className,
      rightText,
      ...rest
    },
    ref,
  ) => {
    const inputStyles = css`
      ${baseInputStyles}
      ${variantStyles[variant]}
      ${stateStyles[state]}
      ${fullWidth ? fullWidthStyle : ''}
      ${startIcon ? inputWithStartIconStyles : ''}
      ${endButton ? inputWithEndIconStyles : ''}
    `;

    const wrapperStyles = css`
      ${inputWrapperStyles}
      ${fullWidth && fullWidthStyle}
    `;

    return (
      <div css={wrapperStyles} className={className}>
        {label && (
          <label css={labelStyles}>
            {label}
            {required && (
              <span
                css={css`
                  color: ${theme.color.red[500]};
                `}
              >
                *
              </span>
            )}
          </label>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            css={inputContainerStyles}
            style={{
              flex: 1,
            }}
          >
            {startIcon && <span css={startIconStyles}>{startIcon}</span>}

            <input
              ref={ref}
              css={inputStyles}
              type={type}
              placeholder={placeholder}
              value={value}
              name={name}
              defaultValue={defaultValue}
              disabled={disabled}
              readOnly={readOnly}
              autoFocus={autoFocus}
              maxLength={maxLength}
              minLength={minLength}
              required={required}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              {...rest}
            />

            {endButton && <span css={endIconStyles}>{endButton}</span>}
          </div>
          {rightText && <span css={rightTextStyles}>{rightText}</span>}
        </div>

        {errorMessage && <span css={errorMessageStyles}>{errorMessage}</span>}

        {helperText && !errorMessage && <span css={helperTextStyles}>{helperText}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
