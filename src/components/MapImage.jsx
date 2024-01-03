import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

function MapImage({width='200px', height='150px', loc}) {

  const url = `https://www.google.com/maps/search/${loc}?`
  const tooltipTitle = `Locate ${loc} in google map`

  const HandleClick = () => {
    window.open(url)
  }

  return (
    <>
        <Tooltip title={tooltipTitle} arrow>
            <Button 
            style={{backgroundImage: `url('https://i.ibb.co/f1gDvrv/google-map-logo.jpg')`, 
            backgroundSize: 'cover', 
            width: width, 
            height: height, 
            margin: '15vw'}}
            onClick={HandleClick}
            >
            </Button>
        </Tooltip>
    </>
  )
}

export default MapImage