import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Auth = () => {
	const user = useAuth();
	console.log(user);
	return (
		<Grid
			container
			spacing={2}
			sx={{
				height: '101.7vh',
			}}>
			<Grid
				item
				md={6}
				sx={{
					background:
						'rgba(0, 0, 0, 0) linear-gradient(103.29deg, rgb(20, 0, 120) -18.4%, rgb(108, 49, 188) 112.42%) repeat scroll 0% 0%',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}>
				<Box sx={{ width: '50%' }}>
					<img src='/images/robo.svg' alt='' />
					<hr style={{ opacity: '0.5', margin: '30px 0' }} />
					<Typography variant='h3' gutterBottom>
						Automated Card Grading
					</Typography>
					<p>
						Get accurate, fast and completely transparent grades for your cards,{' '} 
						<a href="/">Learn More.</a>
					</p>
                    <div style={{textAlign:'center', margin:'20px 0'}}>
                    <img src='/images/robogradingBanner.png' width='260px' alt='' />
                    </div>
				</Box>
			</Grid>
			<Grid item md={6} sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
				}}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default Auth;
