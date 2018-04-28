const html_router = (app, fs) => {

let home
let survey

fs.readFile('./app/public/home.html', (err, data) => {
    if (err) throw err;
    home = data.toString('utf-8')
});
fs.readFile('./app/public/survey.html', (err, data) => {
    if (err) throw err;
    survey = data.toString('utf-8')
});

app.get('/', function(req, res){
  res.send(home);
});
app.get('/survey', function(req, res){
  res.send(survey);
});


}//end html_router

module.exports = html_router