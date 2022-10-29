import React from 'react'
import { Row } from 'react-bootstrap';
import { useLayout } from '../contexts/LayoutContext'
import CustomCard from './CustomCard';
import "./Favourites.css";

export default function Favourites() {
  const { favourites } = useLayout();
  return (
    <Row className="Favourites">
      {
        favourites.map(item =>
          <CustomCard item={item} key={item.title} isInFavs={true}/>
        )
      }
    </Row>
  )
}
