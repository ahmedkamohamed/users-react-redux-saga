let api = {

  getData(){
    let data = require('./api.json');
    return new Promise((resolve, reject)=>{
      return resolve(data);
    })
  }


}

export default api;
