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

// TODO: Rehacer
test('dx-libs/timeout wait', async () => {
    const ms = 1000;
    const time = process.hrtime();
    await timeout(ms);
    const hrtime = process.hrtime(time);
    const milliseconds = ((hrtime[0] * 1e9) + hrtime[1]) / 1e6;

    expect(Math.floor(milliseconds)).toBe(ms);
});