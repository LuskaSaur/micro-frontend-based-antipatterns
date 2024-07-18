import React from 'react';
import Header from '../../components/Header';
import { DrawerHeaderItemEnum } from '../../utils/constants';
import { Box, Flex } from '@chakra-ui/react';
import useHome from './hooks/useCatalog';
import FilterList from '../../components/FilterList';
import AntiPartnersList from '../../components/AntiPatternsList';
import SearchNotFound from '../../components/SearchNotFound';
import AntiPatternDetails from '../../components/AntiPatternDetails';
import {
  CatalogTItleText,
  FooterText,
  ListContainer,
  SearchDescription,
  SearchTitle,
  SpinnerSearch,
  WitheCard,
} from './styles';

function Catalog() {
  const {
    filters,
    selectedFilter,
    antiPartnersItems,
    setQuery,
    search,
    typing,
    setDetailedAntiPattern,
    detailedAntiPattern,
  } = useHome();

  return (
    <Flex flexDirection="column">
      <Header selectedItem={DrawerHeaderItemEnum.CATALOG} setQuery={setQuery} />
      <ListContainer>
        {search && !antiPartnersItems.length ? (
          <SearchNotFound search={search} />
        ) : (
          <>
            {detailedAntiPattern ? (
              <AntiPatternDetails
                antiPatternsData={detailedAntiPattern}
                setDetailedAntiPattern={setDetailedAntiPattern}
              />
            ) : (
              <WitheCard>
                {search || typing ? (
                  <>
                    <SearchTitle>Search Results</SearchTitle>
                    <SearchDescription>
                      Results for "{search}"
                    </SearchDescription>
                  </>
                ) : (
                  <CatalogTItleText>
                    Micro frontends Anti-patterns Catalog
                  </CatalogTItleText>
                )}
                {!search && !typing && (
                  <FilterList filters={filters} selectedItem={selectedFilter} />
                )}
                {antiPartnersItems && !typing && (
                  <AntiPartnersList
                    antiPatterns={antiPartnersItems}
                    setDetailedAntiPattern={setDetailedAntiPattern}
                    search={search}
                  />
                )}
                {typing && <SpinnerSearch />}
              </WitheCard>
            )}
          </>
        )}
      </ListContainer>
      <Box alignSelf="center">
        <FooterText>
          Research conducted at UFAM by the USES Group | © 2024
        </FooterText>
      </Box>
    </Flex>
  );
}

export default Catalog;
