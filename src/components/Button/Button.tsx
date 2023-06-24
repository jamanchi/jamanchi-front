import styled from '@emotion/styled';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { colors } from '@/style/variables';
import { HEIGHT } from './constant';
import Ripple from './components/Ripple';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary';
  fontColor?: 'white' | 'black';
}

const Button = ({
  color = 'primary',
  fontColor = 'white',
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton color={color} fontColor={fontColor} {...props}>
    {children}
    <Ripple duration={700} color={colors[color as keyof typeof colors]} />
  </StyledButton>
);

const StyledButton = styled.button<{
  color: string;
  fontColor: string;
}>`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: ${HEIGHT}px;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => colors[props.color as keyof typeof colors]};
  color: ${(props) => colors[props.fontColor as keyof typeof colors]};
  &:hover {
    filter: brightness(95%);
  }
`;

export default Button;
