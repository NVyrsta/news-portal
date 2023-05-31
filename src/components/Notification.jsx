import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Notification = (message, type) => {
  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  };

  switch (type) {
    case 'success':
      toast.success(message, toastOptions);
      break;

    case 'reject':
      toast.error(message, toastOptions);
      break;

    default:
      toast(message, toastOptions);
  }
};

export default Notification;
