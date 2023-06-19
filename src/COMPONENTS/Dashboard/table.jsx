

import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { ApiContext } from '../../context/api-context';

 const UserTable = () => {
    const { userData, createData, updateData, deleteData } = useContext(ApiContext);
  
    const [newUser, setNewUser] = useState({
        name:"",
        password:"",
        email:"",
        type:"",
        phone:"",
    });

    const [editUser, setEditUser] = useState({
        name:"",
        password:"",
        email:"",
        type:"",
        phone:"",
    });

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
        setEditUser({ ...editUser, [name]: value });
    };

    const handleAddUser = async (event) => {
        event.preventDefault();
        await createData(newUser);
        setNewUser({
            name:"",
            password:"",
            email:"",
            type:"",
            phone:"",
        });
        setShowAddForm(false);
    };

    const handleEditUser = async (event) => {
        event.preventDefault();
        await updateData(editUser.id, editUser);
        setEditUser({
            name:"",
            password:"",
            email:"",
            type:"",
            phone:"",
        });
        setShowEditForm(false);
    };

    const handleDeleteUser = (id) => {
        deleteData(id);
    };
    useEffect(() => {
        setIsLoading(true);
    }, [userData]);

    useEffect(() => {
        if (userData) {
            setIsLoading(false);
        }
    }, [userData]);

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => setShowAddForm(true)}>add</button>
            {showAddForm && (
                <form onSubmit={handleAddUser}>

                    <input type="hidden" name="id" value={newUser.id} onChange={handleInputChange} />
                    <input type="text" name="name" value={newUser.name} onChange={handleInputChange} />
                    <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
                    <input type="email" name="email" value={newUser.email} onChange={handleInputChange} />
                    <input type="text" name="type" value={newUser.type} onChange={handleInputChange} />
                    <input type="tel" name="phone" value={newUser.phone} onChange={handleInputChange} />
                    {/* <input type="file" name="file" value={newUser.image} onChange={handleInputChange} /> */}
                    <button type="submit">Submit</button>
                </form>
            )}
            {isLoading ? (
                <Spinner animation="border"/>) : (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>add</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {userData &&
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{user.phone}</td>
                                <td><img src={user.image} alt="dsa"/></td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user.id)}>delete</button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            setEditUser(user);
                                            setShowEditForm(true);
                                        }}
                                    >
                                        update
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>)}
            {showEditForm && (
                <form onSubmit={handleEditUser}>
                    <input type="hidden" name="id" value={editUser.id} onChange={handleInputChange} />
                    <input type="text" name="name" value={editUser.name} onChange={handleInputChange} />
                    <input type="email" name="email" value={editUser.email} onChange={handleInputChange} />
                    <input type="text" name="type" value={editUser.type} onChange={handleInputChange} />
                    <input type="tel" name="phone" value={editUser.phone} onChange={handleInputChange} />
                    {/* <input type="text" name="image" value={editUser.image} onChange={handleInputChange} /> */}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};
export default UserTable;

