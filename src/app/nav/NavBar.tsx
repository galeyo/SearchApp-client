import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SearchComponent from './SearchComponent';
const NavBar: React.FC = () => {
	return (
		<Menu fixed='top' inverted>
			<Grid container columns={2}>
				<Grid.Column width={4}>
					<Menu.Item header as={NavLink} exact to='/aircrafts'>
						<img
							src='/assets/logo.png'
							alt='logo'
							style={{ marginRight: '10px' }}
						/>
						<div>Aircrafts</div>
					</Menu.Item>
				</Grid.Column>
				<Grid.Column width={12} verticalAlign='middle'>
					<SearchComponent />
				</Grid.Column>
			</Grid>
		</Menu>
	);
};

export default NavBar;
