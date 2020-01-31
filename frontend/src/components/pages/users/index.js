// import package and project file
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import SweetAlert from 'react-bootstrap-sweetalert';
// import page section
const Home = () => {
    const [users, setUsers] = useState([]);

    // delete user data
    const deleteUser = async (id) => {
        const { data } = await axios.delete(`http://localhost:5050/api/users/${id}`);
        console.log(data);
        const remainingUser = users.filter(user => user._id != data._id);
        setUsers(remainingUser);
    }
    // get user data from database
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5050/api/users');
                setUsers(data);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);
    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>User Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((single_user, i) => (
                                    <tr key={i}>
                                        <td>{single_user.name}</td>
                                        <td>{single_user.age}</td>
                                        <td>
                                            <Link to={`${process.env.PUBLIC_URL}/update-user/${single_user._id}`} className="btn btn-success mr-3">Update User</Link>
                                            <button onClick={() => deleteUser(single_user._id)} className="btn btn-danger">Delete User</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;