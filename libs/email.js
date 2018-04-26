/**
 * Created by lyingc on 2018/4/26.
 */
import userInfo from '../userInfo';
const nodemailer = require('nodemailer');

const transpoter = nodemailer.createTransport(userInfo.email.sender);

const data = {
    from: userInfo.email.sender.auth.user,
    to: userInfo.email.receivers,
    subject: 'test',
    text: 'hello world',
};

const sendMail = async (subject, text) => {
    const newData = Object.assign({}, data, {subject, text});
    return await new Promise((resolve, reject) => {
        transpoter.sendMail(newData, (error, info) => {
            if (error) {
                reject(error);
            }
            resolve(info);
        });
    });
};

export default {sendMail}