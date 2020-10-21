import React from "react";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" varient="dark">
        <Navbar.Brand>Todo List</Navbar.Brand>
      </Navbar>
    </div>
  );
}
