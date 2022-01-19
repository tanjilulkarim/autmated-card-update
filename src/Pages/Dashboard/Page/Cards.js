import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import '../Style.css';

const Cards = () => {
	return (
		<>
			<div style={{}} className='submission-header'>
				<h2>Your Card</h2>
				<div className='search-box'>
					<SearchIcon />
					<input type='text' placeholder='Search' />
				</div>
            </div>
            <hr />
            <div className='submission-body'>
                <p>You don't seem to have any graded cards yet. They'll be shown here as soon as we grade them!</p>
            </div>
		</>
	);
};

export default Cards;
