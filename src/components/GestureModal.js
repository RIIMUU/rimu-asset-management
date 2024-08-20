import React from 'react';
import { Modal } from 'antd';
import { useSwipeable } from 'react-swipeable';

const GestureModal = ({ visible, onClose, children }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onClose(),
    onSwipedRight: () => onClose(),
    onSwipedDown: () => onClose(),
    delta: 10, // Sensitivitas swipe
  });

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      {...handlers} // Menambahkan dukungan gesture
    >
      {children}
    </Modal>
  );
};

export default GestureModal;
