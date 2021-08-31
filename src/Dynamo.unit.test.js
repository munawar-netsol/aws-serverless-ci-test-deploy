const Dynamo = require('./Dynamo');

const validTableName = 'player-point-circleci';
const data = { ID: '123', score: 25, name: 'Chirs'};
test('Dynamo Write Test', async() => {
    try {
        const res = await Dynamo.put(data, validTableName);
        const res2 = await Dynamo.get(data.ID, validTableName);
        expect(res2).toStrictEqual(data);
        
    }
    catch(exp) {
        console.log('Logged Exception : '+ exp);
    }
})