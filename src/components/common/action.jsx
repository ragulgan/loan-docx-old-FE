import React from "react";
import { Dropdown } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";


const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <button
        ref={ref}
        className="btn p-0 border-0 bg-transparent"
        style={{ boxShadow: "none" }}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        <ThreeDots size={18} />
    </button>
));

const ActionMenu = ({ onEdit, onView, onDelete }) => {
    return (
        <Dropdown align="end">
            <Dropdown.Toggle as={CustomToggle} />

            <Dropdown.Menu style={{ minWidth: "120px", padding: "5px" }}>
                <Dropdown.Item onClick={onEdit}><i className="bi bi-pencil-square me-2"></i> Edit</Dropdown.Item>
                <Dropdown.Item onClick={onView}><i className="bi bi-eye me-2"></i> View</Dropdown.Item>
                <Dropdown.Item onClick={onDelete}><i class="bi bi-trash me-2"></i>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ActionMenu;
