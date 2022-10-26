import { ToastContainer, Toast } from 'react-bootstrap';
import { FiAlertTriangle } from 'react-icons/fi';

const MyToast = props => {
  return (
    <ToastContainer className="p-3" position={'bottom-end'}>
      <Toast
        show={props.show}
        onClose={() => props.setShow(false)}
        className="monster-toast"
        delay={3000}
        autohide
      >
        <Toast.Header className="monster-toast-header" closeButton={false}>
          <FiAlertTriangle
            style={{
              color: 'red',
              fontSize: '16px',
              marginRight: '5px',
            }}
          />
          <strong className="me-auto">{props.title}</strong>
        </Toast.Header>
        <Toast.Body className="monster-toast-body">{props.content}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default MyToast;
