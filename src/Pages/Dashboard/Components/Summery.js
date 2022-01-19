import { Button } from '@mui/material';
import React from 'react';

const Summary = ({ setStep, service, cards, shipping }) => {
	const total = () => {
		const count = cards.reduce((acc, card) => {
			return acc + Number(card.quantity);
		}, 0);
		return count * Number(service);
	};
	const price = cards.reduce((acc, card) => {
		return acc + Number(card.quantity) * Number(card.price);
	}, 0);
	return (
		<div className='summary'>
			<h4 className='summary-header'>Summary</h4>
			<div className='summary-content'>
				<div className='service-level'>
					<div>
						<h5>
							{shipping ? `$${price} Total Declared Value` : 'Service Level'}
						</h5>
						<Button onClick={() => setStep(1)}>Edit</Button>
					</div>
					{!shipping && (
						<>
							<div className='right'>
								<h4>$ {service} / Card</h4>
								<p>$500 Max. Value Per Card</p>
							</div>
						</>
					)}
				</div>
				{!shipping && (
					<div className='service-calculation'>
						<div>
							<h5>Number of Cards:</h5>
							<h5>
								{cards.reduce((acc, card) => {
									return acc + Number(card.quantity);
								}, 0)}
							</h5>
						</div>
						<div className='right'>
							<h5>Price / Card:</h5>
							<h5>$ {service}</h5>
						</div>
					</div>
				)}

				<div className='service-total'>
					<h5>Service Level Fee:</h5>
					<h5>
						<span style={{ color: '#666', marginRight: '4px' }}>
							({service} x{' '}
							{cards.reduce((acc, card) => {
								return acc + Number(card.quantity);
							}, 0)}
							) =
						</span>
						$
						{(() => {
							const count = cards.reduce((acc, card) => {
								return acc + Number(card.quantity);
							}, 0);
							return count * Number(service);
						})()}
					</h5>
				</div>

				{shipping && (
					<>
						<div className='service-total'>
							<h5>Insured Shipping: </h5>
							<h5>$14</h5>
						</div>
						<hr />
						<div className='service-total'>
							<h5>Total: </h5>
							<h5>${total() && total() + 14} </h5>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Summary;
