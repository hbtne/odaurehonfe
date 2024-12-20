import React, { useState ,useEffect} from 'react';
import NotificationModal from '../../../components/Modal/Notification/NotificationModal'; 
import styles from './NotificationList.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NotificationList = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5278/api/notificaton');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    

    fetchNotifications();
  }, []);
  const handleOpenModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNotification(null);
  };

  const handleConfirm = () => {
    if (selectedNotification) {
      if (selectedNotification.notificationID) {
        navigate(`/ticketclerk/changeTicket/${selectedNotification.notificationID}`);
      } else {
        console.error('Missing notificationID');
      }
  
      handleCloseModal();
    }
  };
  

  return (
    <div className={styles.notificationList}>
      <h2>Danh sách thông báo</h2>
      {notifications.length === 0 ? (
        <p>Không có thông báo nào.</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li
              key={index}
              className={styles.notificationItem}
              onClick={() => handleOpenModal(notification)}
            >
              <p><strong>Thông báo #{notification.notificationID}</strong></p>
              <p>{notification.message}</p>
              <p><em>{notification.isHandled ? 'Đã xử lý' : 'Đang chờ'}</em></p>
            </li>
          ))}
        </ul>
      )}

      {/* Modal thông báo */}
      <NotificationModal
        isOpen={isModalOpen}
        message={selectedNotification?.message || ''}
        isHandled={selectedNotification?.isHandled || false}
        onClose={handleCloseModal}
        onHandle={handleConfirm}
      />
    </div>
  );
};

export default NotificationList;
