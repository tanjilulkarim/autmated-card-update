import { Button, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CardResult = ({
	cardName,
	cardDes,
	cardImage,
	setOpen,
	open,
	setCardImage,
	setCardName,
	setCardDes,
	handleSubmit,
	handleImage,
}) => {
	return (
		<div className='card-result'>
			<p>41,094 results</p>
			<p>
				Can't find your card?{' '}
				<Button className='add-btn' onClick={() => setOpen(true)}>
					Add Card Manually
				</Button>
			</p>
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={{}} className='add-card-modal'>
					<Typography
						id='modal-modal-title'
						variant='h6'
						sx={{ pb: 2 }}
						component='h2'>
						Add Card Manually
					</Typography>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={4}>
							<Grid item xs={12} sm={4}>
								<Typography id='modal-modal-title' variant='p' component='p'>
									Photo of Front of Card*
								</Typography>
								<div>
									<Button component='label' className='img-upload'>
										{!cardImage ? (
											<div className='image-upload-btn'>
												<input
													accept='image/*'
													type='file'
													name='image'
													hidden
													onChange={handleImage}
												/>
												<svg
													className='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv'
													focusable='false'
													viewBox='0 0 24 24'
													aria-hidden='true'
													data-testid='FileUploadOutlinedIcon'>
													<path d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'></path>
												</svg>
												<h6 className=''>Upload Image</h6>
												<h6 className=''>or drag and drop</h6>
											</div>
										) : (
											<div className='image-upload-btn'>
												<img
													src={cardImage}
													alt=''
													width='70%'
													style={{ margin: '0 auto' }}
												/>
												<div>
													<Button
														className='img-control'
														variant='contained'
														onClick={() => setCardImage('')}>
														Delete
													</Button>
													<Button
														className='img-control'
														variant='contained'
														component='label'>
														Replace
														<input
															accept='image/*'
															type='file'
															name='image'
															hidden
															onChange={handleImage}
														/>
													</Button>
												</div>
											</div>
										)}
									</Button>
								</div>
							</Grid>
							<Grid item xs={12} sm={8} className='card-form'>
								<div>
									<label htmlFor=''>Card Name*</label>
									<br />
									<input
										className='card-name'
										type='text'
										name='name'
										onChange={e => setCardName(e.target.value)}
										placeholder='Enter Card Name'
									/>
								</div>
								<div>
									<label htmlFor=''>
										Card Description*
										<br />
									</label>
									<textarea
										className='card-description'
										type='text'
										name='description'
										onChange={e => setCardDes(e.target.value)}
										placeholder='Enter Card Description'
									/>
									<span style={{ color: '#555' }}>
										Card Year released, series, set, edition, card number etc. *
									</span>
								</div>
							</Grid>
						</Grid>
						<div className='add-card-modal-footer'>
							<Button
								className='add-card-modal-footer-btn'
								onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button
								variant='contained'
								type='submit'
								className='add-card-modal-footer-btn-submit'
								disabled={cardName && cardDes && cardImage ? false : true}>
								Add Card
							</Button>
						</div>
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default CardResult;
