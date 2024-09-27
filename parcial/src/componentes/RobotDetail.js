import React from 'react';
import './RobotDetail.css';
import { FormattedMessage } from 'react-intl';

const RobotDetail = ({ robot }) => {
  const imageUrl = robot.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');

  return (
    <div className="robot-detail-card">
      <h2 className="robot-name">{robot.nombre}</h2>
      <div className="robot-info">
        <img src={imageUrl} alt={robot.nombre} className="robot-detail-image" />
        <div className="robot-detail-text">
          <p><strong><FormattedMessage id="model" />:</strong> {robot.modelo}</p>
          <p><strong><FormattedMessage id="manufacturer" />:</strong> {robot.empresaFabricante}</p>
          <p><strong><FormattedMessage id="year" />:</strong> {robot.añoFabricacion}</p>
          <p><strong><FormattedMessage id="processingCapacity" />:</strong> {robot.capacidadProcesamiento}</p>
          <p><strong><FormattedMessage id="humor" />:</strong> {robot.humor}</p>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;
