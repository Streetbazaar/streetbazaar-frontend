import React from "react";
import Modal from '@mui/material/Modal';
import { Box } from "../AuthComponents-styles/Login.styled";
import CreateAccount from "./CreateAccount";

export default function CreateAccountModal(props) {

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <CreateAccount
                    onClose={props.handleClose}
                />
            </Box>
        </Modal>
    )
};