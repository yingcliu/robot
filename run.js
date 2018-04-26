/**
 * Created by lyingc on 2018/4/26.
 */
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});
import email from './libs/email';
import runHelper from './libs/runHelper';
import userInfo from './userInfo';

const login = async () => {
    await nightmare.goto('http://localhost:8081');
    const result = await Promise.race([
        nightmare.wait('#registerBox').then(() => 'login'),
        nightmare.wait('#userInfo').then(() => 'logined'),
    ]);
    if (result === 'logined') {
        return;
    }
    await nightmare.click('#registerBox p a');
    await nightmare.wait('#loginBox');
    await nightmare.type('#loginBox input[name="username"]', userInfo.username);
    await nightmare.type('#loginBox input[name="password"]', userInfo.password);
    await nightmare.click('#loginBox .submit');
};

const run = async () => {
    await runHelper.runTimes(login, 5);
    // email.sendMail('test', 'hello world!');
};

run();
