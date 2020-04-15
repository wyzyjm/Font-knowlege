let express = require('express');
let app = express()


var connection = mysql.createConnection({
	host: 'localhost', // 主机地址
	user: 'rooter', // 用户名
	password: 'wyz@13700702559', // 密码
	database: 'mydb', // 数据库名称
});

function query() {
	// 连接数据库
	connection.connect();

	// 查询
	connection.query('SELECT * FROM sp_user', (err, res) => {
		if (err) throw err;
		console.log(res);
	})
	connection.end();

}
app.get('/', (req, res) => {
	res.send({
		name: '小明',
		age: 18
	})
})


Capp.listen(3000, () => {
	console.log('服务开启在 : localhost:3000 端口!')
})
