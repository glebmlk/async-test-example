export class Actions {
    async fillObjectFields(obj, fields) {
        // some code

        obj.fill(fields); // !!!! not awaiting

        // this is the proper code
        // await obj.fill(fields);

        // object has empty fields property
        console.log(obj);

        // object is saved with empty fields
        await this.save(obj);
        await Promise.resolve(); // some other promise
    }

    // save to database
    async save(obj) {
        return Promise.resolve(obj);
    }
}