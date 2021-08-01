import './style.scss';
import {
	Button,
	IconButton
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Item = ({user, handleRemoveItem, moveUp, index}) => {
	const handleRemove = id => {
		handleRemoveItem(id)
	}

	const handleMoveUp = index => {
		// console.log(index)
		moveUp();
	}
	return(
		<div className='d-flex'>
			<div className="card mb-3" >
		  <div className="row g-0">
		    <div className="col-md-4">
		      <img width='100%' src={user.profile_image_url} className="img-fluid rounded-start" alt="..."/>
		    </div>
		    <div className="col-md-8">
		      <div className="card-body">
		        <h5 className="card-title">{user.display_name}</h5>
		        <p className="card-text">{user.description}</p>
		        <p className="card-text"><small className="text-muted">View Counts: {user.view_count}</small></p>
		        <Button variant="outlined" color="secondary" onClick={() => handleRemove(user.id)} >
			        Remove
			      </Button>
		      </div>
		    </div>
		  </div>
		</div>
		{index && <IconButton onClick={() => handleMoveUp(index)} className='icons' style={{marginTop: '150px', marginLeft: '15px', background: 'white', borderRadius: '50%', flexWrap: 'wrap'}}>
			<KeyboardArrowUpIcon />
		</IconButton>}
		</div>
	)
}

export default Item;