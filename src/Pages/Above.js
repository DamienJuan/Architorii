import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../App.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import ext_above from '../img/above.jpg';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    }
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  

function Home() {

    const [open0, setOpen0] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen0 = () => {
        setOpen0(true);
    };
    const handleClose0 = () => {
        setOpen0(false);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };

    return (
        <div className="box box1">

        <IconButton
          sx={{
            position: 'absolute',
            top: 220,
            left: 500,
            color: 'black',
            backgroundColor: 'white',
            
          }}
          size="large"
          onClick={handleClickOpen0}
        >
          <AddCircleIcon fontSize="large"/>
        </IconButton>
        <BootstrapDialog
        onClose={handleClose0}
        aria-labelledby="customized-dialog-title"
        open={open0}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose0}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, POP UP 1 POP UP 1 POP UP 1 POP UP 1egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
      </BootstrapDialog>

        <IconButton
          sx={{
            position: 'absolute',
            top: 810,
            left: 870,
            color: 'black',
            backgroundColor: 'white',
            
          }}
          size="large"
          onClick={handleClickOpen1}
        >
          <AddCircleIcon fontSize="large"/>
        </IconButton>
        <BootstrapDialog
        onClose={handleClose1}
        aria-labelledby="customized-dialog-title"
        open={open1}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose1}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, POP UP 2 POP UP 2 POP UP 2 POP UP 2egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
      </BootstrapDialog>

      <IconButton
          sx={{
            position: 'absolute',
            top: 500,
            left: 1800,
            color: 'black',
            backgroundColor: 'white',
          }}
          size="large"
          component={Link}
          to="/Interior"
        >
          <ArrowCircleRightIcon fontSize="large"/>
     </IconButton>

     <IconButton
          sx={{
            position: 'absolute',
            top: 500,
            left: 60,
            color: 'black',
            backgroundColor: 'white',
          }}
          size="large"
          component={Link}
          to="/"
        >
          <ArrowCircleLeftIcon fontSize="large"/>
     </IconButton>

        <img src={ext_above} alt="exterior above view" />
        
      </div>
    )
}

export default Home