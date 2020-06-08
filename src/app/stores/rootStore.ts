import { configure } from 'mobx';
import AircraftStore from './aircraftStore';
import { createContext } from 'react';
import CommonStore from './commonStore';

configure({ enforceActions: 'always' });

export class RootStore {
	aircraftStore: AircraftStore;
	commonStore: CommonStore;
	constructor () {
		this.aircraftStore = new AircraftStore(this);
		this.commonStore = new CommonStore(this);
	}
}

export const RootStoreContext = createContext(new RootStore());
