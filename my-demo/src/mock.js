const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
	code: 200,
	msg: '操作成功',
	data: null
}

Mock.mock('/captcha', 'get', ()=> {

    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage('120x40', 'p7n5w')
    }

    return Result
})

Mock.mock('/login', 'post', () => {

    Result.code = 400
    Result.msg = 'XXXX'

	return Result
})