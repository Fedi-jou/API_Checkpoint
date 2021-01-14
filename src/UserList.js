import React from 'react'
import './App.css';
import Axios from 'axios';
import { useEffect, useState } from "react";



function UserList() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getuser = async () => {
            await Axios.get("https://jsonplaceholder.typicode.com/users").then(
                (response) => {
                    setUser(response.data)
                })
        }
        getuser()
    }, []);

    return (
        <div className="afficher">

            <ul>
                {user.map(person => (
                    <div>

                        <li>
                            <h4>ID : {person.id}</h4>
                        </li>


                        <li>
                            <h4>Name : {person.name}</h4>
                        </li>


                        <li>
                            <h4>E-Mail : {person.email}</h4>
                        </li>
                        <hr />
                    </div>

                ))}

            </ul>
        </div>
    )
}

export default UserList
