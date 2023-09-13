import React, { useState } from 'react'
import Card from '../Components/HomePage/Card'

function HomePage({setIsLoggedIn}) {
  
  return (
    <div>
    <Card setIsLoggedIn={setIsLoggedIn} />
</div>
  )
}

export default HomePage