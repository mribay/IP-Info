import './App.css'
import Navbar from './components/Navbar'
import LinearProgress from '@mui/material/LinearProgress'
import InfoList from './components/InfoList'
import Box  from '@mui/material/Box'
import Grid  from '@mui/material/Grid'
import MapImage from './components/MapImage'
import { createTheme, ThemeProvider } from '@mui/material'
import { useState, useEffect } from 'react'


function App() {

  const [ip, setIp] = useState([])
  const [geo, setGeo] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {

      const ipResponse = await fetch('https://api.ipify.org?format=json')
      const ipResult = await ipResponse.json()
      setIp(ipResult)
  
      // Introduce a delay before making the next request
      await new Promise(resolve => setTimeout(resolve, 1000))
  
      const geoResponse = await fetch(`https://ipinfo.io/${ipResult.ip}?token=6053c3cbcab3dc`)
      const geoResult = await geoResponse.json()
      setGeo(geoResult)

    } catch (error) {
        console.error('Error fetching data:', error)
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log(ip)
  console.log(geo)

  const theme = createTheme({
    palette: {
      primary: {
        main: '#14532d',
        contrastText: '#f0fdf4'
      },
      secondary: {
        main: '#166534',
        contrastText:'#bbf7d0'
      }, 
      mode: 'dark'
    }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar name='IP Info'></Navbar>
        { loading ? (
          <Box sx={{ width: '100vw' }}>
            <LinearProgress />
          </Box>
        ) : (
          <Box sx={{zIndex: '2', marginX: '10vw', marginY: '100px'}}>
            <Grid container spacing={12}>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <InfoList 
                  ip={geo.ip}
                  city={geo.city}
                  country={geo.country}
                  loc={geo.loc}
                  org={geo.org}
                  postal={geo.postal}
                  region={geo.region}
                  timezone={geo.timezone}
                ></InfoList>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                <MapImage loc={geo.loc}></MapImage>
              </Grid>
            </Grid>
          </Box>
        ) }
      </ThemeProvider>
    </>
  )
}

export default App
