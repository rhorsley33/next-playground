'use client';
import { useEffect, useState } from 'react';

import Button from '../utility/Button';
import Modal from '../utility/Modal';
import SearchBar from '../utility/SearchBar';
const UserActions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    console.log('Add User button clicked');
    setModalOpen((prev) => !prev);
  };

  return (
    <div className='w-1/4'>
      <Button
        title='Add User'
        disabled={false}
        action='primary'
        onClick={toggleModal}
      />
      <Modal isOpen={modalOpen} title='Add User' onClose={toggleModal} />
    </div>
  );
};

export default UserActions;