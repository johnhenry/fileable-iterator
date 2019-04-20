const Iterator = require('..');
const tape = require('tape');
tape('Fileable Iterator Test`', async ({ equal, end }) => {
    const mockComponent = {
        type: function* () {
            yield true
        }
    }
    mockComponent.type['FILEABLE COMPONENT'] = true;
    const iterator = Iterator(mockComponent, {});
    equal(
        (await iterator.next()).value
        , true
        , 'should yeild result of fileable component')
    end();
});
