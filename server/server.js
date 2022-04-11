const express = require('express')
const app = express()

// 处理跨域
app.use(require('cors')())
// 解析JSON格式的请求体数据，否则req.body无法获取到数据
app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  // 根据用户名从数据库中查找用户，再校验密码
  // 校验失败则返回错误，校验成功则执行后续操作

})

app.listen(8090, () => {
  console.log('网站服务器启动成功！8090')
})