import styled from '@emotion/styled';
import { ComponentProps, PropsWithChildren } from 'react';
import { colors } from '@/style/variables';

interface IProps extends ComponentProps<'div'> {
  textColor?: 'primary' | 'secondary' | 'gray' | 'black' | 'white';
  borderColor?: 'primary' | 'secondary' | 'gray';
}

const Card = ({
  borderColor = 'primary',
  textColor = 'black',
  children,
  ...props
}: PropsWithChildren<IProps>) => (
  <Wrapper borderColor={borderColor} textColor={textColor} {...props}>
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
  padding: 10px;
`;
export default Card;
