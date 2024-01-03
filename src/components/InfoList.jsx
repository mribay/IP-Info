import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'

function InfoList({ip, city, country, region, loc, org, postal, timezone}) {
  return (
    <>
        <List sx={{ width: '100%', height: '100%', bgcolor: 'background.paper', color: 'primary.contrastText'}}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <WifiTetheringIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="IP Address" secondary={ip}/>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <LocationCityIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <SouthAmericaIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Country" secondary={country} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <SouthAmericaIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Region" secondary={region} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <LocationOnIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Location" secondary={loc} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <CorporateFareIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Organization" secondary={org} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <LocalPostOfficeIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Postal" secondary={postal} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <AccessTimeFilledIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Timezone" secondary={timezone} />
            </ListItem>
        </List>
    </>
  )
}

export default InfoList