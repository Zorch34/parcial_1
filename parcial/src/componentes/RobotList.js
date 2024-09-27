import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import robots from './robotsData'; 
import './RobotList.css'; 
import RobotDetail from './RobotDetail';

const RobotList = () => {
  const [selectedRobot, setSelectedRobot] = useState(null);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div className="robot-list-container">
      <h1><FormattedMessage id="header" /></h1>
      <img src="/images/robots.jpg" alt="Robot" className="robot-image" />
      
      <div className="content-container">
        <table className="robot-table">
          <thead>
            <tr>
              <th><FormattedMessage id="id" /></th>
              <th><FormattedMessage id="name" /></th>
              <th><FormattedMessage id="model" /></th>
              <th><FormattedMessage id="manufacturer" /></th>
            </tr>
          </thead>
          <tbody>
            {robots.map(robot => (
              <tr key={robot.id} onClick={() => handleRobotClick(robot)} className="robot-row">
                <td>{robot.id}</td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mostrar el detalle del robot seleccionado a la derecha */}
        {selectedRobot && (
          <div className="robot-detail-container">
            <RobotDetail robot={selectedRobot} />
          </div>
        )}
      </div>

      <p className="footer-text">
        <FormattedMessage id="contact" />
      </p>
    </div>
  );
};

export default RobotList;
