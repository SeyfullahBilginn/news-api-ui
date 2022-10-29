import { node } from 'prop-types';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsService from '../services/NewsService';


const PaginationContext = React.createContext();

export function usePagination() {
  return useContext(PaginationContext);
}
export function PaginationProvider({ children }) {
  const [activePage, setActivePage] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [numOfPage, setNumOfPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [modifiedPages, setModifiedPages] = useState([]);
  const [keyword, setKeyword] = useState("a");
  const [cards, setCards] = useState([]);

  useLayoutEffect(() => {
    const params = (new URL(window.location).searchParams);
    if (params.get("page")) {
      setActivePage(Number(params.get("page")));
    }
  }, [])

  function designPagination(numOfPage) {
    console.log(numOfPage);
    var designedPagination = [];
    if (numOfPage > 7) {
      if ((activePage - 1 > 3) && numOfPage - activePage > 3) {
        // middle
        designedPagination = [1, '...', activePage - 1, activePage, activePage + 1, '...', numOfPage];
      } else if (activePage - 1 <= 3) {
        // aligned left
        designedPagination = [1, 2, 3, 4, 5, '...', numOfPage];
      } else {
        // aligned right
        designedPagination = [1, '...', numOfPage - 4, numOfPage - 3, numOfPage - 2, numOfPage - 1, numOfPage];
      }
    } else {
      designedPagination = Array.from({ length: numOfPage }, (_, i) => i + 1);
    }
    setModifiedPages(designedPagination);
  }

  function fetchNews() {
    console.log("activePage: " + activePage);
    // NewsService.getAllNews("besiktas", activePage).then(
    NewsService.getAllNews(keyword, activePage).then(
      res => res.json()
        .then(
          result => {
            console.log(result);
            setCards(result);
            setTotalCount(result.totalResults);
            // console.log(result.totalResults);
            // console.log(Math.ceil(result.totalResults / 100));
            setNumOfPage(Math.ceil(result.totalResults / 100));
            designPagination(Math.ceil(result.totalResults / 100))
          }
        )
    )
  }


  const value = {
    activePage,
    setActivePage,
    isInitialRender,
    numOfPage,
    setNumOfPage,
    totalCount,
    setTotalCount,
    modifiedPages,
    setModifiedPages,
    designPagination,
    keyword,
    setKeyword,
    cards,
    fetchNews
  };

  return (
    <PaginationContext.Provider
      value={value}
    >
      {children}
    </PaginationContext.Provider>
  );
}

PaginationProvider.propTypes = {
  children: node
};

PaginationProvider.defaultProps = {
  children: null
};