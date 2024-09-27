import React from 'react';
import './RobotDetail.css';
import { FormattedMessage } from 'react-intl'; // Importar FormattedMessage

const RobotDetail = ({ robot }) => {
  return (
    <div className="robot-detail-card">
      <h2 className="robot-name">{robot.nombre}</h2>
      <div className="robot-info">
        <img src={robot.imagen} alt={robot.nombre} className="robot-detail-image" />
        <div className="robot-detail-text">
          <p><strong><FormattedMessage id="model" />:</strong> {robot.modelo}</p> {/* Localización */}
          <p><strong><FormattedMessage id="manufacturer" />:</strong> {robot.empresaFabricante}</p> {/* Localización */}
          <p><strong><FormattedMessage id="year" />:</strong> {robot.añoFabricacion}</p> {/* Localización */}
          <p><strong><FormattedMessage id="processingCapacity" />:</strong> {robot.capacidadProcesamiento}</p> {/* Localización */}
          <p><strong><FormattedMessage id="humor" />:</strong> {robot.humor}</p> {/* Localización */}
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;
