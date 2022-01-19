import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import React from 'react';

const AddedCard = ({ setCards, cards }) => {
	const handleRemoveCard = id => {
		const newCards = cards.filter(card => card.id !== id);
		setCards(newCards);
	};
	return (
		<div className='added-card'>
			<h3>Added Card(s)</h3>
			<table>
				<thead>
					<tr>
						<th>Qty</th>
						<th>Card(s)</th>
						<th>Value (USD)</th>
					</tr>
					{cards?.map((card, index) => (
						<tr key={index}>
							<td>
								<input
									type='number'
									value={card.quantity}
									className='card-quantity'
									onChange={e => {
										let newCards = [...cards];
										newCards[index].quantity = e.target.value;
										console.log(newCards);
										setCards(newCards);
									}}
								/>
							</td>
							<td>
								<div className='card-info'>
									<img
										src={card.image}
										width='100px'
										style={{ maxHeight: '100px' }}
										alt=''
									/>
									<div>
										<h4>{card.name}</h4>
										<p>Added Manually</p>
										<span>{card.description}</span>
									</div>
								</div>
							</td>
							<td style={{ display: 'flex', alignItems: 'center' }}>
								<div>
									<input
										type='number'
										value={card.price}
										className='card-price'
										onChange={e => {
											let newCards = [...cards];
											newCards[index].price = e.target.value;
											console.log(newCards);
											setCards(newCards);
										}}
									/>
								</div>
								<Button
									onClick={() => handleRemoveCard(card.id)}
									sx={{
										borderRadius: '25px',
										minHeight: '25px',
										minWidth: '25px',
										m: 1,
										p: 1,
									}}>
									<DeleteIcon className='delete-btn' />
								</Button>
							</td>
						</tr>
					))}
				</thead>
			</table>
		</div>
	);
};

export default AddedCard;
