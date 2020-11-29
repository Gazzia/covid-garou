import Player from "./Player";
import Role from "./Role";
import {nanoid} from "nanoid";

export default class Village {
	id: string;
	name: string;
	players: Player[];
	roles: Role[];

	constructor() {
		this.id = nanoid();
	}
}
