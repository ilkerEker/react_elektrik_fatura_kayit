import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddTesisModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "tesis", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tesisad: event.target.tesisad.value,
        aboneno: event.target.aboneno.value,
        tesisatno: event.target.tesisatno.value,
        sozlesmehesapno: event.target.sozlesmehesapno.value,
        sayacno: event.target.sayacno.value,
        carpan: event.target.carpan.value,
        aboneliktipi: event.target.aboneliktipi.value,
        isletmekodu: event.target.isletmekodu.value,
        kuruluguc: event.target.kuruluguc.value,
        tesisturu: event.target.tesisturu.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }
  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Tesis Ekle
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="tesisad">
                    <Form.Label>Tesis Adı</Form.Label>
                    <Form.Control
                      type="text"
                      name="tesisadi"
                      required
                      placeholder="tesisad"
                    />
                  </Form.Group>
                  <Form.Group controlId="aboneno">
                    <Form.Label>Abone No</Form.Label>
                    <Form.Control
                      type="text"
                      name="aboneno"
                      required
                      placeholder="aboneno"
                    />
                  </Form.Group>
                  <Form.Group controlId="tesisatno">
                    <Form.Label>Tesisat No</Form.Label>
                    <Form.Control
                      type="text"
                      name="tesisatno"
                      required
                      placeholder="tesisatno"
                    />
                  </Form.Group>
                  <Form.Group controlId="sozlesmehesapno">
                    <Form.Label>Sözleşme Hesap No</Form.Label>
                    <Form.Control
                      type="text"
                      name="sozlesmehesapno"
                      required
                      placeholder="sozlesmehesapno"
                    />
                  </Form.Group>
                  <Form.Group controlId="sayacno">
                    <Form.Label>Sayaç No</Form.Label>
                    <Form.Control
                      type="text"
                      name="sayacno"
                      required
                      placeholder="sayacno"
                    />
                  </Form.Group>
                  <Form.Group controlId="carpan">
                    <Form.Label>Çarpan</Form.Label>
                    <Form.Control
                      type="text"
                      name="carpan"
                      required
                      placeholder="carpan"
                    />
                  </Form.Group>
                  <Form.Group controlId="aboneliktipi">
                    <Form.Label>aboneliktipi</Form.Label>
                    <Form.Control
                      type="text"
                      name="aboneliktipi"
                      required
                      placeholder="aboneliktipi"
                    />
                  </Form.Group>
                  <Form.Group controlId="isletmekodu">
                    <Form.Label>isletmekodu</Form.Label>
                    <Form.Control
                      type="text"
                      name="isletmekodu"
                      required
                      placeholder="isletmekodu"
                    />
                  </Form.Group>
                  <Form.Group controlId="kuruluguc">
                    <Form.Label>kuruluguc</Form.Label>
                    <Form.Control
                      type="text"
                      name="kuruluguc"
                      required
                      placeholder="kuruluguc"
                    />
                  </Form.Group>
                  <Form.Group controlId="tesisturu">
                    <Form.Label>tesisturu</Form.Label>
                    <Form.Control
                      type="text"
                      name="tesisturu"
                      required
                      placeholder="tesisturu"
                    />
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Tesis Ekle
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
