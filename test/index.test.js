const timeout = require('../src');
const sinon = require('sinon');

test('dx-libs/timeout', async () => {
    const fnSpy = sinon.spy();
    const prom = timeout(fnSpy, 100);

    expect(fnSpy.called).toBe(false);

    await prom;

    expect(fnSpy.called).toBe(true);
});

test('dx-libs/timeout cancel', async () => {
    const fnSpy = sinon.spy();
    const prom = timeout(fnSpy, 1000);

    expect(fnSpy.notCalled).toBe(true);
    prom.cancel();

    await prom;

    expect(fnSpy.notCalled).toBe(true);
});