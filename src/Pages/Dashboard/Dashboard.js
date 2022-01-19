import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ItemButton from './Components/Button';
import Navigation from './Navigation';
import './Style.css';

const Dashboard = () => {
	const params = useParams();
    const link = params['*'];
    console.log(link);
	return (
		<div>
			<Navigation />
			<Container maxWidth='lg' sx={{ padding: '30px' }}>
				<Grid container>
					<Grid
						item
						md={4}
						sx={{
							border: '1px solid rgba(0, 0, 0, 0.12)',
							borderRadius: '4px',
                        }}
                    >
						<Box
							sx={{
								backgroundColor: '#f9f9f9',
								padding: '10px',
								border: '2px solid #e4edff',
							}}>
							<Grid container sx={{ alignItems: 'center' }} spacing={2}>
								<Grid item md={4}>
									<div>
										<img src='/images/avatar.svg' width='100%' alt='' />
									</div>
								</Grid>
								<Grid item md={8}>
									<Typography variant='h6'>Sulaiman Hosain</Typography>
									<a href='/' className='signout'>
										SIGN OUT
									</a>
								</Grid>
							</Grid>
						</Box>
						<ItemButton
							link='submission'
							text='Submissions'
                            isActive={link === 'submission' ? true : false}
                            icon='Inventory2Icon'
						/>
						<ItemButton
							link='your-cards'
							text='Your Cards'
                            isActive={link === 'your-cards' ? true : false}
                            icon='StyleIcon'
						/>
						<ItemButton
							link='wallet'
							text='Wallet'
                            isActive={link === 'wallet' ? true : false}
                            icon='AccountBalanceWalletIcon'
						/>
						<ItemButton
							link='profile'
							text='Profile'
                            isActive={link === 'profile' ? true : false}
                            icon='AccountCircleIcon'
						/>
						<ItemButton
							link={link}
							text='Save Credit Card'
                            isActive={link === 'save-your-card' ? true : false}
                            icon='CreditCardIcon'
                            coomingSoon={true}
						/>
						<ItemButton
							link={link}
							text='Address Book'
                            isActive={link === 'address-book' ? true : false}
                            icon='HomeIcon'
                            coomingSoon={true}
						/>
					</Grid>
					<Grid item md={8} sm={12} sx={{ p: 2,mt:{sm:4, xs:4} }}>
						<Outlet />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Dashboard;
