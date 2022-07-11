import React from 'react';
import styles from './users.module.css';
import axios from "axios";
import noUserIcon from "../../assets/img/none-user-icon.png"

let Users = (props) => {
    if (props.users.length === 0) {
        axios.defaults.withCredentials = true;
        axios.get("https://jsonplaceholder.typicode.com/todos/1/users").then(response => {
            props.setUsers(response.data)
        })
    }

    return <div>
        {
            props.users.map(
                u => <div key={u.id}>
                <span>
                    <div>
                        <img src={noUserIcon} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.email}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;