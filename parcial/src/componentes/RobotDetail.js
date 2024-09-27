import React from 'react';
import './RobotDetail.css';

const RobotDetail = ({ robot }) => {
  return (
    <div className="robot-detail-card">
      <h2 className="robot-name">{robot.nombre}</h2>
      <div className="robot-info">
        <img src={robot.imagen} alt={robot.nombre} className="robot-detail-image" />
        <div className="robot-detail-text">
          <p><strong>Modelo:</strong> {robot.modelo}</p>
          <p><strong>Fabricante:</strong> {robot.empresaFabricante}</p>
          <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
          <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
          <p><strong>Humor:</strong> {robot.humor}</p>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;
