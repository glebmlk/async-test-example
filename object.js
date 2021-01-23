export class SomeObject {
    constructor() {
        this.fields = {};
    }

    async fill(fields) {
        await Promise.resolve().then(() => {this.fields = fields;});
    }
}
