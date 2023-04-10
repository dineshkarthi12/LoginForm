import React, {useState} from 'react'
import "./LoginPage.css"


    const userList = [
        {username:'user1',password:'pass1',role:'admin'},
        {username:'user2',password:'pass2',role:'user'},
        {username:'user3',password:'pass3',role:'user'}
    ];
    
    const Login = ({onLogin}) => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

         
        const handleLogin = (event) => {
            event.preventDefault();
            const user = userList.find(
                user=>user.username === username && user.password === password
            );
            if (user) {
                onLogin(user);
                console.log(` Logged in as ${username}`);
            } else {
                console.log('invalid username or password');
            }
        };

    

  return (
    <div className='container'>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
};

const UserList = ({users}) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user,index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

const Userpanel = ({user}) => {
    return (
        <div>
            <h2>Welcome,{user.username}({user.role})</h2>
            <p>This is your panel</p>
        </div>
    );
};

const LoginPage = () => {
    const [loggedInUser,setLoggedInUser] = useState(null);

    const handleLogin = (user) => {
        setLoggedInUser(user);
    }

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    return (
        <div>
            {!loggedInUser && <Login onLogin={handleLogin} />}
            {loggedInUser && (
                <div>
                    <Userpanel user={loggedInUser} />
                    <button onClick={handleLogout}>Logout</button>
                    {loggedInUser.role === 'admin' && <UserList users={userList} />}
                </div>
            )}
        </div>
    );
};

export default LoginPage
