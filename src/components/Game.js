import React, { useEffect, useState } from 'react';
import {Typography, CardMedia, CardContent, Card, Box, Button, Dialog, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Slide, Container} from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PlaceIcon from '@mui/icons-material/Place';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
  customizeToolbar: {
    minHeight: 36
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Game = ({game}) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar className={classes.customizeToolbar}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <ArrowBackIosIcon fontSize="small"/>
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            
          </Typography>
        </Toolbar>
        <Divider />
        <div style={{width: '100%', height: '200px', overflow: 'hidden'}}>
        <img 
          style={{width: '100%'}}
          src={game.picUrl}
        />
        </div>
        <Container style={{overflow:'scroll'}}>
          <Typography variant="h6" style={{fontWeight: 'bold', marginLeft: '6px', marginTop: '8px'}}>
            | {game.name} |
          </Typography>
          <Typography variant="body2" className={classes.wrapIcon}>
            <PlaceIcon fontSize="small" color="disabled" style={{marginRight: "6px"}}/>
            {game.locations}
          </Typography><br/>
          <Typography variant="body2" className={classes.wrapIcon}>
            <DateRangeIcon fontSize="small" color="disabled" style={{marginRight: "6px"}}/>
            {game.time}
          </Typography><br/>
          <Typography variant="body2" className={classes.wrapIcon}>
            <ArrowForwardOutlinedIcon fontSize="small" color="disabled" style={{marginRight: "6px"}}/>
            {game.game}
          </Typography><br/>
          <Typography variant="body2" className={classes.wrapIcon}>
            <AddTaskOutlinedIcon fontSize="small" color="disabled" style={{marginRight: "6px"}}/>
            {game.intro}
          </Typography><br/>
        </Container>
      </Dialog>
      <Card sx={{ display: 'flex' }} onClick={handleClickOpen} style={{marginBottom: "8px", height: "110px"}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={game.picUrl}
          />
        </Box>
        <Box >
          <CardContent style={{marginTop: "-10px"}}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              |{game.name}
            </Typography>
            <Typography variant="body2" className={classes.wrapIcon}>
              <ArrowForwardOutlinedIcon color="disabled" style={{marginRight: "6px"}}/>
              {game.short_game}
            </Typography>
            <Typography variant="body2" className={classes.wrapIcon}>
              <AddTaskOutlinedIcon fontSize="small" color="disabled" style={{marginRight: "6px"}}/>
              {game.short_intro}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default Game;