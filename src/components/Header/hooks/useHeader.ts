import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DrawerHeaderItemEnum } from '../../../utils/constants';
import { SCREENS } from '../../../utils/screens';
import { TDrawerHeaderItems } from './types';
import { useDisclosure } from '@chakra-ui/react';

const useHeader = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const items = useMemo(() => {
    const exploreTheCatalog: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.CATALOG,
      text: 'Explore the Catalog',
      handleClick: () => {
        navigate(SCREENS.CATALOG);
      },
    };

    const aboutTheCatalog: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.ABOUT_CATALOG,
      text: 'About the Catalog',
      handleClick: () => {
        navigate(SCREENS.CATALOG);
      },
    };

    const aboutUs: TDrawerHeaderItems = {
      key: DrawerHeaderItemEnum.ABOUT_US,
      text: 'About us',
      handleClick: () => {
        navigate(SCREENS.CATALOG);
      },
    };
    return [exploreTheCatalog, aboutTheCatalog, aboutUs];
  }, [navigate]);

  return {
    isOpen,
    items,
    onOpen,
    onClose,
    setInputFocus,
    inputFocus,
    inputRef,
  };
};

export default useHeader;
