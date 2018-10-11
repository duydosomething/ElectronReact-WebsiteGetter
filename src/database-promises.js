const Datastore = require('nedb-promises')

class DatabasePromises {
  constructor(dbName) {
    // this.users2 = Datastore.create({ filename: 'users2.db', autoload: true });
    this.dbName = dbName;
    this.users2 = Datastore.create(`./${this.dbName}.db`);

  }

  insert(item){
      return this.users2.insert(item);
  }

  find(item){
      return this.users2.findOne({name: item.name})
  }

  findAll(){
    return this.users2.find({})
  }

  async delete(item){
    let result = await this.users2.remove({name: item.name});
    this.users2.persistence.compactDatafile();
    return result

  }


}

module.exports = DatabasePromises;
