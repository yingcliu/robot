/**
 * Created by lyingc on 2018/4/26.
 */
export default {
    username: 'admin',
    password: 'admin',

    email: {
        sender: {
            host: 'smtp.exmail.qq.com',
            port: 465,
            secure: true,
            auth: {
                user: 'xxx',
                pass: 'xxx',
            }
        },
        receivers: [
            '814585748@qq.com',
        ]
    }
}