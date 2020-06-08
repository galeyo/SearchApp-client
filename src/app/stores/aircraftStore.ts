import { IAircraft } from './../models/aircraft';
import { RootStore } from "./rootStore";
import { observable, action, runInAction, computed } from "mobx";
import agent from '../api/agent'


const LIMIT = 9;

export default class AircraftStore {
	rootStore: RootStore;
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore
	}

	@observable aircrafts: IAircraft[] = [];
	@observable aircraftsLength = 0;
	@observable loadingInitial = true;
	@observable count = 0;
	@observable page = 0;
	@observable activePage = 1;

	@action setPage = (page: number) => {
		this.page = page;
	}

	@action setActivePage = (activePage: number) => {
		this.activePage = activePage;
	}
	@computed get aircraftsParams() {
		const params = new URLSearchParams();
		params.append('limit', String(LIMIT));
		params.append('offset', `${this.page ? this.page * LIMIT : 0}`);
		return params;	
	}

	@computed get totalPages() {
		return Math.ceil(this.count / LIMIT);
	}



	@action loadAircrafts = async () => {
		this.loadingInitial = true;
		try {
			const aircraftEnvelope = await agent.Aircrafts.list(this.aircraftsParams);
			runInAction('loading aircrafts', () => {
				this.aircrafts = aircraftEnvelope.aircrafts;
				this.aircraftsLength = this.aircrafts.length;
				this.count = aircraftEnvelope.count;
			})
		} catch (error) {
			console.log(error);
		} finally {
			runInAction('loading aircrafts finally', () => {
				this.loadingInitial = false;
			})
		}
	}
}