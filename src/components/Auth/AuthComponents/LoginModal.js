import React from "react";
import Modal from '@mui/material/Modal';
import Login from "./Login";
import { Box } from "../AuthComponents-styles/Login.styled";

export default function LoginModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <Login
                    onClose={props.handleClose}
                />
            </Box>
        </Modal>
    )
};
