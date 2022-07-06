import type { Contract, QueryOptions } from 'autumndb';
import type { Socket } from 'socket.io-client';

export type ExtendedSocket = Socket & {
	type?: ((user: Contract, card: Contract) => void) | undefined;
};

export interface LinkConstraint {
	slug: string;
	name: string;
	data: {
		title: string;
		from: string;
		to: string;
		inverse: string;
	};
}

export interface Message extends Contract {
	data: {
		payload: {
			message: string;
			alertsGroup: string[];
			mentionsGroup: string[];
			alertsUser: string[];
			mentionsUser: string[];
		};
	};
}

export interface SdkQueryOptions extends QueryOptions {
	ignoreMask?: boolean;
}
