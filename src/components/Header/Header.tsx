import React from 'react';
import HeaderLogo from '../../assets/header-logo.svg';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, HamburgerIcon } from '@chakra-ui/icons';
import {
  DrawerButton,
  HeaderButton,
  HeaderContainer,
  LogoContainer,
  SearchBarContainer,
  StyledDivider,
} from './styles';
import useHeader from './hooks/useHeader';
import { TDrawerHeaderItems } from './hooks/types';
import { DrawerHeaderItemEnum } from '../../utils/constants';
import {
  ACTIONS,
  ActionTypes,
} from '../../screens/Catalog/reducer/searchReducer';

function RenderItems({
  isColumn = false,
  items,
  selectedItem,
}: {
  isColumn?: boolean;
  items: TDrawerHeaderItems[];
  selectedItem: DrawerHeaderItemEnum;
}) {
  return (
    <>
      {items.map((item) => (
        <HeaderButton
          key={item.key}
          marginTop={isColumn ? '16px' : '0px'}
          isActive={item.key === selectedItem}
        >
          {item.text}
        </HeaderButton>
      ))}
    </>
  );
}

export function Header({
  selectedItem,
  setQuery,
}: {
  selectedItem: DrawerHeaderItemEnum;
  setQuery: React.Dispatch<ActionTypes>;
}) {
  const {
    isOpen,
    items,
    onOpen,
    onClose,
    setInputFocus,
    inputFocus,
    inputRef,
  } = useHeader();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setQuery({
        type: ACTIONS.USER_TYPING,
        payload: inputRef?.current?.value || '',
      });
      setQuery({
        type: ACTIONS.USER_STOP_TYPING,
      });
    }
  };

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Image
            src={HeaderLogo}
            width={{
              base: '80px',
              md: '146px',
              lg: '146px',
            }}
          />
        </LogoContainer>

        <SearchBarContainer>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={'text'}
              placeholder="Search anti-patterns, text or categories"
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              onChange={(event) => {
                setQuery({
                  type: ACTIONS.USER_TYPING,
                  payload: event.target.value,
                });
              }}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
            <InputRightElement>
              <Search2Icon color={inputFocus ? 'primary' : 'paragraph-text'} />
            </InputRightElement>
          </InputGroup>
        </SearchBarContainer>

        <Flex justifySelf={'flex-end'}>
          <DrawerButton
            aria-label="Open Menu"
            onClick={onOpen}
            icon={<HamburgerIcon h="32px" w="32px" />}
          />
        </Flex>

        <Box display={{ base: 'none', lg: 'block', xl: 'block' }}>
          <RenderItems items={items} selectedItem={selectedItem} />
        </Box>
      </HeaderContainer>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex flexDirection="column" marginTop={'64px'}>
              <Box alignSelf={'center'}>
                <Image src={HeaderLogo} width="146px" />
              </Box>
              <StyledDivider />
              <RenderItems isColumn items={items} selectedItem={selectedItem} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
