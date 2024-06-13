import React from 'react'
import {Avatar, Menu} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useValue } from '../../context/ContextProvider'
import { logout } from '../../actions/user';

const ProfileMenu = () => {
    const navigate = useNavigate()

    const {
        dispatch,
        state: { currentUser },
      } = useValue();
    const handleLogout =() =>{
        logout(dispatch)
     } 
  return (
    <Menu>
        <Menu.Target>
            <Avatar src={currentUser?.picture} alt='user image' radius={"xl"}/>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Item onClick={()=> navigate("./favourites", {replace: true})}>
                Favourites
            </Menu.Item>

            <Menu.Item onClick={()=> navigate("./bookings", {replace: true})}>
                Bookings
            </Menu.Item>

            <Menu.Item onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu