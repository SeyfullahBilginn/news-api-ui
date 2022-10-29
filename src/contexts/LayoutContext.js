import { node } from 'prop-types';
import React, { useContext, useLayoutEffect, useState } from 'react';
import NewsService from '../services/NewsService';


const LayoutContext = React.createContext();

export function useLayout() {
  return useContext(LayoutContext);
}
export function PaginationProvider({ children }) {
  const [activePage, setActivePage] = useState(1);
  const [numOfPage, setNumOfPage] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [modifiedPages, setModifiedPages] = useState([]);
  const [keyword, setKeyword] = useState("a");
  const [cards, setCards] = useState(
    {
      data: [],
      isLoading: false,
      error: {
        isError:true,
        code: "",
        errorMessage: ""
      }
    }
  );
  const [favourites, setFavourites] = useState([]);


  useLayoutEffect(() => {
    const params = (new URL(window.location).searchParams);
    if (params.get("keyword")) {
      setKeyword(params.get("keyword").toString());
    }
    if (params.get("page")) {
      setActivePage(Number(params.get("page")));
    }
  }, [])

  function designPagination(numOfPage) {
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
    setCards({ ...cards, isLoading: true });
    NewsService.getAllNews(keyword, activePage).then(
      res => res.json()
        .then(
          result => {
            setCards({ data: result, isError: false, isLoading: false });
            setCards(result);
            setTotalCount(result.totalResults);
            setNumOfPage(Math.ceil(result.totalResults / 100));
            designPagination(Math.ceil(result.totalResults / 100))
          }
        ).catch(error => setCards(
          {
            ...cards,
            isLoading: false,
            error: {
              isError: true,
              errorMessage: error
            }
          }
        ))
    ).catch(error => console.log(error))
  }

  const value = {
    activePage,
    setActivePage,
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
    fetchNews,
    setFavourites,
    favourites
  };

  return (
    <LayoutContext.Provider
      value={value}
    >
      {children}
    </LayoutContext.Provider>
  );
}

PaginationProvider.propTypes = {
  children: node
};

PaginationProvider.defaultProps = {
  children: null
};
