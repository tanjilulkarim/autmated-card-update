import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Submissions = () => {
	return (
		<>
			<div style={{}} className='submission-header'>
				<Grid container spacing={2}>
					<Grid item md={4} sm={6}>
						<h2>Submissions</h2>
					</Grid>
					<Grid item md={4} sm={12} xs={12}>
						<Box className='search-box'>
							<SearchIcon />
							<input type='text' placeholder='Search' />
						</Box>
					</Grid>
					<Grid item md={4} sm={12} xs={12} sx={{display:'flex',justifyContent:'end'}}>
						<Button className='submission-btn'>
							<Link to='/dashboard/submission/new'>New Submission</Link>
						</Button>
					</Grid>
				</Grid>
			</div>
			<hr />
			<div className='submission-body'>
				<p>Submission Content Will Appeare Here!</p>
			</div>
		</>
	);
};

export default Submissions;
