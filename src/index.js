'use strict';

const timeout = (func, timeoutInMilliseconds) => {
    const wrapper = {
        cancel: () => {}
    };

    const fn = typeof func === 'number' && timeoutInMilliseconds === undefined ? () => true : func;
    const timeout = typeof func === 'number' && timeoutInMilliseconds === undefined ? func : timeoutInMilliseconds;

    const prom = new Promise((resolve) => {
        const id = setTimeout(() => resolve(fn()), timeout);

        wrapper.cancel = () => {
            clearTimeout(id);

            resolve(undefined);
        };
    });

    Object.assign(prom, wrapper);

    return prom;
};

module.exports = timeout;
