import React, { useState, useEffect } from "react";

function User() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch("/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUserList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);

                }
            )
    }, [])

    if (error) {
        return <div>HATA</div>
    }
    else if (!isLoaded) {
        return <div>
            Yükleniyor.
        </div>
    } else {
        return (
            <div>
                <h1>HELLO</h1>
                <ul>
                    {userList.map(user => (
                        <li key={user.id}>
                            {user.id} {user.username}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }
}
export default User;
