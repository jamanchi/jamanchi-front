import styled from '@emotion/styled';
import { useMemo } from 'react';
import { pageContainer } from '@/style/mixin';
import Navigation from '@/components/Navigation';
import Card from '@/components/Card';
import { colors } from '@/style/variables';
import demo from '@/assets/images/demo.png';
import Ripple from '@/components/Ripple';
import useFetchHobbies from '@/pages/hobby/hooks/useFetchHobbies';
import useIntersect from '@/pages/hobby/hooks/useIntersect';

const Hobby = () => {
  const { data, isFetching, fetchNextPage } = useFetchHobbies();

  const hobbies = useMemo(
    () => (data ? data.pages.flatMap((data) => data.contents) : []),
    [data]
  );

  const handleIntersect = (
    entry: IntersectionObserverEntry,
    observer: IntersectionObserver
  ) => {
    observer.unobserve(entry.target);
    if (!isFetching) {
      fetchNextPage();
    }
  };

  const ref = useIntersect(handleIntersect);

  return (
    <Container>
      <Navigation />
      <ContentContainer>
        <List>
          {hobbies.map((data) => (
            <CardContainer>
              <CardMedia src={demo} alt={data.name} />
              <CardContent text={data.name}>{data.name}</CardContent>
              <Ripple duration={700} color="#ffffff" />
            </CardContainer>
          ))}
          <div ref={ref}>test</div>
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
