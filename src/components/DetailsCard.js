import { shape, string, number } from "prop-types";
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useLayout } from "../contexts/LayoutContext";
import MyVerticallyCenteredModal from "./bootstrap/MyVerticallyCenteredModal";
import "./DetailsCard.css";

export default function DetailsCard({ details }) {
  const {
    id,
    content,
    title,
    url,
    urlToImage,
  } = details;

  const {
    favourites,
    setFavourites
  } = useLayout();
  const [isInFavs, setIsInFavs] = useState();
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsInFavs(favourites.some(e => e.title === title))
  }, [])


  function addFavourites() {
    setFavourites(prevState => [...prevState, details])
    setIsInFavs(true);
  }

  function removeFromFavourites() {
    setFavourites(prevState => prevState.filter(item => item.title !== title))
    setIsInFavs(false);
  }

  return (
    <Col className="CardDetail">

      <MyVerticallyCenteredModal
        show={modalShow}
        url={url}
        onHide={() => setModalShow(false)}
      />
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
            onClick={() => setModalShow(true)}          >
            Paylaş
          </Button>
          {
            isInFavs ? (
              <Button className="button" variant="success" size="sm"
                onClick={() => removeFromFavourites()}
              >
                Favorilerden Kaldır
              </Button>
            ) : (
              <Button className="button" variant="success" size="sm"
                onClick={() => addFavourites()}
              >
                Favorilere Ekle
              </Button>

            )
          }
          <Button className="button" variant="outline-secondary" size="sm"
            onClick={() => navigate(`/details-${id}/source`, { state: { src: url, key: id } })}
          >
            Haber Kaynağına Git
          </Button>
        </div>
      </Card>
    </Col >
  )
}

DetailsCard.propTypes = {
  item: shape({
    id: number,
    content: string,
    title: string,
    url: string,
    urlToImage: string
  })
}

DetailsCard.defaultProps = {
  item: {
    id: 101,
    content: "",
    title: "",
    url: "",
    urlToImage: ""
  }
}