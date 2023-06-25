import { useState, useCallback, TouchEventHandler, MouseEvent } from 'react';
import styled from '@emotion/styled';
import { IResult } from '@/pages/result';
import Card from '@/components/Card';
import { colors } from '@/style/variables';
import { WIDTH } from './constant';

interface IProps {
  resultData: IResult;
}

const ResultCard = ({ resultData }: IProps) => {
  const { result } = resultData;
  const [current, setCurrent] = useState(0);
  const [touchX, setTouchX] = useState(0);

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

  const prevSlide = useCallback(() => {
    const isFirst = current === 0;
    const newIndex = isFirst ? 0 : current - 1;
    setCurrent(newIndex);
  }, [current]);

  const nextSlide = useCallback(() => {
    const isLast = current === result.length - 1;
    const newIndex = isLast ? result.length - 1 : current + 1;
    setCurrent(newIndex);
  }, [current, result.length]);

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
      <CardList onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {result.length > 0 &&
          result.map((data, i) => (
            <CardItem
              key={i}
              current={current}
              onClick={(e: MouseEvent<HTMLDivElement>) =>
                handleClickEvent(e, i)
              }
            >
              <Title>{data.keyword}</Title>
              {data.description}
            </CardItem>
          ))}
      </CardList>
      <Pagination>
        {result.map((_, i) => (
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
  overflow: hidden;
`;

const Title = styled.h3`
  color: ${colors.primary};
  font-weight: bold;
  margin-bottom: 24px;
`;

const CardList = styled.div`
  display: flex;
  justify-content: start;
  width: ${WIDTH}px;
  height: 150px;
  gap: 24px;
  margin: 0;
  padding: 0;
`;

const CardItem = styled(Card)<{
  current: number;
}>`
  min-width: ${WIDTH}px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: 0.3s;
  transform: translateX(${(props) => props.current * -(WIDTH + 24)}px);
`;

const Pagination = styled.ul`
  margin-top: 28px;
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
export default ResultCard;
