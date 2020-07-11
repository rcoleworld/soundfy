import * as React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const InfoToast = (props: any) => {
  return (
    <Toast className='info-toast'>
      <ToastHeader className='info-header'>{props.header}</ToastHeader>
      <ToastBody className='info-body'>{props.body}</ToastBody>
    </Toast>
  );
};

export default InfoToast;
