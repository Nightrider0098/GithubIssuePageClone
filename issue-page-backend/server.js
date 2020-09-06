const express = require('express')
const app = express()
const con = require('./mysql-connection');
const port = process.env.PORT || 5400;
const bodyParser = require('body-parser');
const cors = require('cors')
var corsOption = { origin: 'http://localhost:3000' }
app.use(cors())
app.use(bodyParser)

app.post('add-issue', (req, res) => {
    var topic = req.body.topic
    var author = req.body.author
    var tags = req.body.tags
    con.query('insert into IssueDatabase(topic,author,tags,creationdate,comments,commentcount,closed) values("' + topic + '","' + author + '","' + JSON.stringify(tags) + '",current_timestamp(),"[]",0,0)', (err) => {
        if (err) console.log(err);
        else console.log("new issue arrived");
    })
})
app.get('list-issue', (req, res) => {
    var page = req.params.page;
    var id = req.params.id
    var isopen = req.params.isopen || undefined;
    if (page !== undefined)
        if (isopen === undefined) {
            con.query("select (id,topic,author,tags,creationdate,commentcount,closed) from IssueDatabase limit " + page * 10 + ",10", (err, result) => {
                res.send(result[0])
            })
        }
        else {
            con.query("select * from IssueDatabase where id=" + id, (err, result) => {
                res.send(result[0])
            })

        }

})

app.patch("update-issue", (req, res) => {
    var topic = req.body.topic;
    var closed = req.body.closed;
    var id = req.body.id
    if (topic === undefined && closed !== undefined) {
        con.query('update table issueDatabase set topic="' + topic + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ', er) }
            else console.log("issue update with update id= " + id);
        })
    }
    else if (topic !== undefined && closed === undefined) {
        con.query('update table issueDatabase set closed="' + closed + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ',) }
            else console.log("issue update with update id= " + id);
        })
    }
    else if (topic !== undefined && closed !== undefined) {
        con.query('update table issueDatabase set closed="' + closed + '" topic="' + topic + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ',) }
            else console.log("issue update with update id= " + id);
        })
    }
})

app.delete('delete-issue', (req, res) => {
    var id = req.body.id
    con.query('delete from issueDatabse where id=' + id, (err, result) => {
        if (err) { console.log("err occured while removing recored with id " + id) }
        else { console.log(id + " record removed!!") }
    })
})



app.listen(port, () => {
    console.log("listening to Signal..........")
})