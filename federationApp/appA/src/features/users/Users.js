import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { fetchUsers } from "./usersSlice";
import './Users.css'

export const Users = () => {
    const {users} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  return (
     <div>
        {users.map(user => {
            return <div className="users" key={user.id}>user: {user.name}</div>
        })}
     </div>
  )
};
export default Users;