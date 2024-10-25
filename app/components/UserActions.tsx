'use client';
import { useEffect, useState } from 'react';

import Button from './Button';
import Modal from './Modal';
const UserActions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    console.log('Add User button clicked');
    setModalOpen(true);
  };

  return (
    <div>
      <Button
        title='Add User'
        disabled={false}
        action='primary'
        onClick={handleClick}
      />
      <Modal
        isOpen={modalOpen}
        title='Add User'
        content='Add user form goes here'
      />
    </div>
  );
};

export default UserActions;
