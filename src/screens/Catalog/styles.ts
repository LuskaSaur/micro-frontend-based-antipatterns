import { Button, Card, Flex, Spinner, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const FilterButton = styled(Button).attrs({
  background: 'transparent',
  _active: {
    bg: 'primary-active',
    transform: 'scale(0.98)',
  },
  border: '1px',
  borderRadius: '24px',
  _hover: { bg: 'primary-active' },
  textAlign: 'left',
  justifyContent: 'left',
})``;

export const ListContainer = styled(Flex).attrs({
  alignSelf: 'center',
  justifySelf: 'center',
  flexDirection: 'column',
  display: 'flex',
  width: {
    base: '100%',
    md: '90%',
    lg: '70%',
  },
  marginTop: {
    base: '0px',
    md: '40px',
    lg: '40px',
  },
  marginBottom: '40px',
})``;

export const WitheCard = styled(Card).attrs({
  borderRadius: {
    base: '0px',
    md: '24px',
    lg: '24px',
  },
  background: 'white',
  minWidth: '100%',
})``;

export const SpinnerSearch = styled(Spinner).attrs({
  color: 'primary',
  size: 'lg',
  thickness: '4px',
  alignSelf: 'center',
  justifySelf: 'center',
  marginBottom: '24px',
})``;

export const FooterText = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  margin: '0px 24px 24px 24px',
  color: 'paragraph-text',
})``;

export const CatalogTItleText = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '32px',
  padding: '24px 32px',
})``;

export const SearchTitle = styled(Text).attrs({
  fontWeight: 700,
  fontSize: '32px',
  padding: '24px 32px 0px 32px',
})``;

export const SearchDescription = styled(Text).attrs({
  fontWeight: 400,
  fontSize: '16px',
  padding: '12px 0px 24px 32px',
  color: 'paragraph-text',
})``;
