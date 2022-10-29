import { Button, Modal } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  const { url, onHide } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SHARE SOURCE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Button
          onClick={() => { navigator.clipboard.writeText(url) }}
        >
          copy link
        </Button>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
