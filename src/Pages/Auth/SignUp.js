import { Typography } from '@mui/material';
import React from 'react';
import './Style.css';

const SignUp = () => {
	return (
		<div style={{ width: '50%', textAlign: 'center' }}>
			<Typography variant='h5'>Sign Up to AGS to Access Robograding</Typography>
            <form>
                <input type="text" placeholder="First Name"   />
            </form>
		</div>
	);
};

export default SignUp;
