import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddTesisModal } from "./AddTesisModal";
import { EditTesisModal } from "./EditTesisModal";

export class Tesis extends Component {
  constructor(props) {
    super(props);
    this.state = { tesiss: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "tesis")
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({ tesiss: data });
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
  deleteTesis(tesisid) {
    if (window.confirm("Emin Misin?")) {
      fetch(process.env.REACT_APP_API + "tesis/" + tesisid, {
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
      tesiss,
      tesisid,
      tesisad,
      aboneno,
      tesisatno,
      sozlesmehesapno,
      sayacno,
      carpan,
      aboneliktipi,
      isletmekodu,
      kuruluguc,
      tesisturu,
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Tesis Id</th>
              <th>Tesis Adı</th>
              <th>Aboneno</th>
              <th>Tesisat No</th>
              <th>Sözleşme Hesap No</th>
              <th>Sayaç No</th>
              <th>Çarpan</th>
              <th>Abonelik Tipi</th>
              <th>İşletme Kodu</th>
              <th>Kurulu Güç</th>
              <th>Tesis Türü</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {tesiss.map((tesis) => (
              <tr key={tesis.tesisid}>
                <td>{tesis.tesisid}</td>
                <td>{tesis.tesisad}</td>
                <td>{tesis.aboneno}</td>
                <td>{tesis.tesisatno}</td>
                <td>{tesis.sozlesmehesapno}</td>
                <td>{tesis.sayacno}</td>
                <td>{tesis.carpan}</td>
                <td>{tesis.aboneliktipi}</td>
                <td>{tesis.isletmekodu}</td>
                <td>{tesis.kuruluguc}</td>
                <td>{tesis.tesisturu}</td>

                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          tesisid: tesis.tesisid,
                          tesisad: tesis.tesisad,
                          aboneno: tesis.aboneno,
                          tesisatno: tesis.tesisatno,
                          sozlesmehesapno: tesis.sozlesmehesapno,
                          sayacno: tesis.sayacno,
                          carpan: tesis.carpan,
                          aboneliktipi: tesis.aboneliktipi,
                          isletmekodu: tesis.isletmekodu,
                          kuruluguc: tesis.kuruluguc,
                          tesisturu: tesis.tesisturu,
                        })
                      }
                    >
                      Düzenle
                    </Button>

                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={
                        () => this.deleteTesis(tesis.tesisid) //    {editModalShow: true,depid: dep.DepartmentId,depname: dep.DepartmentName,})
                      }
                    >
                      Sil
                    </Button>

                    <EditTesisModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      tesisid={tesisid}
                      tesisad={tesisad}
                      aboneno={aboneno}
                      tesisatno={tesisatno}
                      sozlesmehesapno={sozlesmehesapno}
                      sayacno={sayacno}
                      carpan={carpan}
                      aboneliktipi={tesis.aboneliktipi}
                      isletmekodu={tesis.isletmekodu}
                      kuruluguc={tesis.kuruluguc}
                      tesisturu={tesis.tesisturu}
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
            Tesis Ekle
          </Button>
          <AddTesisModal
            show={this.state.addModalShow}
            onHide={addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }
}
