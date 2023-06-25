import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { colors } from '../../style/variables/color/index';
import Navigation from '@/components/Navigation';
import {
  SUB_CATEGORY_STEP_1,
  SUB_CATEGORY_STEP_2,
  SUB_CATEGORY_STEP_3,
  SUB_CATEGORY_RESULT,
} from './constants';

const SubCategory = () => {
  const [selectedStep1Option, setSelectedStep1Option] = useState(0);
  const [selectedStep2Option, setSelectedStep2Option] = useState(0);
  const [selectedStep3Option, setSelectedStep3Option] = useState(0);

  const handleOptionClick = (option: number, index: number) => {
    if (index === 1) setSelectedStep1Option(option);
    if (index === 2) setSelectedStep2Option(option);
    if (index === 3) setSelectedStep3Option(option);
  };

  const location = useLocation();
  const mainCategoryId = location.state.id;
  const navigate = useNavigate();
  const previousBtn = () => navigate('/question');
  const getResult = async () => {
    const id = `${mainCategoryId}${selectedStep1Option}${selectedStep2Option}${selectedStep3Option}`;
    const response = await fetch(`/api/v1/questionResult/${id}`);
    const data = await response.json();
  };

  return (
    <>
      <Navigation leftOnClick={previousBtn} />
      <Wrapper>
        <Step>
          <StepTitle>{SUB_CATEGORY_STEP_1.title}</StepTitle>
          <Option>
            <OptionBox
              onClick={() => handleOptionClick(1, 1)}
              selected={selectedStep1Option === 1}
            >
              {SUB_CATEGORY_STEP_1.option.inside}
            </OptionBox>
            <OptionBox
              onClick={() => handleOptionClick(2, 1)}
              selected={selectedStep1Option === 2}
            >
              {SUB_CATEGORY_STEP_1.option.outside}
            </OptionBox>
          </Option>
        </Step>
        <Step>
          <StepTitle>{SUB_CATEGORY_STEP_2.title}</StepTitle>
          <Option>
            <OptionBox
              onClick={() => handleOptionClick(1, 2)}
              selected={selectedStep2Option === 1}
            >
              {SUB_CATEGORY_STEP_2.option.easy}
            </OptionBox>
            <OptionBox
              onClick={() => handleOptionClick(2, 2)}
              selected={selectedStep2Option === 2}
            >
              {SUB_CATEGORY_STEP_2.option.normal}
            </OptionBox>
            <OptionBox
              onClick={() => handleOptionClick(3, 2)}
              selected={selectedStep2Option === 3}
            >
              {SUB_CATEGORY_STEP_2.option.hard}
            </OptionBox>
          </Option>
        </Step>
        <Step>
          <StepTitle>{SUB_CATEGORY_STEP_3.title}</StepTitle>
          <Option>
            <OptionBox
              onClick={() => handleOptionClick(1, 3)}
              selected={selectedStep3Option === 1}
            >
              {SUB_CATEGORY_STEP_3.option.expensive}
            </OptionBox>
            <OptionBox
              onClick={() => handleOptionClick(2, 3)}
              selected={selectedStep3Option === 2}
            >
              {SUB_CATEGORY_STEP_3.option.middle}
            </OptionBox>
            <OptionBox
              onClick={() => handleOptionClick(3, 3)}
              selected={selectedStep3Option === 3}
            >
              {SUB_CATEGORY_STEP_3.option.cheap}
            </OptionBox>
          </Option>
        </Step>
        <ResultBtn onClick={getResult}>
          <span>{SUB_CATEGORY_RESULT}</span>
        </ResultBtn>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-top: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
`;

const Step = styled.div`
  margin-bottom: 90px;
  width: 100%;
`;
const StepTitle = styled.span`
  font-size: 30px;
`;

const Option = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const OptionBox = styled.div<{ selected: boolean }>`
  font-weight: 500;
  margin-top: 25px;
  font-size: 18px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ selected }) => (selected ? `${colors.secondary}` : 'blick')};
  background-color: ${({ selected }) =>
    selected ? `${colors.primary}` : 'white'};
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.secondary};
  }
`;

const ResultBtn = styled.div`
  position: relative;
  bottom: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  border-radius: 20px;
  background-color: ${colors.primary};
  color: white;
  font-weight: 600;

  &:hover {
    background-color: ${colors.secondary};
    color: black;
  }
`;

export default SubCategory;
