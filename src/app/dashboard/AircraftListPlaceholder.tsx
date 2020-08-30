import React from 'react';
import { Placeholder, Segment, Grid } from 'semantic-ui-react';

const AircraftListPlaceholder = () => {
	return (
		<Grid>
			<Grid.Row columns={3}>
				{Array(9).fill(0).map((a, i) => (
					<Grid.Column key={i} computer={5} mobile={16} stretched>
						<Segment key={i} style={{ marginBottom: '1.5em' }}>
							<Placeholder style={{ marginBottom: '1em' }}>
								<Placeholder.Image />
							</Placeholder>
							<Placeholder fluid>
								<Placeholder.Header>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder.Header>
								<Placeholder.Paragraph>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder.Paragraph>
								<Placeholder.Paragraph>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder.Paragraph>
								<Placeholder.Paragraph>
									<Placeholder.Line />
									<Placeholder.Line />
								</Placeholder.Paragraph>
							</Placeholder>
						</Segment>
					</Grid.Column>
				))}
			</Grid.Row>
		</Grid>
	);
};

export default AircraftListPlaceholder;
