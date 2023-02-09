import styled from '@emotion/styled';

export const NotificationText = styled.p`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.main};
  color: ${props => props.theme.colors.bgColor};
`;
