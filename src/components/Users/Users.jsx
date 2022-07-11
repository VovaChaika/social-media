import React from 'react';
import styles from './users.module.css';
import axios from "axios";
import noUserIcon from "../../assets/img/none-user-icon.png"

let Users = (props) => {
    if (props.users.length === 0) {
        axios.defaults.withCredentials = true;
        axios.defaults.headers = {
            "API-KEY": "fc253b1c-0962-4c3c-bbdd-f6ced18294b8"
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return <div>
        {
            props.users.map(
                u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : noUserIcon} className={styles.userPhoto}/>
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
                        <div>{u.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;