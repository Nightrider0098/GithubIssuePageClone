const express = require('express')
const app = express()
const con = require('./mysql-connection');
const port = process.env.PORT || 5400;
const bodyParser = require('body-parser');
const cors = require('cors')
var corsOption = { origin: 'http://localhost:3000' }
app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser)
const uuid = require("uuid-v4")
var update_id = "";
app.post('add-issue', (req, res) => {
    var topic = req.body.topic
    var author = req.body.author
    var tags = req.body.tags
    con.query('insert into IssueDatabase(topic,author,tags,creationdate,comments,commentcount,closed) values("' + topic + '","' + author + '","' + JSON.stringify(tags) + '",current_timestamp(),"[]",0,0)', (err) => {
        if (err) console.log(err);
        else console.log("new issue arrived");
        res.send('ok')
        update_id = uuid()
        con.query('insert into updateId values("' + updated_id + '")', (err) => { if (err) console.log("error occured while inserting updated id", err) })
    })
})
app.get('/list-issue', (req, res) => {
    var page = req.query.page;
    var id = req.query.id
    var isopen = req.query.isopen || undefined;
    console.log(id,page)
    if (id === undefined) {

        con.query("select id,topic,author,tags,creationdate,commentCount,closed from IssueDatabase limit " + page * 10 + ",10", (err, result) => {
            if (err) console.log(err)
            else res.send({ data: result, updateId: update_id })
        })
    }
    else {

        con.query("select * from IssueDatabase where id=" + id, (err, result) => {
            if (err) console.log('error \n', err)
            res.send(result[0])
        })
    }
})

app.patch("/update-issue", (req, res) => {
    var topic = req.body.topic;
    var closed = req.body.closed;
    var id = req.body.id
    if (topic === undefined && closed !== undefined) {
        con.query('update table issueDatabase set topic="' + topic + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ', er) }
            else {
                console.log("issue update with update id= " + id);
                res.send('ok')
            }
        })
    }
    else if (topic !== undefined && closed === undefined) {
        con.query('update table issueDatabase set closed="' + closed + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ',) }
            else {
                console.log("issue update with update id= " + id);
                res.send('ok')
            }
        })
    }
    else if (topic !== undefined && closed !== undefined) {
        con.query('update table issueDatabase set closed="' + closed + '" topic="' + topic + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ',) }
            else {
                console.log("issue update with update id= " + id);
                res.send('ok');
            }

        })
    }
    update_id = uuid()
    con.query('insert into updateId values("' + updated_id + '")', (err) => { if (err) console.log("error occured while inserting updated id", err) })

})

app.delete('/delete-issue', (req, res) => {
    var id = req.body.id
    con.query('delete from issueDatabse where id=' + id, (err, result) => {
        if (err) { console.log("err occured while removing recored with id " + id) }
        else {
            console.log(id + " record removed!!")
            res.send('ok')
        }
    })
    update_id = uuid()
    con.query('insert into updateId values("' + updated_id + '")', (err) => { if (err) console.log("error occured while inserting updated id", err) })
})


con.query('select * from updateid', (err, result) => {
    update_id = result[result.length - 1]['last_update_id']
})

app.listen(port, () => {
    console.log("listening to Signal..........")
})