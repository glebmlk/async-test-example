import {Actions} from './action';
import {SomeObject} from './object'

const saveMock = jest.fn();

class ActionsTest extends Actions {
    save(obj) {
        saveMock(obj);
    }
}

describe('Actions', () => {
    it('check saving of updated object', async () => {
        const actions = new ActionsTest();
        const obj = () => new SomeObject();
        const fields = () => ({a: 2, b: 3});

        await actions.fillObjectFields(obj(), fields());

        // in actual code obj is saved without fields
        // but this test passes
        expect(saveMock).toHaveBeenCalledWith({
            ...obj(),
            fields: fields(),
        });
    });

});