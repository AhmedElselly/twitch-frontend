import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Navbar = props => {
  const handleClick = e => {
  	props.handleClick()
  }

	return(
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <div className="container-fluid">
			    <a className="navbar-brand" href="#">Twitch API</a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
			        <li className="nav-item me-5">
			          <Button variant="outlined" color="secondary" onClick={handleClick}>
					        Search
					      </Button>
			        </li>
			        </ul>
			    </div>
			  </div>
			</nav>
		</div>
	)
}

export default Navbar;