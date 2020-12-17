import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { isProjectModalOpen } from '../../store/reducers/projects';
import { toggleModal, setActiveEmployee, setActiveProject } from '../../store/actions/index';

const ModalWrapper = (props) => {
  const visible = useSelector(isProjectModalOpen);
  const dispatch = useDispatch();
  
  return (
    <>
      <Modal
        centered
        visible={visible}
        onOk={() => {
          dispatch(toggleModal({ value: false }));
          dispatch(setActiveEmployee({ id: null }));
          dispatch(setActiveProject({ id: null }));
        }}
        onCancel={() => {
          dispatch(toggleModal({ value: false }));
          dispatch(setActiveEmployee({ id: null }));
          dispatch(setActiveProject({ id: null }));
        }}
        width={1000}
      >
          {props.children}
      </Modal>
    </>
  );
};

export default ModalWrapper;