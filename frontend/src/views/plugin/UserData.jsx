import React from 'react'
import Cookie from 'js-cookie'
import jwtDecode from 'jwt-decode'

function UserData() {
    const access_token = Cookie.get('access_token')
    const refresh_token = Cookie.get('refresh_token')

    if (access_token && refresh_token) {
        const token = refresh_token
        const decoded = jwtDecode(token)
        return decoded
    } else {
        console.log('No token found')
    }
  return (
    <div>
      
    </div>
  )
}

export default UserData
