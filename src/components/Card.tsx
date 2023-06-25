import styled from '@emotion/styled';
import { MouseEventHandler, PropsWithChildren } from 'react';
import { colors } from '@/style/variables';

interface IProps {
  textColor?: 'primary' | 'secondary' | 'gray' | 'black' | 'white';
  borderColor?: 'primary' | 'secondary' | 'gray';
  onClick?: MouseEventHandler;
}

const Card = ({
  borderColor = 'primary',
  textColor = 'black',
  onClick,
  children,
  ...props
}: PropsWithChildren<IProps>) => (
  <Wrapper
    borderColor={borderColor}
    textColor={textColor}
    onClick={onClick}
    {...props}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.section<IProps>`
  border: 3px solid
    ${(props) => colors[props.borderColor as keyof typeof colors]};
  color: ${(props) => colors[props.textColor as keyof typeof colors]};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export default Card;
