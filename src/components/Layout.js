import React, { useEffect, useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { usePagination } from '../contexts/LayoutContext'
import Header from './Header'

export default function Layout({ children }) {
  const { setActivePage } = usePagination();

  useEffect(() => {
    console.log("LAYOUT");
  }, [])
  

  return (
    <>
      <Outlet />
    </>
  )
}
