import { styled } from 'styled-components';

export const CardWrapper = styled.div`
  width: ${(props) => props.width};
  background: white;
  border: 1px solid var(--gray-iron-100);
  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};
  position: relative;
`;

export const EffectImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;
