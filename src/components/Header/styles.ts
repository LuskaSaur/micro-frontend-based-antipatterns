import { Button, Box, Flex, IconButton, Divider } from '@chakra-ui/react';
import styled from 'styled-components';

export const HeaderButton = styled(Button).attrs({
  background: 'transparent',
  _active: {
    bg: 'primary-active',
    transform: 'scale(0.98)',
  },
  borderRadius: '24px',
  textColor: 'primary',
  _hover: { bg: 'primary-active' },
  textAlign: 'left',
  justifyContent: 'left',
})``;

export const HeaderContainer = styled(Flex).attrs({
  backgroundColor: 'white',
  justifyContent: 'flex-end',
  padding: '16px',
  alignItems: 'center',
  borderColor: 'border',
  borderBottomWidth: { base: '1px', lg: '0px' },
})``;

export const SearchBarContainer = styled(Box).attrs({
  width: { base: '60%', md: '25%', lg: '50%' },
  marginRight: { base: '0px', md: '48px', lg: '48px' },
})``;

export const LogoContainer = styled(Box).attrs({
  left: 5,
  position: 'absolute',
})``;

export const DrawerButton = styled(IconButton).attrs({
  size: 'lg',
  variant: 'ghost',
  colorScheme: 'primary',
  color: 'primary',
  display: { base: 'flex', md: 'flex', lg: 'none', xl: 'none' },
})``;

export const StyledDivider = styled(Divider).attrs({
  color: 'border',
  marginTop: '16px',
  marginBottom: '16px',
})``;
