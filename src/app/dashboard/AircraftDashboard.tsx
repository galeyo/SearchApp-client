import React, {
	useContext,
	useEffect,
	Fragment,
	SyntheticEvent,
	createRef,
} from 'react';
import { RootStoreContext } from '../stores/rootStore';
import {
	Grid,
	Segment,
	Pagination,
	PaginationProps,
	Ref,
	Sticky,
} from 'semantic-ui-react';
import AircraftList from './AircraftList';
import AircraftListPlaceholder from './AircraftListPlaceholder';
import { observer } from 'mobx-react-lite';
import AircraftFilter from './AircraftFilter';

const AircraftDashboard: React.FC = () => {
	const rootStore = useContext(RootStoreContext);
	const {
		loadingInitial,
		loadAircrafts,
		setPage,
		activePage,
		setActivePage,
		totalPages,
	} = rootStore.aircraftStore;
	const contextRef = createRef();
	const handleNext = (e: SyntheticEvent, data: PaginationProps) => {
		setPage(Number(data.activePage) - 1);
		setActivePage(Number(data.activePage));
		loadAircrafts();
		window.scrollTo(0, 0);
	};
	useEffect(() => {
		loadAircrafts();
	}, [loadAircrafts]);
	console.log(loadingInitial);

	return (
		<Grid columns={4}>
			<Ref innerRef={contextRef}>
				<Grid.Column width={4}>
					<Sticky context={contextRef} offset={80}>
						<AircraftFilter />
					</Sticky>
				</Grid.Column>
			</Ref>
			<Grid.Column width={12}>
				{loadingInitial ? (
					<AircraftListPlaceholder />
				) : (
					<Fragment>
						<AircraftList />
						<Pagination
							defaultActivePage={1}
							totalPages={totalPages}
							onPageChange={handleNext}
							activePage={activePage}
						/>
					</Fragment>
				)}
			</Grid.Column>
		</Grid>
	);
};

export default observer(AircraftDashboard);
