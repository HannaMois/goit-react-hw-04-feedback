import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.mainColor};
  margin-bottom: ${props => props.theme.space.m};
  margin-top: ${props => props.theme.space.m};
  font-weight: ${props => props.theme.fontWeights.b};
  font-size: ${props => props.theme.fontSizes.main};
  line-height: ${props => props.theme.lineHeights.title};
`;
