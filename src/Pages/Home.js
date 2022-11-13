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
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import ext_perspec from '../img/ext.jpg';


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
    const [open2, setOpen2] = React.useState(false);

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
    const handleClickOpen2 = () => {
    setOpen2(true);
    };
    const handleClose2 = () => {
    setOpen2(false);
    };

    return (
        <div className="box box1">

        <IconButton
          sx={{
            position: 'absolute',
            top: 190,
            left: 980,
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
            top: 380,
            left: 1250,
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
            top: 700,
            left: 800,
            color: 'black',
            backgroundColor: 'white',
            
          }}
          size="large"
          onClick={handleClickOpen2}
        >
          <AddCircleIcon fontSize="large"/>
        </IconButton>
        <BootstrapDialog
        onClose={handleClose2}
        aria-labelledby="customized-dialog-title"
        open={open2}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose2}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, POP UP 3 POP UP 3 POP UP 3 POP UP 3egestas eget quam. Morbi leo risus, porta ac
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
            top: 400,
            left: 900,
            color: 'black',
            backgroundColor: 'white',
          }}
          size="large"
          component={Link}
          to="/Above"
        >
          <ArrowCircleRightIcon fontSize="large"/>
     </IconButton>

        <img src={ext_perspec} alt="exterior perspective front view" />
        
      </div>
    )
}

export default Home