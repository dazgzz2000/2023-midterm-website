import { Link, Outlet } from "react-router-dom";
export default function RootLayout() {
    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/users">Users</Link> | 
            <Link to="/createusers">Create User</Link> | <Link to="/post">Post </Link> 
            | <Link to="/posts">Posts</Link> | <Link to="/deletepost">Delete Post</Link> | <Link to="/app">App</Link> 
            <div>
                <Outlet />
            </div>
        </div>
    );
}
export function RootIndex() {
    return <h1>Home</h1>;
}