import styled from '@emotion/styled';
import { MouseEvent, ReactElement, TouchEventHandler, useState } from 'react';
import Card from '../Card';
import { colors } from '@/style/variables';

interface IProps {
  children?: ReactElement[];
  width?: number;
  gap?: number;
}

const CardSlider = ({ width = 272, gap = 24, children = [] }: IProps) => {
  const [current, setCurrent] = useState(0);
  const [touchX, setTouchX] = useState(0);

  const prevSlide = () => {
    const isFirst = current === 0;
    const newIndex = isFirst ? 0 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLast = current === children.length - 1;
    const newIndex = isLast ? children.length - 1 : current + 1;
    setCurrent(newIndex);
  };

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchX(e.changedTouches[0].pageX);
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    const distanceX = touchX - e.changedTouches[0].pageX;
    if (distanceX < 0) {
      prevSlide();
    } else if (distanceX > 0) {
      nextSlide();
    }
  };

  const handleClickEvent = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const target = e.target as HTMLDivElement;
    if (current === index) return;
    if (e.nativeEvent.offsetX > target.offsetWidth / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <Center>
      <CardList
        width={width}
        gap={gap}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children.length > 0 &&
          children.map(({ props }, i) => (
            <CardItem
              width={width}
              gap={gap}
              key={i}
              current={current}
              onClick={(e: MouseEvent<HTMLDivElement>) =>
                handleClickEvent(e, i)
              }
            >
              {props.children}
            </CardItem>
          ))}
      </CardList>
      <Pagination>
        {children.map((_, i) => (
          <PaginationItem
            key={i}
            onClick={() => setCurrent(i)}
            current={current === i}
          />
        ))}
      </Pagination>
    </Center>
  );
};

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardList = styled.div<{ width: number; gap: number }>`
  display: flex;
  justify-content: start;
  width: ${({ width }) => width}px;
  gap: ${({ gap }) => gap}px;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const CardItem = styled(Card)<{
  width: number;
  gap: number;
  current: number;
}>`
  min-width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: 0.3s;
  transform: translateX(
    ${({ width, current, gap }) => current * -(width + gap)}px
  );
`;

const Pagination = styled.ul`
  height: 8px;
  margin-top: 18px;
  display: flex;
  gap: 8px;
`;

const PaginationItem = styled.li<{ current: boolean }>`
  list-style: none;
  width: 8px;
  height: 8px;
  border-radius: 60px;
  cursor: pointer;
  background-color: ${(props) =>
    props.current ? colors.primary : colors.gray};
`;
export default CardSlider;
