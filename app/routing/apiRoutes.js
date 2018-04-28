let total_difference = require('./total_difference.js')

const api_router = (app, fs) => {

app.post('/api/friends', (req, res) => {
    fs.appendFile('./app/data/friends.js', '\r\n'+JSON.stringify(req.body), (err) => {
        if (err) throw err;
    });
    let match = total_difference()
    res.send(match)
});

app.get('/api/friends', (req, res) => {
    fs.readFile('./app/data/friends.js', 'utf8', (err, data) => {
        if (err) throw err;
        let all_friends = data.split('\r\n')
        res.send(all_friends.map((item, index) => {
            return JSON.parse(all_friends[index])
            }))
    });

})

}//end of api_router

module.exports = api_router

