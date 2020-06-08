export interface IAircraft {
	id: number;
	aircraftName: string;
	yearInService: number;
	description: string;
	image: URL;
	categories: string[];
	types: string[];
	country: string;
}

export interface IAircraftEnvelope {
	aircrafts: IAircraft[];
	count: number;
}
