import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import InfoIcon from '@material-ui/icons/Info';
import { Chip } from '@material-ui/core';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;
  return alert.length > 0
    ? 'null'
    : alerts.map((alert) => (
        <div
          key={alert.id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '1rem',
          }}
        >
          <Chip
            size='medium'
            icon={<InfoIcon />}
            label={alert.msg}
            color={alert.type !== 'danger' ? 'primary' : 'secondary'}
          />
        </div>
      ));
};

export default Alerts;
