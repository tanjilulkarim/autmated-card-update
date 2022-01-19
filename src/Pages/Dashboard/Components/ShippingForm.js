import React from 'react';

const ShippingForm = () => {
	return (
		<form className='shipping-form'>
			<div className='name'>
				<div>
					<label>First Name</label>
					<br />
					<input type='text' name='firstName' placeholder='First Name' />
				</div>
				<div>
					<label>Last Name</label>
					<br />
					<input type='text' name='lastName' placeholder='Last Name' />
				</div>
			</div>
			<div className='address'>
				<div>
					<label>Adress</label>
					<br />
					<input type='text' name='address' placeholder='Adress' />
				</div>
				<div>
					<label>Apt # (optional)</label>
					<br />
					<input type='text' name='apt' placeholder='Apt' />
				</div>
			</div>
			<div className='home'>
				<div>
					<label>City</label>
					<br />
					<input type='text' name='address' placeholder='Adress' />
				</div>
				<div>
					<label>State</label>
					<br />
                    <select name="" id="">
                        <option value="">Select a State</option>
                    </select>
				</div>
				<div>
					<label>State</label>
					<br />
					<input type='text' name='apt' placeholder='Apt' />
				</div>
			</div>
			<div className='phone'>
				<label>Phone</label>
				<br />
				<input type='text' name='apt' placeholder='Phone Number' />
			</div>
		</form>
	);
};

export default ShippingForm;
