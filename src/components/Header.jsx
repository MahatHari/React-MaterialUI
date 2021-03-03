import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
        transform:'translateZ(0) '
    },
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor:"grey"
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px',
        }
    }
})

export default function Header() {
    const classes= useStyles()
    return (
        <AppBar position="static"  className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center"  >
                    <Grid item  style={{border:'1px solid red'}}>
                        <InputBase
                            placeholder="Searcg Place golder "
                            startAdornment={<SearchIcon fontSize="small" />}
                            autoComplete={'false'}
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item  sm>
                           
                    </Grid>
                    <Grid item  style={{ border: '1px solid white' }}>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            
                                <PowerSettingsNewIcon />
                           
                         </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
            
        </AppBar>
    )
}
