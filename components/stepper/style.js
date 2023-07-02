import { styled } from 'styled-components';

export const StepperWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

export const HeaderWrapper = styled.div`
  height: 78px;
  width: 312px;
`;

export const HeaderContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  justify-content: space-between;
`;

export const HeaderItem = styled.li`
  width: 97px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  position: relative;

  &:not(:last-child)::after {
    height: 2px;
    position: absolute;
    content: '';
    width: 194px;
    right: -155px;
    top: 12px;
    background-color: var(--gray-iron-200);
    z-index: 1;
  }

  &.done:not(:last-child)::after {
    background-color: var(--purple-600);
  }
`;

export const Circle = styled.div`
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.status !== '' ? 'var(--purple-600)' : 'var(--gray-iron-200)'};
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px #f5f3ff;
  z-index: 2;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${(props) =>
    props.status !== '' ? 'var(--purple-600)' : 'var(--gray-iron-200)'};
  border-radius: 50%;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${(props) =>
    props.status !== '' ? 'var(--purple-600)' : 'var(--gray-iron-400)'};
`;
