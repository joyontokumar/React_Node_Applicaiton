// import package and project file
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateUser = (props) => {
    const { match } = props;
    let { id } = match.params;
    const [name, setUserName] = useState('');
    const [age, setUserAge] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`http://localhost:5050/api/users/${id}`);
                setUserName(data.name);
                setUserAge(data.age);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);


    const submit = async (e) => {
        e.preventDefault();
        const user = await axios.put(`http://localhost:5050/api/users/${id}`, { name, age },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",
                    'Access-Control-Allow-Methods': 'GET POST PUT DELETE',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
                }
            });
        console.log(user);
    }

    return (
        <section className="pt-5 pb-5 content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-title mb-3 text-center">
                            <h2>Update User</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                        <form onSubmit={submit}>
                            <div className="form-group">
                                <input type="text" value={name} onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="User Name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input value={age} type="number" onChange={(e) => setUserAge(e.target.value)} className="form-control" placeholder="User age" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control btn btn-primary" value="Update User" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default UpdateUser;