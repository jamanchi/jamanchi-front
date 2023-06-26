import 독서 from '@/assets/icons/독서.png';
import 수상 from '@/assets/icons/수상.png';
import 수집 from '@/assets/icons/수집.png';
import 식물 from '@/assets/icons/식물.png';
import 여행 from '@/assets/icons/여행.png';
import 요리 from '@/assets/icons/요리.png';
import 운동 from '@/assets/icons/운동.png';
import 음악 from '@/assets/icons/음악.png';
import 창작 from '@/assets/icons/창작.png';

export const MAIN_CATEGORY_TITLE = Object.freeze({
  FIRST: '관심있는 카테고리를',
  SECOND: '선택해 주세요',
});

export const SUB_CATEGORY_STEP_1 = Object.freeze({
  title: '어디를 더 선호하시나요?',
  option: Object.freeze({
    inside: '실내',
    outside: '야외',
  }),
});

export const SUB_CATEGORY_STEP_2 = Object.freeze({
  title: '활동 난이도를 선택해 주세요',
  option: Object.freeze({
    easy: '쉬운',
    normal: '보통',
    hard: '어려운',
  }),
});

export const SUB_CATEGORY_STEP_3 = Object.freeze({
  title: '예산적인 제약이 있으신가요?',
  option: Object.freeze({
    expensive: '높은 예산',
    middle: '중간 예산',
    cheap: '저렴한 예산',
  }),
});

export const SUB_CATEGORY_RESULT = '취미 추천 보기';

export const HOBBYOPTIONS_CHOICE = '원하시는 취미를 선택하세요';

export const LODING = '로딩중 입니다.';

export const KEYWORDS = Object.freeze([
  {
    keyword: '간단 설명',
    id: 1,
  },
  {
    keyword: '필수 물품',
    id: 2,
  },
  {
    keyword: '비슷한 취미',
    id: 3,
  },
  {
    keyword: '액세서리 및 부속품',
    id: 4,
  },
  {
    keyword: '서적과 자료',
    id: 5,
  },
  {
    keyword: '특정 브랜드와 제품',
    id: 6,
  },
  {
    keyword: '기술과 기법',
    id: 7,
  },
  {
    keyword: '유명 선수',
    id: 8,
  },
]);

export const MAIN_CATEGORY_DATA = [
  {
    id: 1,
    name: '스포츠',
    iconSrc: 운동,
  },
  {
    id: 2,
    name: '창작',
    iconSrc: 창작,
  },
  {
    id: 3,
    name: '요리',
    iconSrc: 요리,
  },
  {
    id: 4,
    name: '음악',
    iconSrc: 음악,
  },
  {
    id: 5,
    name: '수집',
    iconSrc: 수집,
  },
  {
    id: 6,
    name: '독서',
    iconSrc: 독서,
  },
  {
    id: 7,
    name: '여행',
    iconSrc: 여행,
  },
  {
    id: 8,
    name: '식물 관리',
    iconSrc: 식물,
  },
  {
    id: 9,
    name: '수상 활동',
    iconSrc: 수상,
  },
];
