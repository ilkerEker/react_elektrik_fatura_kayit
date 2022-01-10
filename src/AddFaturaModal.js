import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddFaturaModal extends Component {
  constructor(props) {
    super(props);
    this.state = { tesiss: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  //photofilename = "anonymous.png";
  //imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;
  // sonotarih = Date.now();
  // ilkokutarih = Date.now();
  // sonokutarih = Date.now();
  // sonotarihyil = 2021;
  // sonotarihay = 1;
  // sonotarihgun = 1;

  componentDidMount() {
    fetch(process.env.REACT_APP_API + "tesis")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tesiss: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    /* console.log(event.target.value);
    console.log(event.target.sonodemetarihi.value);
    console.log(event.target.donem.value);
    console.log(event.target.ilkokumatarihi.value);
    console.log(event.target.sonokumatarihi.value);
    console.log(event.target.tesisid.value);
    console.log(event.target.tekzamanlituketim.value);
    console.log(event.target.t1zamanlituketim.value);
    console.log(event.target.t2zamanlituketim.value);
    console.log(event.target.t3zamanlituketim.value);
    console.log(event.target.toplamtuketim.value);
    console.log(event.target.faturabedeli.value); */

    fetch(process.env.REACT_APP_API + "fatura", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
  //   handleFileSelected(event) {
  //     event.preventDefault();
  //     console.log(event.target.name);
  //     console.log(event.target.value);
  //     // this.sonotarihyil = event.target.year;
  //     // this.sonotarihay = event.target.sonodemetarihi.month;
  //     // this.sonotarihgun = event.target.sonodemetarihi.day;

  //     // this.sonotarih = new Date(
  //     //   this.sonotarihyil,
  //     //   this.sonotarihay,
  //     //   this.sonotarihgun
  //     // );

  //     // let ilkokutarihyil = event.target.ilkokumatarihi.value.year;
  //     // let ilkokutarihay = event.target.ilkokumatarihi.value.month;
  //     // let ilkokutarihgun = event.target.ilkokumatarihi.value.day;

  //     // this.ilkokutarih = new Date(ilkokutarihyil, ilkokutarihay, ilkokutarihgun);

  //     // let sonokutarihyil = event.target.sonokumatarihi.value.year;
  //     // let sonokutarihay = event.target.sonokumatarihi.value.month;
  //     // let sonokutarihgun = event.target.sonokumatarihi.value.day;

  //     // this.sonokutarih = new Date(sonokutarihyil, sonokutarihay, sonokutarihgun);
  //     /*  this.sonotarih = event.target.value;
  //     this.ilkokutarih = event.target.value;
  //     this.sonokutarih = event.target.value; */
  //   }
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
              Fatura Ekle
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form onSubmit={this.handleSubmit}>
                <Col md={6}>
                  <Row>
                    <Form.Group controlId="faturano">
                      <Form.Label>faturano</Form.Label>
                      <Form.Control
                        type="text"
                        name="faturano"
                        required
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
                      />
                    </Form.Group>
                  </Row>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="donem">
                    <Form.Label>donem</Form.Label>
                    <Form.Control
                      type="text"
                      name="donem"
                      required
                      placeholder="donem"
                    />
                  </Form.Group>
                  <Form.Group controlId="ilkokumatarihi">
                    <Form.Label>ilkokumatarihi</Form.Label>
                    <Form.Control
                      type="date"
                      name="ilkokumatarihi"
                      required
                      placeholder="ilkokumatarihi"
                    />
                  </Form.Group>
                </Col>
                <Form.Group controlId="sonokumatarihi">
                  <Form.Label>sonokumatarihi</Form.Label>
                  <Form.Control
                    type="date"
                    name="sonokumatarihi"
                    required
                    placeholder="sonokumatarihi"
                  />
                </Form.Group>
                <Form.Group controlId="ilkendeks">
                  <Form.Label>ilkendeks</Form.Label>
                  <Form.Control
                    type="text"
                    name="ilkendeks"
                    required
                    placeholder="ilkendeks"
                  />
                </Form.Group>
                <Form.Group controlId="sonendeks">
                  <Form.Label>sonendeks</Form.Label>
                  <Form.Control
                    type="text"
                    name="sonendeks"
                    required
                    placeholder="sonendeks"
                  />
                </Form.Group>
                <Form.Group controlId="tesisid">
                  <Form.Label>tesisid</Form.Label>
                  <Form.Control as="select">
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
                    placeholder="tekzamanlituketim"
                  />
                </Form.Group>
                <Form.Group controlId="t1zamanlituketim">
                  <Form.Label>t1zamanlituketim</Form.Label>
                  <Form.Control
                    type="text"
                    name="t1zamanlituketim"
                    required
                    placeholder="t1zamanlituketim"
                  />
                </Form.Group>
                <Form.Group controlId="t2zamanlituketim">
                  <Form.Label>t2zamanlituketim</Form.Label>
                  <Form.Control
                    type="text"
                    name="t2zamanlituketim"
                    required
                    placeholder="t2zamanlituketim"
                  />
                </Form.Group>
                <Form.Group controlId="t3zamanlituketim">
                  <Form.Label>t3zamanlituketim</Form.Label>
                  <Form.Control
                    type="text"
                    name="t3zamanlituketim"
                    required
                    placeholder="t3zamanlituketim"
                  />
                </Form.Group>
                <Form.Group controlId="toplamtuketim">
                  <Form.Label>toplamtuketim</Form.Label>
                  <Form.Control
                    type="text"
                    name="toplamtuketim"
                    required
                    placeholder="toplamtuketim"
                  />
                </Form.Group>
                <Form.Group controlId="birimfiyat">
                  <Form.Label>birimfiyat</Form.Label>
                  <Form.Control
                    type="text"
                    name="birimfiyat"
                    required
                    placeholder="birimfiyat"
                  />
                </Form.Group>
                <Form.Group controlId="faturabedeli">
                  <Form.Label>faturabedeli</Form.Label>
                  <Form.Control
                    type="text"
                    name="faturabedeli"
                    required
                    placeholder="faturabedeli"
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Fatura Ekle
                  </Button>
                </Form.Group>
              </Form>
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
