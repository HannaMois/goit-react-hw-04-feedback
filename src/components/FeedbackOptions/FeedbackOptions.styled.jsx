import styled from '@emotion/styled';

export const FeedbackBox = styled.div`
  display: flex;
`;

export const FeedbackBtn = styled.button`
  color: ${props => props.theme.colors.mainColor};
  font-weight: ${props => props.theme.fontWeights.b};
  font-size: ${props => props.theme.fontSizes.second};
  width: ${props => props.theme.sizes.w};
  height: ${props => props.theme.sizes.h};
  background-color: ${props => props.theme.colors.bgColor};
  outline: none;
  border: ${props => props.theme.borderWidths.m} solid transparent;
  border-radius: ${props => props.theme.radii.radius};
  transform: scale(1);
  transition: background-color 250ms easy-in-out, transform 250ms easy-in-out,
    font-size 250ms easy-in-out, color 250ms easy-in-out;

  &:not(:last-child) {
    margin-right: ${props => props.theme.space.m};
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${props => props.theme.colors.whiteColor};
    font-size: ${props => props.theme.fontSizes.hover};
  }

  &:nth-of-type(1):hover,
  &:nth-of-type(1):focus {
    background-color: ${props => props.theme.colors.buttonGood};
  }
  &:nth-of-type(2):hover,
  &:nth-of-type(2):focus {
    background-color: ${props => props.theme.colors.buttonNeutral};
  }
  &:nth-of-type(3):hover,
  &:nth-of-type(3):focus {
    background-color: ${props => props.theme.colors.buttonBad};
  }
`;
