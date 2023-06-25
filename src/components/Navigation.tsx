import { AiOutlineLeft } from 'react-icons/ai';
import { ReactElement, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import iconBeach from '@/assets/icon_beach.png';

interface IProps {
  left?: ReactElement | string;
  right?: ReactElement | string;
  leftOnClick?: () => void;
  rightOnClick?: () => void;
}

const Navigation = ({
  left,
  leftOnClick,
  right,
  rightOnClick,
  children,
  ...props
}: PropsWithChildren<IProps>) => (
  <Wrapper {...props}>
    <Left onClick={leftOnClick}>{left || <AiOutlineLeft size="25" />}</Left>
    <Center>{children || <img src={iconBeach} alt="icon_Beach" />}</Center>
    <Right onClick={rightOnClick}>{right}</Right>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
`;

const Left = styled.div`
  margin-left: 20px;
  margin-right: auto;
  cursor: pointer;
`;
const Center = styled.div`
  position: absolute;
`;
const Right = styled.div`
  margin-left: auto;
  margin-right: 18px;
  cursor: pointer;
`;

export default Navigation;
