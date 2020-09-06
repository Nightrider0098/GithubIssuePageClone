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
const uuid = require("uuid-v4")
var update_id = "";
var issueCount = 0;
var closeCount = 0;
app.post('/add-issue', (req, res) => {
    var topic = req.body.title
    var author = req.body.author || 'rahul0901'
    var tags = req.body.tags
    console.log('accepted')
    con.query('insert into IssueDatabase(topic,author,tags,creationdate,comments,commentcount,closed) values("' + topic + '","' + author + '","' + JSON.stringify(tags) + '",current_timestamp(),"[]",0,0)', (err) => {
        if (err) console.log(err);
        else console.log("new issue arrived");
        res.send('ok')
        issueCount += 1
        console.log("sucess!!")
        update_id = uuid()
        con.query('insert into updateId values("' + update_id + '")', (err) => { if (err) console.log("error occured while inserting updated id", err) })
    })
})
app.get('/list-issue', (req, res) => {
    var page = req.query.page;
    var id = req.query.id
    var isclosed = req.query.isclosed || undefined;
    if (isclosed === 'undefined') isclosed = undefined;
    // console.log(id,page)
    if (id === undefined) {
        if (isclosed === undefined)
            con.query("select id,topic,author,tags,creationdate,commentCount,closed from IssueDatabase limit " + page * 10 + ",10", (err, result) => {
                if (err) console.log(err)
                else res.send({ data: result, updateId: update_id, issueCount: issueCount, closeCount: closeCount })
            })
        else {
            con.query("select id,topic,author,tags,creationdate,commentCount,closed from IssueDatabase where closed=" + isclosed + " limit " + page * 10 + ",10", (err, result) => {
                if (err) console.log(err)
                else res.send({ data: result, updateId: update_id, issueCount: issueCount, closeCount: closeCount })
            })
        }
    }
    else {

        con.query("select * from IssueDatabase where id=" + id, (err, result) => {
            if (err) console.log('error \n', err)
            res.send(result[0])
        })
    }
})

app.patch("/update-issue", (req, res) => {
    var topic = req.query.title;
    var closed = req.query.closed || undefined;
    var id = req.query.id
    if (topic === undefined && closed !== undefined) {
        con.query('update  issueDatabase set closed=' + closed + ' where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ', err) }
            else {
                console.log("issue update with update id= " + id);
                res.send('ok')
            }
        })
        // console.log('123')
    }
    else if (topic !== undefined && closed === undefined) {
        // console.log('123')
        con.query('update  issueDatabase set topic="' + topic + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ',err) }
            else {
                console.log("issue update with update id= " + id);
                res.send('ok')
                if (closed === 1) { closeCount += 1; }
            }
        })
    }
    else if (topic !== undefined && closed !== undefined) {
        if (closed === 1) { closeCount += 1; }
        con.query('update  issueDatabase set closed=' + closed + '  , topic="' + topic + '" where id=' + id, (err, result) => {
            if (err) { console.log('err occured \n ',err) }
            else {
                console.log("issue update with update id= " + id);
                res.send('ok');
            }

        })
    }
    update_id = uuid()
    con.query('insert into updateId values("' + update_id + '")', (err) => { if (err) console.log("error occured while inserting updated id", err) })
    // res.send('No such issue id')
})

app.delete('/delete-issue', (req, res) => {
    var id = req.query.id || req.body.id || req.params.id
    con.query('select * from issueDatabase where id=' + id, (err, data) => {
        if (data.length !== 0)
            con.query('delete from issueDatabase where id=' + id, (err, result) => {
                if (err) { console.log("err occured while removing recored with id " + id, err) }
                else {
                    console.log(id + " record removed!!")
                    res.send('ok')
                    issueCount -= 1;
                    if (data[0]['closed'] == 1) { closeCount -= 1 }

                }
            })
        else res.send('No such record')
    })

    update_id = uuid()
    con.query('insert into updateId values("' + update_id + '")', (err) => { if (err) console.log("error occured while inserting updated id", err) })
})

con.query('select count(*) from issueDatabase', (err, result) => {
    if (err) console.log(err)
    else issueCount = result[0]['count(*)']

})

con.query('select count(*) from issueDatabase where closed=0', (err, result) => {
    if (err) console.log(err)
    else closeCount = result[0]['count(*)']
})

con.query('select * from updateid', (err, result) => {
    update_id = result[result.length - 1]['last_update_id']

})


app.listen(port, () => {
    console.log("listening to Signal..........")
})