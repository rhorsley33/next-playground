'use client';
import { useState } from 'react';
import modalstyles from '../../styles/user-table.module.css';
import ModalUserForm from '../user-management/ModalUserForm';
import { FaWindowClose } from 'react-icons/fa';
interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}
const Modal = ({ isOpen, title, onClose }: ModalProps): JSX.Element => {
  const handleSubmission = () => {
    onClose();
  };
  return (
    <>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-slate-900`}
      >
        <div
          className={`${modalstyles['modal-position']} bg-white rounded-lg shadow-lg p-6 w-full max-w-md`}
        >
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <FaWindowClose onClick={onClose} />
          </div>
          <ModalUserForm handleSubmission={handleSubmission} />
        </div>
      </div>
    </>
  );
};

export default Modal;
