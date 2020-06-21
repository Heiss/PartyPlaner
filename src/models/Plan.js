import { Entry } from "./Entry"

export class Plan {
    constructor(id, entries = []) {
        this.id = id
        this.entries = entries
    }

    static load(dict) {
        try {
            return new Plan(dict.id, Entry.loads(dict.entries))
        } catch {
            return new Plan(dict.id)
        }
    }

    get json() {
        return JSON.stringify(this)
    }
}