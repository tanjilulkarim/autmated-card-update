import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StyleIcon from '@mui/icons-material/Style';
import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Style.css';

const ItemButton = ({ text, link, isActive, icon, coomingSoon }) => {
	return (
		<Button
			variant='text'
			className={`btn ${isActive && 'btn-active'}`}
			sx={{
				width: '100%',
				margin: '5px 0',
				padding: '10px',
			}}>
			<p className='link'>
				<NavLink to={link}>
					<span style={{ marginRight: '5px' }}>
						{icon === 'StyleIcon' ? (
							<StyleIcon />
						) : icon === 'AccountBalanceWalletIcon' ? (
							<AccountBalanceWalletIcon />
						) : icon === 'Inventory2Icon' ? (
							<Inventory2Icon />
						) : icon === 'AccountCircleIcon' ? (
							<AccountCircleIcon />
						) : icon === 'CreditCardIcon' ? (
							<CreditCardIcon />
						) : icon === 'HomeIcon' ? (
							<HomeIcon />
						) : null}
					</span>
					{text}
					
				</NavLink>{coomingSoon && <div className='cooming-soon'>Coming Soon</div>}
			</p>
		</Button>
	);
};

export default ItemButton;
