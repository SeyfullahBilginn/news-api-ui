import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import { usePagination } from '../contexts/LayoutContext';

export default function SearchBar() {
  const {
    keyword,
    setKeyword
  } = usePagination();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(keyword);
  }

  return (
    <Col
      style={{ marginRight: 240, marginLeft: 240 }}
      onSubmit={(event) => handleSubmit(event)}>
      <form className="d-flex">
        <div className="p-2 flex-grow-1">
          <div class="row mt-5">
            <div class="input-group">
              <input
                class="form-control border"
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
