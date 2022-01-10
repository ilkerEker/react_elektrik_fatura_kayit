import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditFaturaModal extends Component {
  constructor(props) {
    super(props);
    this.state = { tesiss: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  //photofilename = "anonymous.png";
  //imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;
  componentDidMount() {
    fetch(process.env.REACT_APP_API + "tesis")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tesiss: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "fatura", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faturaid: event.target.faturaid.value,
        sonodemetarihi: event.target.sonodemetarihi.value,
        donem: event.target.donem.value,
        ilkokumatarihi: event.target.ilkokumatarihi.value,
        sonokumatarihi: event.target.sonokumatarihi.value,
        tesisid: event.target.tesisid.value,
        tekzamanlituketim: event.target.tekzamanlituketim.value,
        t1zamanlituketim: event.target.t1zamanlituketim.value,
        t2zamanlituketim: event.target.t2zamanlituketim.value,
        t3zamanlituketim: event.target.t3zamanlituketim.value,
        toplamtuketim: event.target.toplamtuketim.value,
        faturabedeli: event.target.faturabedeli.value,
        faturano: event.target.faturano.value,
        birimfiyat: event.target.birimfiyat.value,
        ilkendeks: event.target.ilkendeks.value,
        sonendeks: event.target.sonendeks.value,
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
              Faturayı Düzenle
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="faturaid">
                    <Form.Label>faturaid</Form.Label>
                    <Form.Control
                      type="text"
                      name="faturaid"
                      required
                      placeholder="faturaid"
                      disabled
                      defaultValue={this.props.faturaid}
                    />
                  </Form.Group>
                  <Form.Group controlId="faturano">
                    <Form.Label>faturano</Form.Label>
                    <Form.Control
                      type="text"
                      name="faturano"
                      required
                      defaultValue={this.props.faturano}
                      placeholder="faturano"
                    />
                  </Form.Group>
                  <Form.Group controlId="sonodemetarihi">
                    <Form.Label>sonodemetarihi</Form.Label>
                    <Form.Control
                      type="date"
                      name="sonodemetarihi"
                      required
                      placeholder="sonodemetarihi"
                      defaultValue={this.props.sonodemetarihi}
                    />
                  </Form.Group>
                  <Form.Group controlId="donem">
                    <Form.Label>donem</Form.Label>
                    <Form.Control
                      type="text"
                      name="donem"
                      required
                      defaultValue={this.props.donem}
                      placeholder="donem"
                    />
                  </Form.Group>
                  <Form.Group controlId="ilkokumatarihi">
                    <Form.Label>ilkokumtarihi</Form.Label>
                    <Form.Control
                      type="date"
                      name="ilkokumatarihi"
                      required
                      placeholder="ilkokumatarihi"
                      defaultValue={this.props.ilkokumatarihi}
                    />
                  </Form.Group>

                  <Form.Group controlId="sonokumatarihi">
                    <Form.Label>sonokumatarihi</Form.Label>
                    <Form.Control
                      type="date"
                      name="sonokumatarihi"
                      required
                      placeholder="sonokumatarihi"
                      defaultValue={this.props.sonokumatarihi}
                    />
                  </Form.Group>
                  <Form.Group controlId="ilkendeks">
                    <Form.Label>ilkendeks</Form.Label>
                    <Form.Control
                      type="text"
                      name="ilkendeks"
                      required
                      defaultValue={this.props.ilkendeks}
                      placeholder="ilkendeks"
                    />
                  </Form.Group>
                  <Form.Group controlId="sonendeks">
                    <Form.Label>sonendeks</Form.Label>
                    <Form.Control
                      type="text"
                      name="sonendeks"
                      required
                      defaultValue={this.props.sonendeks}
                      placeholder="sonendeks"
                    />
                  </Form.Group>
                  <Form.Group controlId="tesisid">
                    <Form.Label>Tesis Adi</Form.Label>
                    <Form.Control as="select" defaultValue={this.props.tesisid}>
                      {this.state.tesiss.map((tesis) => (
                        <option key={tesis.tesisid}>{tesis.tesisad}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="tekzamanlituketim">
                    <Form.Label>tekzamanlituketim</Form.Label>
                    <Form.Control
                      type="text"
                      name="tekzamanlituketim"
                      required
                      defaultValue={this.props.tekzamanlituketim}
                      placeholder="tekzamanlituketim"
                    />
                  </Form.Group>
                  <Form.Group controlId="t1zamanlituketim">
                    <Form.Label>t1zamanlituketim</Form.Label>
                    <Form.Control
                      type="text"
                      name="t1zamanlituketim"
                      required
                      defaultValue={this.props.t1zamanlituketim}
                      placeholder="t1zamanlituketim"
                    />
                  </Form.Group>
                  <Form.Group controlId="t2zamanlituketim">
                    <Form.Label>t2zamanlituketim</Form.Label>
                    <Form.Control
                      type="text"
                      name="t2zamanlituketim"
                      required
                      defaultValue={this.props.t2zamanlituketim}
                      placeholder="t2zamanlituketim"
                    />
                  </Form.Group>
                  <Form.Group controlId="t3zamanlituketim">
                    <Form.Label>t3zamanlituketim</Form.Label>
                    <Form.Control
                      type="text"
                      name="t3zamanlituketim"
                      required
                      defaultValue={this.props.t3zamanlituketim}
                      placeholder="t3zamanlituketim"
                    />
                  </Form.Group>
                  <Form.Group controlId="toplamtuketim">
                    <Form.Label>toplamtuketim</Form.Label>
                    <Form.Control
                      type="text"
                      name="toplamtuketim"
                      required
                      defaultValue={this.props.toplamtuketim}
                      placeholder="toplamtuketim"
                    />
                  </Form.Group>
                  <Form.Group controlId="birimfiyat">
                    <Form.Label>birimfiyat</Form.Label>
                    <Form.Control
                      type="text"
                      name="birimfiyat"
                      required
                      defaultValue={this.props.birimfiyat}
                      placeholder="birimfiyat"
                    />
                  </Form.Group>
                  <Form.Group controlId="faturabedeli">
                    <Form.Label>faturabedeli</Form.Label>
                    <Form.Control
                      type="text"
                      name="faturabedeli"
                      required
                      defaultValue={this.props.faturabedeli}
                      placeholder="faturabedeli"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Faturayı Güncelle
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
