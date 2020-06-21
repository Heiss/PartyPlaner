export class Entry {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    static load(entry) {
        return new Entry(entry.name, entry.price)
    }

    static loads(entries) {
        var entries = []
        entries.forEach(function (index, value) {
            var entry = Entry.load(value)
            entries.append(entry)
        })
        return entries
    }
}