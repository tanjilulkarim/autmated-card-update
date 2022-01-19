import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SearchIcon from '@mui/icons-material/Search';
import StyleIcon from '@mui/icons-material/Style';
import {
	AppBar,
	Button,
	Container,
	Grid, Radio,
	Toolbar,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import AddedCard from '../Components/AddedCard';
import CardResult from '../Components/CardResult';
import ShippingForm from '../Components/ShippingForm';
import Summary from '../Components/Summery';

const NewSubmission = () => {
	const [step, setStep] = React.useState(1);
	const [service, setService] = React.useState('20');
	const [open, setOpen] = React.useState(false);
	const [cardName, setCardName] = React.useState('');
	const [cardDes, setCardDes] = React.useState('');
	const [cardImage, setCardImage] = React.useState('');
	const [cards, setCards] = React.useState([]);
	const [cardImgData, setCardImgData] = React.useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const card = {
			id: cards.length + 1,
			name: cardName,
			description: cardDes,
			image: cardImage,
			quantity: '1',
			price: '1',
		};
		const formData = new FormData();
		formData.append('name', cardName);
		formData.append('description', cardDes);
		formData.append('image', cardImgData);
		formData.append('quantity', card.quantity);
		formData.append('price', card.price);
		axios
			.post('https://still-temple-91920.herokuapp.com/cards/add', formData)
			.then(res => console.log(res.data));

		setCards([...cards, card]);
		setOpen(false);
		setCardImage('');
		e.target.reset();
    };
	const handleImage = e => {
		const reader = new FileReader();
		const file = e.target.files[0];
		setCardImgData(file);
		reader.onloadend = () => {
			if (reader.readyState === 2) {
				setCardImage(reader.result);
			}
		};
		reader.readAsDataURL(file);
	};
	return (
		<div>
			<AppBar
				position='static'
				sx={{
					background:
						'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
					py: '1rem',
				}}>
				<Container maxWidth='lg' style={{ maxWidth: '1280', padding: '0' }}>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, display: 'flex' }}>
							<img src='/images/robo.svg' height='66px' alt='' />
						</Typography>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ mr: 2, ml: 'auto', display: 'flex' }}>
							<img src='/images/avatar.svg' alt='' />
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
			<h2
				className='submission-title'
				style={{
					background:
						'linear-gradient(106.54deg, #140078 -4.67%, #6C31BC 112.32%)',
					color: '#fff',
					textAlign: 'center',
					borderBottom: '3px solid #20BFB8',
				}}>
				Submit Cards For Grading
			</h2>

			<div className='timeline'>
				<div className={`timeline-item ${step === 1 && 'active'}`}>
					<div className='timeline-icon'>
						<BarChartIcon />
					</div>
					<span>Service</span>
				</div>
				<div className={`timeline-item ${step === 2 && 'active'}`}>
					<div className='timeline-icon'>
						<StyleIcon />
					</div>
					<span>Cards</span>
				</div>
				<div className={`timeline-item ${step === 3 && 'active'}`}>
					<div className='timeline-icon'>
						<LocalShippingOutlinedIcon />
					</div>
					<span>Shipping</span>
				</div>
				<div className={`timeline-item ${step === 4 && 'active'}`}>
					<div className='timeline-icon'>
						<CreditCardOutlinedIcon />
					</div>
					<span>Payment</span>
				</div>
				<div className={`timeline-item ${step === 5 && 'active'}`}>
					<div className='timeline-icon'>
						<ReceiptOutlinedIcon />
					</div>
					<span>Review</span>
				</div>
			</div>
			<div className='content'>
				<Container maxWidth='lg'>
					<div className='step-content'>
						<Box sx={{ width: { sm: '100%', md: '80%' }, mx: 'auto' }}>
							<div className={`service ${step === 1 ? 'active' : ''}`}>
								<div>
									<h3>Select your service level</h3>
									<p style={{ margin: '10px 0' }}>
										Select your desired service level from the list below
									</p>

									<form style={{ margin: '20px 0' }}>
										<Button
											className={`service-item ${service === '20' && 'active'}`}
											onClick={() => setService('20')}>
											<span className='left'>
												<Radio
													checked={service === '20' ? true : false}
													value='20'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 20 / Card</h5>
											</span>
											<span className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</span>
										</Button>
										<Button
											className={`service-item ${service === '50' && 'active'}`}
											onClick={() => setService('50')}>
											<div className='left'>
												<Radio
													checked={service === '50' ? true : false}
													value='50'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 50 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
										<Button
											className={`service-item ${
												service === '100' && 'active'
											}`}
											onClick={() => setService('100')}>
											<div className='left'>
												<Radio
													checked={service === '100' ? true : false}
													value='100'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 100 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
										<Button
											className={`service-item ${
												service === '250' && 'active'
											}`}
											onClick={() => setService('250')}>
											<div className='left'>
												<Radio
													checked={service === '250' ? true : false}
													value='a'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 250 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
										<Button
											className={`service-item ${
												service === '1000' && 'active'
											}`}
											onClick={() => setService('1000')}>
											<div className='left'>
												<Radio
													checked={service === '1000' ? true : false}
													value='a'
													name='radio-buttons'
													inputProps={{ 'aria-label': 'A' }}
												/>
												<h5>$ 1000 / Card</h5>
											</div>
											<div className='right'>
												<p>Protection up to $500</p>
												<span>28 - 30 Day Turn Around</span>
											</div>
										</Button>
									</form>
								</div>
							</div>
						</Box>
						<div className={`cards ${step === 2 ? 'active' : ''}`}>
							<div>
								<h3>Add cards to your submission</h3>
								<p style={{ margin: '10px 0' }}>
									Search for a card below and click the "+" icon, then enter the
									quantity and value for each card.
								</p>
							</div>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12} md={8}>
									<hr />
									<p>Search</p>
									<div className='card-search-box'>
										<SearchIcon />
										<input type='text' placeholder='Search' />
									</div>
									<CardResult
										cardName={cardName}
										cardDes={cardDes}
										cardImage={cardImage}
										setCardImage={setCardImage}
										setCardName={setCardName}
										open={open}
										setOpen={setOpen}
										setCardDes={setCardDes}
										handleSubmit={handleSubmit}
										handleImage={handleImage}
									/>
									<AddedCard setCards={setCards} cards={cards} />
								</Grid>
								<Grid item xs={12} md={4} sm={12}>
									<Summary setStep={setStep} service={service} cards={cards} />
								</Grid>
							</Grid>
						</div>
						<div className={`shipping ${step === 3 ? 'active' : ''}`}>
							<Grid container spacing={3}>
								<Grid item xs={12} sm={12} md={8}>
									<div className='shipping-intro'>
										<h2>Enter shipping details</h2>
										<p>
											Select your preferred return shipping method and enter
											your return shipping address
										</p>
									</div>
									<hr />
									<h4>Shipping Address</h4>
									<ShippingForm />
								</Grid>
								<Grid item xs={12} sm={12} md={4}>
									<Summary
										setStep={setStep}
										service={service}
										cards={cards}
										shipping={true}
									/>
								</Grid>
							</Grid>
						</div>
					</div>

					<hr />
					<div className='footer'>
						<Button
							className={`back-btn ${step === 1 ? 'hidden' : ''}`}
							onClick={() =>
								setStep(step => (step > 1 ? (step -= 1) : (step = 1)))
							}>
							<ArrowBackOutlinedIcon />
							Back
						</Button>
						<Button
							className='next-btn'
							onClick={() =>
								setStep(step => (step < 5 ? (step += 1) : (step = 5)))
							}>
							Next
						</Button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default NewSubmission;
