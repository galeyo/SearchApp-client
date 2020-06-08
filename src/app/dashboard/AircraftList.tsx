import React, { Fragment, useContext } from 'react';
import {
	Item,
	Image,
	LabelGroup,
	Label,
	Segment,
	Grid,
} from 'semantic-ui-react';
import { RootStoreContext } from '../stores/rootStore';
import { IAircraft } from '../models/aircraft';
import { observer } from 'mobx-react-lite';
import ShowMoreText from 'react-show-more-text';

const style = {
	padding: '0.3em'
}

const AircraftList = () => {
	const rootStore = useContext(RootStoreContext);
	const { aircrafts } = rootStore.aircraftStore;
	return (
		<Grid>
			<Grid.Row columns={3}>
				{aircrafts &&
					aircrafts.map((item: IAircraft, i) => (
						<Grid.Column key={i} width={5} stretched>
							<Segment style={{ marginBottom: '1.5em' }}>
								<Item>
									<Item.Image size='massive' src={item.image} />
									<Item.Content>
										<Item.Header as='a' style={{ fontSize: '1.2em' }}>
											{item.aircraftName}
										</Item.Header>
										<Item.Header>
											Year in service: <Label style={style}>{item.yearInService}</Label>
										</Item.Header>
										<Item.Header>
											Country: <Label style={style}>{item.country}</Label>
										</Item.Header>
										<Item.Meta>Description</Item.Meta>
										<Item.Description>
											<ShowMoreText
												lines={3}
												more='Show more'
												less='Show less'
												expanded={false}
											>
												{item.description}
												<br />
											</ShowMoreText>
										</Item.Description>
										<Item.Meta>Category:</Item.Meta>
										<Label.Group>
											{item.categories &&
												item.categories.map((c, i) => (
													<Label  style={style} key={i}>{c}</Label>
												))}
										</Label.Group>
										<Item.Meta>Types:</Item.Meta>
										<Label.Group>
											{item.types &&
												item.types.map((t, i) => <Label  style={style} key={i}>{t}</Label>)}
										</Label.Group>
									</Item.Content>
								</Item>
							</Segment>
						</Grid.Column>
					))}
			</Grid.Row>
		</Grid>
	);
};

export default observer(AircraftList);
