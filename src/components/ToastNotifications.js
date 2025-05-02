import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';

const ToastNotification = ({ show, onClose, message }) => {
  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
      <Toast show={show} onClose={onClose} bg="success" text="white" delay={3000} autohide>
        <Toast.Body>✅ {message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ToastNotification;