import React, { useState } from 'react';
import '../App.css';

const AddUserModal = ({ isOpen, onClose, onAddUser }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        birthDate: '',
        bloodGroup: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        onAddUser(formData);
        onClose();
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            birthDate: '',
            bloodGroup: ''
        });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <form onSubmit={handleAddUser}>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Birth Date</label>
                        <input
                            type="text"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Blood Group</label>
                        <input
                            type="text"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Add User</button>
                </form>
                <button onClick={onClose} className="modal-close-button">Close</button>
            </div>
        </div>
    );
};

export default AddUserModal;
