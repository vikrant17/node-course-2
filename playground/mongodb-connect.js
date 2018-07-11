const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, client) => {
    
    if (err) 
        return console.log('could not connect to db');
    
    console.log('successfully connected to db');

    const db = client.db('Todos');

    // insert 
    // db.collection('todos').insertOne({
    //     note: 'byedf'
    // }, (err, result) => {
    //     if (err)
    //         return console.log(err)
    //     console.log(result.ops);
    // });

    db.collection('todos').find({
        note: "bhe"
    }).toArray()
        .then(docs => {
            console.log(docs);
        }, err => {
            console.log(err);
        })

    client.close();
});