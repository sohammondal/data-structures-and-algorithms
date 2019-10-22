export class HashTable {
    data: Array<any>
    size: number
    constructor(size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    _hash(key: String) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key: string, value: any) {
        if (key) {
            const address = this._hash(key);
            if (!this.data[address]) {
                this.data[address] = [];
            }
            this.data[address].push([key, value]);
        } else {
            throw new Error('Key must be a string.')
        }
    }

    get(key: string) {
        if (key) {
            const address = this._hash(key);
            const data = this.data[address];
            if (data && data.length > 0) {
                for (let d of data) {
                    if (d[0] === key) {
                        return d[1];
                    }
                }
            }
        } else {
            throw new Error('Key must be a string.')
        }
    }

    keys() {
        let keys = [];
        for (let d of this.data) {
            if (d && d.length > 0) {
                for (let item of d) {

                    keys.push(item[0]);
                }
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for (let d of this.data) {
            if (d && d.length > 0) {
                for (let item of d) {
                    values.push(item[1]);
                }
            }
        }
        return values;
    }
}