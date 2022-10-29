import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "./CustomCard.css";

export default function CustomCard({ item }) {
  const {
    id,
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage
  } = item

  return (
    <Col>
      <Card className="Card" style={{ height: 450 }}>
        <Card.Img height={100} variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title className="cardTitle">{title}</Card.Title>
          <Card.Text className='description'>
            {content}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className="bottomTab">{publishedAt}</ListGroup.Item>
          <ListGroup.Item className="bottomTab">{author}</ListGroup.Item>
          <ListGroup.Item className="bottomTab bottomTabLast">
            <Button variant="primary" size="sm" href={`details-${id}`}>
              DETAILS
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col >
  )
}
