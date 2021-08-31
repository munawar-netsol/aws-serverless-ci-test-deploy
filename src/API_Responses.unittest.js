const Responses = require('./API_Responses');
test('Response is object', () => {
    expect(typeof Responses).toBe('object');
})

test('_404', () => {
    const res = Responses._400({ name: 'josh'});
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Content-Type']).toBe('application/json');
})