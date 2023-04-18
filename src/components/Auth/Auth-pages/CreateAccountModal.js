import React from "react";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/system";
import CreateAccount from "./CreateAccount";

export default function CreateAccountModal(props) {

    const style = {
        width: "38%",
        height: "565px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "70px auto",
        boxSizing: "border-box",
    };

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={style}>
                <CreateAccount
                    onClose={props.handleClose}
                />
            </Box>
        </Modal>
    )
};