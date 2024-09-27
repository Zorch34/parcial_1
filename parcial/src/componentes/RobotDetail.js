import React from 'react';
import './RobotDetail.css'; 

const RobotDetail = ({ robot }) => {
  return (
    <div className="robot-detail-container">
      <h1>{robot.nombre}</h1>
      <div className="robot-detail-content">
        <img src={robot.imagen} alt={robot.nombre} className="robot-detail-image" />
        <div className="robot-details">
          <p><strong>Modelo:</strong> {robot.modelo}</p>
          <p><strong>Empresa Fabricante:</strong> {robot.empresaFabricante}</p>
          <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
          <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
          <p><strong>Humor:</strong> {robot.humor}</p>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;