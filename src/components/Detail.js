import React from 'react'
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import DetailsCard from './DetailsCard';

export default function Detail() {
  const { state } = useLocation();
  const { item } = state;

  return <DetailsCard item={item} />
}
