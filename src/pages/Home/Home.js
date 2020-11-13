import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li>
          <a onClick={() => setOpenModal(true)} title="Open modal">Modal</a>
        </li>
      </ul>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        I'm a modal
      </Modal>
    </div>
  );
};

export default Home;
