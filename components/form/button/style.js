import { styled } from 'styled-components';

export const ButtonEl = styled.button`
  height: 60px;
  border-radius: 32px;
  border: 1px solid
    ${(props) =>
      props.variant === 'ghost' ? 'var(--gray-iron-300)' : 'var(--purple-600)'};
  background-color: ${(props) =>
    props.variant === 'ghost' ? 'white' : 'var(--purple-500)'};
  color: ${(props) =>
    props.variant === 'ghost' ? 'var(--gray-iron-700)' : 'white'};
  padding: 16px 28px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  box-shadow: 0px 1px 2px 0px #1018280d;
  cursor: pointer;
`;
