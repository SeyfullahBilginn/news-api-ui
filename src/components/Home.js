import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap';
import { useLayout } from '../contexts/LayoutContext';
import CustomCard from './CustomCard';
import SearchBar from './SearchBar';
import "./Home.css";

const PAGE_LIMIT = 100;

export default function Home() {
  const {
    activePage,
    setActivePage,
    numOfPage,
    totalCount,
    modifiedPages,
    fetchNews,
    cards,
  } = useLayout();

  useEffect(() => {
  }, [activePage])
  fetchNews();

  function RenderPagination() {
    return (
      <div className="pagination">
        <div>Total Locations: {totalCount}</div>
        <div>{(parseInt(activePage) - 1) * parseInt(PAGE_LIMIT) + 1}/{activePage * PAGE_LIMIT}</div>
        <div className="pages">
          <div
            className='page-button'
            style={{ backgroundColor: activePage !== 1 ? "white" : "RGB(10,10,10,0.2)" }}
            onClick={() => {
              if (activePage !== 1) {
                setActivePage(activePage - 1);
              }
            }}
          >
            {'<'}
          </div>
          {modifiedPages.map((page, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActivePage(page);
                }}
                className="page-button"
                style={{ backgroundColor: page === activePage ? "RGB(202,242,242)" : "white" }}
              >
                {page}
              </div>
            )
          })}
          <div
            className='page-button'
            style={{ backgroundColor: activePage !== numOfPage ? "white" : "RGB(100,100,100,0.1)" }}
            onClick={() => {
              if (activePage !== numOfPage) {
                setActivePage(activePage + 1);
              }
            }}
          >
            {'>'}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Row className="Home">
      <SearchBar />
      <div className="g-4 row">
        {
          cards?.articles?.map((item, index) => <CustomCard
            item={{ ...item, id: index }}
            // I would not normally send index as id. 
            // It doesn't retrieved from request(api)
            key={index}
          />
          )
        }
      </div>
      <RenderPagination />
    </Row>
  )
}
