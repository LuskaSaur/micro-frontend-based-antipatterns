import React from 'react';
import { Image } from '@chakra-ui/react';
import SearchNotFoundIcon from '../../assets/search-not-found.svg';
import {
  DescriptionSearchNotFound,
  TitleSearchNotFound,
  Container,
} from './styles';

export function SearchNotFound({ search }: { search: string }) {
  return (
    <Container>
      <Image src={SearchNotFoundIcon} width="80px" />
      <TitleSearchNotFound>No results Found</TitleSearchNotFound>
      <DescriptionSearchNotFound>
        We couldn’t find “{search}”. Try again with different words.
      </DescriptionSearchNotFound>
    </Container>
  );
}
