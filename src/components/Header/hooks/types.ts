import { DrawerHeaderItemEnum } from '../../../utils/constants';

export type TDrawerHeaderItems = {
  key: DrawerHeaderItemEnum;
  text: string;
  handleClick(): void;
};
