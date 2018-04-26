/**
 * Created by lyingc on 2018/4/26.
 */
const runTimes = async (func, times, timeout = 20000) => {
    for (let i = 0; i < times; i++) {
        try {
            return await runTimeout(func, timeout);
        } catch(e) {
            console.log(e.message);
        }
    }
};

const runTimeout = async (func, timeout = 20000) => {
    return await Promise.race([
        func(),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('操作超时'));
            }, timeout)
        }),
    ]);
};

export default {runTimes}