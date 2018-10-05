var Datastore = require('nedb');


class Database {
  constructor() {
    this.users = new Datastore({ filename: 'users.db', autoload: true });

  }

  insert(item){

    this.users.findOne({ name: item.name }, (err, doc) =>{
      if(doc!==null){
        console.log(`${item.name} has already been added`)
      }
      else{
        this.users.insert(item, (err, d) => {
          console.log(`${d.name} has been added`)
        })
      }
    })
  }

  delete(item){

    this.users.findOne({name: item.name}, (err, doc) => {
      if (doc !== null){
        this.users.remove({name : item.name}, {}, (err, d) => {
          console.log(`${item.name} has been removed`)
          this.users.persistence.compactDatafile()
        })
      }
      else{
        console.log('User not found');
      }
    })
  }

  find(item){
    this.users.findOne({name: item.name}, (err, doc) => {
      if (doc !== null){
        console.log(`${item.name} exists!`)

      }
      else{
        console.log(`${item.name} does not exist!`)

      }
    })
  }
}

module.exports = Database;
