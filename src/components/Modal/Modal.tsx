import React from "react";
import './Modal.css'
interface ModalProps {
  children: any;
}
export const Modal: React.FC<ModalProps> = ({ children }) => {
  return <div className="modalBackground">{children}</div>;
};

// export default Modal;
