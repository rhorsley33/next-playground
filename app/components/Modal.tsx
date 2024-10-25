import { useState } from 'react';
interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
}
const Modal = ({ isOpen, title, content }: ModalProps): JSX.Element => {
  const [modalSet, setModalSet] = useState(false);
  const handleClick = () => {
    setModalSet(true);
  };
  return (
    <>
      <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
        <div className='modal-box'>
          <div className='modal-header'>
            <h3>{title}</h3>
          </div>
          <div className='modal-body'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
