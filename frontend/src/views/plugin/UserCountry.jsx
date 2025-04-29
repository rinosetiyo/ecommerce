import React, { use } from 'react'
import { useState, useEffect } from 'react'

function GetCurrentAddress() {
    cont [add, setAdd] = useState('')
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

            fetch(url)
            .then((response) => response.json())
            .then((data) => setAdd(data.address))
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default GetCurrentAddress
