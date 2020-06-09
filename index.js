var express = require('express');
var cors = require('cors')
var app = express();
var request = require('request');
app.use(cors());

app.post('/uwu', async function(req, res)
{
	var options = {
		'method': 'POST',
		'url': 'https://api.mojang.com/orders/statistics',
		'headers': {
		'Content-Type': 'application/json'
	},
		body: JSON.stringify({"metricKeys":["item_sold_minecraft","prepaid_card_redeemed_minecraft"]})
	}
	
	request(options, function (error, response) {
		if (error) throw new Error(error);
		res.send(JSON.parse(response.body).total.toString())
	});
});

app.get('/', async function(req, res) {
	res.sendFile(__dirname + '/web/index.html');
})

app.listen(6969, function () {
   console.log("App listening at port 6969");
});
