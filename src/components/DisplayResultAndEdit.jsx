import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayResultAndEdit = () => {

    const [loadedUsers, setLoadedUsers] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                setLoadedUsers(data)
                setUsers(data)
            })
    }, []);
    console.log(loadedUsers);

    // delete
    const handleDelete = (_id) => {
        console.log('will be deleted', _id);
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    // alert('deleted successfully')
                    const remaining = users.filter(user => user._id == _id);
                    setLoadedUsers(remaining);

                }
            })
    }

    return (
        <div>
            <h3>Data Loaded from Database</h3>
            {
                loadedUsers.map(user => <p style={{ border: '1px solid blue' }} key={user._id}>{user.name} : {user.email} {user._id} <Link to={`/update/${user._id}`}>Update</Link> <button type='button' onClick={() => handleDelete(user._id)}>Delete</button> </p>)
            }
        </div>
    );
};

export default DisplayResultAndEdit;