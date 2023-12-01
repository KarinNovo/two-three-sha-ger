import { Badge, Dropdown, Button } from "react-bootstrap";
import { useState } from "react";

export default function Sorter({ sortSelected }) {
  const handleSelect = (e) => {
    sortSelected(e);
  };

  const [value, setValue] = useState("Editor's choice");

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          style={{
            background: "rgb(127, 179, 255)",
            borderColor: "rgb(127, 179, 255)",
            color: "rgb(39, 39, 42)",
          }}
        >
          {value}
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Hostages, Victims & Survivors">Hostages, Victims & Survivors</Dropdown.Item>
        <Dropdown.Item eventKey="Popular">Popular</Dropdown.Item>
        <Dropdown.Item eventKey="Social Activism and Support">Social Activism and Support</Dropdown.Item>
        <Dropdown.Item eventKey="Human Rights and Advocacy">Human Rights and Advocacy</Dropdown.Item>
        <Dropdown.Item eventKey="Cultural and Religious Insights">Cultural and Religious Insights</Dropdown.Item>
        <Dropdown.Item eventKey="Media and Public Perception">Media and Public Perception</Dropdown.Item>
        <Dropdown.Item eventKey="Terrorism and Security">Terrorism and Security</Dropdown.Item>
        <Dropdown.Item eventKey="Political Movements">Political Movements</Dropdown.Item>
        <Dropdown.Item eventKey="International Conflict">International Conflict</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
