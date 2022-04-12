const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
// 用于jwt加密的密钥
app.set('secret', '12345678')

// 处理跨域
app.use(require('cors')())
// 解析JSON格式的请求体数据，否则req.body无法获取到数据
app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  // 根据用户名从数据库中查找用户，再校验密码
  // 校验失败则返回错误，校验成功则执行后续操作
  if (username === 'admin' && password === '123') {
    // 第一个参数是要散列的数据，第二个参数是密钥，防止篡改
    const token = jwt.sign({ username }, app.get('secret'))
    res.status(200).send({ username, token, message: '登录成功！' })
  } else {
    res.status(401).send({ message: '用户名或密码错误！' })
  }
})

app.listen(8090, () => {
  console.log('网站服务器启动成功！8090')
})