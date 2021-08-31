const createPlayerScore = require('./createPlayerScore');
const APIGatewayRequest = require('./getApiGateway');


describe('Test GetPlayerScore Integration Test', () => {
    test('If GetPlayerScore is an API', async () => {
        const event = APIGatewayRequest({
            body: {
                name: 'sam',
                score: 145
            },
            pathParameters: {
                    ID : '123'
            },
            method: 'post'
        })
        const res = await createPlayerScore.handler(event);
        expect(res.body.name).toEqual(event.body.name);
    });
});