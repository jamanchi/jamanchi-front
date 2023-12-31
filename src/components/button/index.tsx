import styled from '@emotion/styled';
import { ComponentProps, PropsWithChildren } from 'react';
import { colors } from '@/style/variables';
import { HEIGHT } from './constant';
import Ripple from '../Ripple';
import BMJUA from '@/style/mixin/font/BMJUA_otf.otf';

interface IProps extends ComponentProps<'button'> {
  color?: 'primary' | 'secondary';
  fontColor?: 'white' | 'black';
}

const Button = ({
  color = 'primary',
  fontColor = 'white',
  children,
  ...props
}: PropsWithChildren<IProps>) => (
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
  font-size: 18px;
  font-family: 'MBJUA';
  src: url(${BMJUA}) format('woff');
  border: 0;
  border-radius: 8px;
  background-color: ${(props) => colors[props.color as keyof typeof colors]};
  color: ${(props) => colors[props.fontColor as keyof typeof colors]};
  &:hover {
    filter: brightness(95%);
  }
`;

export default Button;
