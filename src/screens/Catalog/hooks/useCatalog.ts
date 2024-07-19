import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { FilterItemsEnum } from '../../../utils/constants';
import { TFilterItems } from '../../../components/FilterList/types';
import antiPatternsFiles from '../../../antipatterns';

import { TAntiPatternsItem } from '../../../components/AntiPatternsList/types';

import { useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../utils/screens';
import { WrapperContext } from '../../../components/Wrapper/Wrapper';
import { ACTIONS } from '../../../reducer/searchReducer';

const HIGHLIGH_INTERVAL = 100;
const data = antiPatternsFiles as TAntiPatternsItem[];
const useCatalog = () => {
  const { query, search, typing, dispatch, debouncedQuery } =
    useContext(WrapperContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (query === '') dispatch({ type: ACTIONS.CLEAR_FORM });
    else
      debouncedQuery === query && dispatch({ type: ACTIONS.USER_STOP_TYPING });
  }, [debouncedQuery, dispatch, query]);

  const [selectedFilter, setSelectedFilter] = useState(FilterItemsEnum.ALL);
  const [filteredData, setFilteredData] = useState<TAntiPatternsItem[]>([]);

  const searchData = useCallback(() => {
    if (!search) {
      setFilteredData(data);
      return;
    }
    setSelectedFilter(FilterItemsEnum.ALL);
    setFilteredData(
      data.filter((item) => {
        if (item.example.text.toLowerCase().includes(search.toLowerCase())) {
          const indexString = item.example.text
            .toLowerCase()
            .indexOf(search.toLowerCase());
          item.highlight = `...${item.example.text.substring(
            indexString - HIGHLIGH_INTERVAL,
            indexString + HIGHLIGH_INTERVAL
          )}...`;
          return true;
        }
        if (item.problem.text.toLowerCase().includes(search.toLowerCase())) {
          const indexString = item.problem.text
            .toLowerCase()
            .indexOf(search.toLowerCase());
          item.highlight = `...${item.problem.text.substring(
            indexString - HIGHLIGH_INTERVAL,
            indexString + HIGHLIGH_INTERVAL
          )}...`;
          return true;
        }
        if (item.solution.text.toLowerCase().includes(search.toLowerCase())) {
          const indexString = item.solution.text
            .toLowerCase()
            .indexOf(search.toLowerCase());
          item.highlight = `...${item.solution.text.substring(
            indexString - HIGHLIGH_INTERVAL,
            indexString + HIGHLIGH_INTERVAL
          )}...`;
          return true;
        }
        if (item.name.toLowerCase().includes(search.toLowerCase())) return true;
      })
    );
  }, [data, search]);

  useEffect(() => {
    if (!typing) searchData();
  }, [typing, searchData, search]);

  const filtersItemsCount = useCallback(
    (filterType: string) => {
      return data.reduce(
        (count, arrayEle) =>
          arrayEle.category === filterType ? count + 1 : count,
        0
      );
    },
    [data]
  );

  const filterData = useCallback(
    (filterType: string) => {
      if (filterType === FilterItemsEnum.ALL) return setFilteredData(data);
      setFilteredData(data.filter((item) => item.category === filterType));
    },
    [data]
  );

  const filters = useMemo(() => {
    const all: TFilterItems = {
      key: FilterItemsEnum.ALL,
      text: 'All Anti-patterns',
      count: data.length,
      handleClick: () => {
        setSelectedFilter(FilterItemsEnum.ALL);
        filterData(FilterItemsEnum.ALL);
      },
    };

    const interFrontend: TFilterItems = {
      key: FilterItemsEnum.INTER_FRONTEND,
      text: 'Inter-frontend',
      count: filtersItemsCount(FilterItemsEnum.INTER_FRONTEND),
      handleClick: () => {
        setSelectedFilter(FilterItemsEnum.INTER_FRONTEND);
        filterData(FilterItemsEnum.INTER_FRONTEND);
      },
    };

    const intraFrontend: TFilterItems = {
      key: FilterItemsEnum.INTRA_FRONTEND,
      text: 'Intra-frontend',
      count: filtersItemsCount(FilterItemsEnum.INTRA_FRONTEND),
      handleClick: () => {
        setSelectedFilter(FilterItemsEnum.INTRA_FRONTEND);
        filterData(FilterItemsEnum.INTRA_FRONTEND);
      },
    };

    const operation: TFilterItems = {
      key: FilterItemsEnum.OPERATION,
      text: 'Operation',
      count: filtersItemsCount(FilterItemsEnum.OPERATION),
      handleClick: () => {
        setSelectedFilter(FilterItemsEnum.OPERATION);
        filterData(FilterItemsEnum.OPERATION);
      },
    };

    const development: TFilterItems = {
      key: FilterItemsEnum.DEVELOPMENT,
      text: 'Development',
      count: filtersItemsCount(FilterItemsEnum.DEVELOPMENT),
      handleClick: () => {
        setSelectedFilter(FilterItemsEnum.DEVELOPMENT);
        filterData(FilterItemsEnum.DEVELOPMENT);
      },
    };
    return [all, interFrontend, intraFrontend, operation, development];
  }, [filtersItemsCount, data]);

  const handleClickItem = useCallback((data: TAntiPatternsItem) => {
    navigate(SCREENS.DETAILS, { state: { data } });
  }, []);

  return {
    filters,
    selectedFilter,
    antiPartnersItems: filteredData,
    search,
    typing,
    handleClickItem,
  };
};

export default useCatalog;
