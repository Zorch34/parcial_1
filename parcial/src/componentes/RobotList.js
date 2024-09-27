import React, { useState } from 'react';
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
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src="/images/robots.jpg" alt="Robot" className="robot-image" />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Modelo</th>
            <th>Empresa Fabricante</th>
          </tr>
        </thead>
        <tbody>
          {robots.map(robot => (
            <tr key={robot.id} onClick={() => handleRobotClick(robot)} style={{ cursor: 'pointer' }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRobot && <RobotDetail robot={selectedRobot} />}
    </div>
  );
};

export default RobotList;