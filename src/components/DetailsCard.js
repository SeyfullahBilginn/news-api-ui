import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import "./DetailsCard.css";

export default function DetailsCard({ item }) {
  const {
    id,
    content,
    title,
    url,
    urlToImage
  } = item
  const navigate = useNavigate();

  return (
    <Col className="CardDetail">
      <Card className="card">
        <div className="inner">
          <Card.Img className="cardImage" height={300} variant="top" src={urlToImage} />
        </div>
        <Card.Body>
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className='description'>
            {content}
          </Card.Text>
        </Card.Body>
        <div className='buttons'>
          <Button className="button" variant="primary" size="sm"
            onClick={() => navigate(`/details-${id}`, { state: { item: item } })}
          >
            Paylaş
          </Button>
          <Button className="button" variant="primary" size="sm"
            onClick={() => navigate(`/details-${id}`, { state: { item: item } })}
          >
            Favorilere Ekle
          </Button>
          <Button className="button" variant="secondary" size="sm"
            onClick={() => navigate(`/details-${id}/source`, { state: { src: url, key:id } })}
          >
            Haber Kaynağına Git
          </Button>
        </div>
      </Card>
    </Col >
  )
}
