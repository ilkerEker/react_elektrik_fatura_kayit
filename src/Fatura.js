import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddFaturaModal } from "./AddFaturaModal";
import { EditFaturaModal } from "./EditFaturaModal";

export class Fatura extends Component {
  constructor(props) {
    super(props);
    this.state = { faturas: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "fatura")
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ faturas: data });
        },
        // Not: Burada hataları yakalamak önemlidir.
        // Bileşenimizde bug bulunmaması için, 'catch ()' bloğu yerine bulunan
        // bu blok içinde hatalar yakalanır.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  deleteFatura(faturaid) {
    if (window.confirm("Are You Sure?")) {
      fetch(process.env.REACT_APP_API + "fatura/" + faturaid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  render() {
    const {
      faturas,
      faturaid,
      sonodemetarihi,
      donem,
      ilkokumatarihi,
      sonokumatarihi,
      tesisid,
      tekzamanlituketim,
      t1zamanlituketim,
      t2zamanlituketim,
      t3zamanlituketim,
      toplamtuketim,
      faturabedeli,
      faturano,
      birimfiyat,
      ilkendeks,
      sonendeks,
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Fatura No</th>
              <th>Son Ödeme Tarihi</th>
              <th>Dönem</th>
              <th>İlk Okuma Tarihi</th>
              <th>Son Okuma Tarihi</th>
              <th>İlk Enkdes</th>
              <th>Son Endeks</th>
              <th>Tesis</th>
              <th>Tek Zamanli Tüketim</th>
              <th>T1 Tüketim</th>
              <th>T2 Tüketim</th>
              <th>T3 Tüketim</th>
              <th>Toplam Tüketim</th>
              <th>Birim Fiyat</th>
              <th>Fatura Bedeli</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {faturas.map((fatura) => (
              <tr key={fatura.faturaid}>
                <td>{fatura.faturaid}</td>
                <td>{fatura.faturano}</td>
                <td>{new Date(fatura.sonodemetarihi).toLocaleDateString()}</td>
                <td>{fatura.donem}</td>
                <td>{new Date(fatura.ilkokumatarihi).toLocaleDateString()}</td>
                <td>{new Date(fatura.sonokumatarihi).toLocaleDateString()}</td>
                <td>{fatura.ilkendeks}</td>
                <td>{fatura.sonendeks}</td>
                <td>{fatura.tesisid}</td>
                <td>{fatura.tekzamanlituketim}</td>
                <td>{fatura.t1zamanlituketim}</td>
                <td>{fatura.t2zamanlituketim}</td>
                <td>{fatura.t3zamanlituketim}</td>
                <td>{fatura.toplamtuketim}</td>
                <td>{fatura.birimfiyat}</td>
                <td>{fatura.faturabedeli}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          faturaid: fatura.faturaid,
                          sonodemetarihi: new Date(
                            fatura.sonodemetarihi
                          ).toLocaleDateString(),
                          donem: fatura.donem,
                          ilkokumatarihi: fatura.ilkokumatarihi,
                          sonokumatarihi: fatura.sonokumatarihi,
                          tesisid: fatura.tesisid,
                          tekzamanlituketim: fatura.tekzamanlituketim,
                          t1zamanlituketim: fatura.t1zamanlituketim,
                          t2zamanlituketim: fatura.t2zamanlituketim,
                          t3zamanlituketim: fatura.t3zamanlituketim,
                          toplamtuketim: fatura.toplamtuketim,
                          faturabedeli: fatura.faturabedeli,
                          faturano: fatura.faturano,
                          ilkendeks: fatura.ilkendeks,
                          sonendeks: fatura.sonendeks,
                          birimfiyat: fatura.birimfiyat,
                        })
                      }
                    >
                      Düzenle
                    </Button>

                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={() => this.deleteFatura(fatura.faturaid)}
                    >
                      Sil
                    </Button>

                    <EditFaturaModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      faturaid={faturaid}
                      sonodemetarihi={sonodemetarihi}
                      donem={donem}
                      ilkokumatarihi={ilkokumatarihi}
                      sonokumatarihi={sonokumatarihi}
                      tesisid={tesisid}
                      tekzamanlituketim={tekzamanlituketim}
                      t1zamanlituketim={t1zamanlituketim}
                      t2zamanlituketim={t2zamanlituketim}
                      t3zamanlituketim={t3zamanlituketim}
                      toplamtuketim={toplamtuketim}
                      faturabedeli={faturabedeli}
                      faturano={faturano}
                      ilkendeks={ilkendeks}
                      sonendeks={sonendeks}
                      birimfiyat={birimfiyat}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Fatura Ekle
          </Button>
          <AddFaturaModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }
}
