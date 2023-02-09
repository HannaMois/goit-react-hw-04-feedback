import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  margin-top: ${props => props.theme.space.xs};
  background-color: ${props => props.theme.colors.whiteColor};
  border: ${props => props.theme.borderWidths.m} solid
    ${props => props.theme.colors.buttonGood};
  padding: ${props => props.theme.space.m};
  border-radius: ${props => props.theme.radii.radius};
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.second};
  font-weight: ${props => props.theme.fontWeights.b};
  text-transform: capitalize;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space.m};
  }

  &:nth-of-type(1) {
    color: ${props => props.theme.colors.buttonGood};
  }
  &:nth-of-type(2) {
    color: ${props => props.theme.colors.buttonNeutral};
  }
  &:nth-of-type(3) {
    color: ${props => props.theme.colors.buttonBad};
  }
  &:nth-of-type(4) {
    color: ${props => props.theme.colors.redColor};
  }
  &:nth-of-type(5) {
    color: ${props => props.theme.colors.mainColor};
  }
`;
