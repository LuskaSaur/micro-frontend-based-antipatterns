import { Card, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled(Card).attrs({
  borderRadius: {
    base: '0px',
    md: '24px',
    lg: '24px',
  },
  background: 'white',
  minWidth: '100%',
  alignItems: 'center',
  justifyItems: 'center',
  paddingTop: '32px',
  paddingBottom: '32px',
})``;

export const TitleSearchNotFound = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '20px',
  margin: '24px 32px 0px 32px',
})``;

export const DescriptionSearchNotFound = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  margin: '12px 0px 0px 32px',
  color: 'paragraph-text',
})``;
