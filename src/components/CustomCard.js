import { shape, string, number } from "prop-types";
import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useLayout } from "../contexts/LayoutContext";
import "./CustomCard.css";

export default function CustomCard({ item, isInFavs }) {
  const {
    id,
    author,
    content,
    publishedAt,
    title,
    urlToImage
  } = item
  const navigate = useNavigate();

  const { setFavourites } = useLayout();

  function removeFromFavourites() {
    setFavourites(prevState => prevState.filter(item => item.title !== title))
  }

  return (
    <Col>
      <Card className="Card center" style={{ height: 450 }}>
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
            <Button variant="primary" size="sm"
              onClick={() => navigate(`/details-${id}`, { state: { item: item } })}
            >
              Ayrıntılar
            </Button>
            {
              isInFavs &&
              <Button variant="primary" size="sm"
                onClick={() => removeFromFavourites()}
              >
                Favorilerden Çıkar
              </Button>
            }
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col >
  )
}

CustomCard.propTypes = {
  item: shape({
    id: number,
    author: string,
    content: string,
    publishedAt: string,
    title: string,
    urlToImage: string
  })
}

CustomCard.defaultProps = {
  item: {
    id: 101,
    author: "",
    content: "",
    publishedAt: "",
    urlToImage: ""
  }
}
