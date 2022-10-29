import React from 'react'
import { useLocation } from 'react-router-dom';
import DetailsCard from './DetailsCard';

export default function Detail() {
  const { state } = useLocation();
  const { item } = state;
  return <DetailsCard details={item} />
}
