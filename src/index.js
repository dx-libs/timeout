'use strict';

const timeout = (fn, timeout) => {
    const wrapper = {
        cancel: () => {}
    };

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
