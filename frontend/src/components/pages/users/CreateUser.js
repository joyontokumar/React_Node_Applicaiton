// import package and project file
import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setUserName] = useState('');
    const [age, setUserAge] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        const user = await axios.post('http://localhost:5050/api/users', { name, age });
        console.log(user);
    }
    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-3 text-center">
                            <h2>Add User</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <form onSubmit={submit}>
                            <div className="form-group">
                                <input type="text" onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="User Name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="number" onChange={(e) => setUserAge(e.target.value)} className="form-control" placeholder="User age" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control btn btn-primary" value="Add User" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default CreateUser;