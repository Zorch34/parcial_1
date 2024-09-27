import React from 'react';
import { Table } from 'react-bootstrap';

const RobotTable = ({ robots }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Empresa Fabricante</th>
        </tr>
      </thead>
      <tbody>
        {robots.map((robot) => (
          <tr key={robot.id}>
            <td>{robot.nombre}</td>
            <td>{robot.modelo}</td>
            <td>{robot.empresaFabricante}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RobotTable;