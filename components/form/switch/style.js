import { styled } from 'styled-components';

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  & > input[type='checkbox']:checked + .switch::before {
    transform: translateX(25px);
    background-color: white;
  }

  & > input[type='checkbox']:checked + .switch {
    background-color: var(--purple-600);
  }
`;

export const CheckboxEl = styled.input`
  display: none;
`;

export const SwitchToggle = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: var(--gray-100);
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;
