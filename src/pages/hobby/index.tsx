import styled from '@emotion/styled';
import { useEffect, useMemo, useRef } from 'react';
import { pageContainer } from '@/style/mixin';
import Navigation from '@/components/Navigation';
import Card from '@/components/Card';
import { colors } from '@/style/variables';
import demo from '@/assets/images/demo.png';
import Ripple from '@/components/Ripple';

const mokupData = [
  { name: '공', description: ['#test', '#test', '#test'] },
  { name: '야구', description: ['#test', '#test', '#test'] },
  { name: '스위스', description: ['#test', '#test', '#test'] },
  { name: '배드민턴', description: ['#test', '#test', '#test'] },
  { name: '스노우 보드', description: ['#test', '#test', '#test'] },
  { name: '스케이트 보드', description: ['#test', '#test', '#test'] },
  { name: '인라인 스케이트', description: ['#test', '#test', '#test'] },
  { name: '명가 찰떡파이 키위', description: ['#test', '#test', '#test'] },
];

const Hobby = () => {
  const target = useRef<HTMLDivElement | null>(null);

  const handleIntersection = () => {
    if (target.current !== null) {
      console.log('test');
    }
  };

  const observer = useMemo(
    () => new IntersectionObserver(handleIntersection),
    []
  );

  useEffect(() => {
    if (target.current !== null) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return (
    <Container>
      <Navigation />
      <ContentContainer>
        <List>
          {mokupData.map((data) => (
            <CardContainer>
              <CardMedia src={demo} alt={data.name} />
              <CardContent text={data.name}>{data.name}</CardContent>
              <Ripple duration={700} color="#ffffff" />
            </CardContainer>
          ))}
          <div ref={target}>test</div>
        </List>
      </ContentContainer>
    </Container>
  );
};

const PADDING = 20;
const GAP = 20;
const SPAN = 2;

const Container = styled.div`
  ${pageContainer};
`;

const ContentContainer = styled.div`
  ${pageContainer};
  padding: ${PADDING}px;
  gap: ${GAP}px;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${GAP}px;
`;

const CardContainer = styled(Card)`
  position: relative;
  overflow: hidden;
  width: ${(400 - PADDING * SPAN - GAP) / 2}px;
  height: ${(400 - PADDING * SPAN - GAP) / 2}px;
  border: 1px ${colors.gray};
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
`;

const CardMedia = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  filter: brightness(80%);
`;

const CardContent = styled.div<{ text: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${colors.white};
  font-size: ${(props) => (props.text.length % 3 === 1 ? 20 : 25)}px;
  font-weight: 900;
  text-align: center;
`;

export default Hobby;
