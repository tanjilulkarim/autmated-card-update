import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Style.css';

const Navigation = () => {
	return (
		<AppBar
			position='static'
			sx={{
				background:
					'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
			}}>
			<Container maxWidth='xxl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
						<img src='/images/robo.svg' height='54px' alt='' />
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'center',
						}}>
						<a href='/'>Live Feed</a>
						<a href='/'>POP Report</a>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<NavLink to='/dashboard/submission/new'>
							<Button
								variant='outlined'
								sx={{
									color: '#42E8E0',
									border: '2px solid #42E8E0',
									borderRadius: '24px',
									padding: '10px 34px',
									fontSize: '14px',
									margin: '0 8px',
								}}
								className='btn-submit'>
								<svg
									className='icon'
									focusable='false'
									viewBox='0 0 24 24'
									aria-hidden='true'
									data-testid='FileUploadOutlinedIcon'>
									<path d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'></path>
								</svg>
								Submit
							</Button>
						</NavLink>
					</Box>
					<img src='/images/avatar.svg' alt='' />
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navigation;
