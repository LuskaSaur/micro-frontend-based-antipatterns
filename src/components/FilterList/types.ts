import { FilterItemsEnum } from '../../utils/constants';

export type TFilterItems = {
  key: FilterItemsEnum;
  count: number;
  text: string;
  handleClick(): void;
};
