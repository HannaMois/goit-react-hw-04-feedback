import PropsType from 'prop-types';
import { NotificationText } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationText>{message}</NotificationText>;
};

Notification.propsType = {
  message: PropsType.string.isRequired,
};

export default Notification;