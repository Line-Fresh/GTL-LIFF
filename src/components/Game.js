import React, { useEffect, useState } from 'react';
import {Typography, CardMedia, CardContent, Card, Box, Button, Dialog, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Slide, Container} from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PlaceIcon from '@mui/icons-material/Place';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  wrapIcon: {
    verticalAlign: 'middle',
    display: 'inline-flex'
  },
  customizeToolbar: {
    minHeight: 40,
    width: '100%', 
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Game = ({pass, game, reply}) => {
  const [open, setOpen] = useState(false)
  const [openForm, setOpenform] = useState(false)
  const [answer, setAnswer] = useState('')
  const classes = useStyles()

  const handleClickOpenForm = () => {
    setOpenform(true)
  };

  const handleCloseForm = () => {
    setOpenform(false)
  };

  const handleSendAnswer = () => {
    setOpenform(false)
    reply(answer, game.id)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
      <Dialog open={openForm} onClose={handleCloseForm} fullWidth>
        <DialogTitle>{game.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {game.game}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Answer"
            fullWidth
            variant="standard"
            maxWidth="xl"
            onChange={(e) => (setAnswer(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>取消</Button>
          <Button onClick={handleSendAnswer}>送出</Button>
        </DialogActions>
      </Dialog>
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
          <div style={{right: 50, position: "absolute"}}>
            {pass ? 
              <Chip 
                icon={<CheckIcon />} 
                label="已完成" 
                size="small"
                color="success"
                style={{height:28, width:105}}
              />:
              <Chip 
                icon={<BorderColorIcon />} 
                label="回答題目"
                size="small"
                color="primary"
                onClick={handleClickOpenForm}
                style={{height:28, width:105}}
              />
            }
          </div>
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
      <Card sx={{ display: 'flex' }} onClick={handleClickOpen} style={{marginBottom: "8px", height: "110px", backgroundColor: pass ? "#E8E8E8": "white"}}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardMedia
            component="img"
            sx={{ width: 161 }}
            image={game.picUrl}
          />
        </Box>
        <Box >
          <CardContent style={{marginTop: "-15px"}}>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
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