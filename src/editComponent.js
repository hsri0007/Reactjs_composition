import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TextField } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(2),
    
    },
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({open,handleClose,rows,headers}) {

const states = {...rows}


  const classes = useStyles();


  const handleChange=(valv,id)=>{
   states[id]=valv;
  }


 
  return (
    <div >
     
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
   <Container>
        <List>

            {
                headers.map((res,i)=><><form key={i} style={{marginTop:i===0&&20}}   className={classes.root} noValidate autoComplete="off"><TextField  variant="outlined" onChange={(e)=>handleChange(e.target.value,res.name)}   InputLabelProps={{
                    shrink: true,
                  }}  name={res.name} fullWidth  label={res.name}  defaultValue={rows[res.name]}   /></form></>)
            }
         
        </List>
        <Button variant={"contained"} color="primary"  onClick={()=>alert(JSON.stringify(states))} >submit</Button>
        </Container>
      </Dialog>
    </div>
  );
}
