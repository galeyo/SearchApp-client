import React, { useContext } from 'react';
import {
	Label,
	Segment,
	Grid,
	Image,
	Header,
} from 'semantic-ui-react';
import { RootStoreContext } from '../stores/rootStore';
import { IAircraft } from '../models/aircraft';
import { observer } from 'mobx-react-lite';
import ShowMoreText from 'react-show-more-text';

const AircraftList = () => {
	const rootStore = useContext(RootStoreContext);
	const { aircrafts } = rootStore.aircraftStore;
	return (
		<Grid>
			<Grid.Row columns={3}>
				{aircrafts &&
					aircrafts.map((item: IAircraft, i) => (
						<Grid.Column key={i} computer={5} mobile={16}>
							<Header
								as='a'
								color='blue'
								textAlign='center'
								attached='top'
								block
								className='item-header'>
								{item.aircraftName}
							</Header>
							<Segment attached className='aircraft'>
								<Grid.Row className='content'>
									<Image src={item.image} fluid bordered />
									<Grid.Column>
										<b>Year in service: </b>
										<Label className='item-label'>
											{item.yearInService}
										</Label>
									</Grid.Column>
									<Grid.Column>
										<b>Country: </b>
										<Label className='item-label'>
											{item.country}
										</Label>
									</Grid.Column>
									<Grid.Column>
										<b>Description: </b>
										<ShowMoreText
											lines={3}
											more='Show more'
											less='Show less'
											expanded={false}>
											{item.description}
											<br />
										</ShowMoreText>
									</Grid.Column>
									<Grid.Column>
										<b>Category:</b>
										<Label.Group>
											{item.categories &&
												item.categories.map((c, i) => (
													<Label
														className='item-label'
														key={i}>
														{c}
													</Label>
												))}
										</Label.Group>
									</Grid.Column>
									<Grid.Column>
										<b>Types:</b>
										<Label.Group>
											{item.types &&
												item.types.map((t, i) => (
													<Label
														className='item-label'
														key={i}>
														{t}
													</Label>
												))}
										</Label.Group>
									</Grid.Column>
								</Grid.Row>
							</Segment>
						</Grid.Column>
					))}
			</Grid.Row>
		</Grid>
	);
};

export default observer(AircraftList);
