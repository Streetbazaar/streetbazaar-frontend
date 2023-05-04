import React from 'react'
import { Div } from './styles/Notification.styled';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../features/ui-slice';

const Notification = ({ message }) => {
    const dispatch = useDispatch();
    const not = useSelector(state => state.ui.notification);
    const handleClose = () => {
        dispatch(uiActions.showNotification({
            open: false
        }))
    }
    return (
        <div>
            {not.open &&
                <Div onClose={handleClose}><p>To proceed, please either create an account or log in</p></Div>}
        </div>
    )
}

export default Notification;