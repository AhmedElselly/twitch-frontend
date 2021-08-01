import {useState} from 'react';
import {getChannel} from '../api';
import Item from './Item';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style.scss';

const Home = props => {
	const [open, setOpen] = useState(props.open);
	const [result, setResult] = useState([]);
	const [text, setText] = useState('');
	
	const handleChange = e => {
		setText(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault()
		getChannel(text).then(res => {
			setResult([...result, res.data.data[0]]);
		});
	}

	const handleRemove = id => {
		const newList = result.filter(user => user.id !== id);
		setResult(newList)
	}

	const moveUp = i => e => {
		const results = result;
		const moveUp = results[i];
		results[i] = results[i-1];
		results[i-1] = moveUp;
		setResult([...results]);
	}

	const generateResult = () => {
		return result.map((user, i) => {
			return <Item 
							index={i}
							user={user} 
							key={user.id} 
							handleRemoveItem={handleRemove} 
							moveUp={moveUp(i)}
							/>
		});
	}

	const generateDialog = () => {
	  	return(
	  		<Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
	        <DialogTitle id="form-dialog-title">Pick a channel name</DialogTitle>
	        <DialogContent>
	          <DialogContentText>
	            Please enter the name of the Twitch channel
	          </DialogContentText>
	          <TextField
	            autoFocus
	            margin="dense"
	            id="name"
	            label="Enter username"
	            type="text"
	            fullWidth
	            onChange={handleChange}
	          />
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={handleSubmit} color="primary">
	            Search
	          </Button>	          
	        </DialogActions>
	      </Dialog>
		)
  }
	const handleClick = () => {
		props.handleClick()
	}
	return(
		<div>
			{props.open && (
				generateDialog()
			)}
			
			{result.length ? (
				<div className='container transition'>
					<h4 className='text-light'>Results</h4>
					{generateResult()}
				</div>
			):(
				<div className='container text-light d-flex justify-content-center column mt-5'>
					<h1>Press the Search Button and start your search</h1>
					<Button variant="outlined" color="secondary" onClick={handleClick}>
		        Search
		      </Button>
				</div>
			)}
		</div>
	)
}

export default Home;