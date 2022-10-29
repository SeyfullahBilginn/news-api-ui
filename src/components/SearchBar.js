import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { useLayout } from '../contexts/LayoutContext';

export default function SearchBar() {
  const {
    keyword,
    setKeyword,
    fetchNews
  } = useLayout();

  function handleSubmit(event) {
    event.preventDefault();
    fetchNews();
  }

  return (
    <Col
      style={{ marginRight: 240, marginLeft: 240 }}
      onSubmit={(event) => handleSubmit(event)}>
      <form className="d-flex">
        <div className="p-2 flex-grow-1">
          <div className="row mt-5">
            <div className="input-group">
              <input
                className="form-control border"
                type="search"
                value={keyword}
                id="example-search-input"
                onChange={(text) => setKeyword(text.target.value)}
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Col>
  )
}
