import React from "react";
import { Link } from "react-router-dom";
import UserList from "./UserList";
import TodoList from "./TodoList";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/userlist">유저 목록</Link></li>
                <li><Link to="/todolist">할 일 목록</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;