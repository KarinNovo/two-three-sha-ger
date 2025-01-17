import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../resources/david_star2.png";
import moment from 'moment';
import { Image } from "react-bootstrap";

function getTimeSinceWar() {
  const a = moment("2023-10-07");
  const b = moment();
  const no_of_days = b.diff(a, 'days');
  return no_of_days;
}

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: 0 }}>
    <Container fluid style={{ background: "#7FB3FF", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="navbar-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Hostage Counter */}
          <div style={{ fontSize: "20px", margin: '5px' }}>
            <strong>134</strong>
            <div> Hostages in Gaza </div>
          </div>

          {/* Logo as Separator */}
          <div style={{
              background: "white",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              margin: "0 15px",
            }}>
            <Image
              width={50}
              height={50}
              src={logo}
              alt="logo"
            />
          </div>

          {/* Days of War Counter */}
          <div style={{ fontSize: "20px", margin: '5px' }}>
            <strong>{getTimeSinceWar()} Days</strong>
            <div>since the war started</div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Menu;
