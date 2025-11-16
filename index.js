class AdafruitIO{
    constructor(username, aiokey, limit = 10) {
      this.username = username;
      this.aiokey = aiokey;
      this.limit = limit;
    }
    
    getData(feed, callback = console.log) {
      fetch(`https://io.adafruit.com/api/v2/${this.username}/feeds/${feed}/data?limit=${this.limit}`, {
          headers: {
            'X-AIO-Key': this.aiokey
          }
        })
        .then(async resp => {
          var json = await resp.json();
          return { feed, json };
        })
        .then(json => callback(json))
    }

    setLimit(newLimit){
      this.limit = newLimit;
    }
    
    postData(feed, value, callback = console.log){
      fetch(`https://io.adafruit.com/api/v2/${this.username}/feeds/${feed}/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'X-AIO-Key': this.aiokey
        },
        body: JSON.stringify({
          datum: {
            value: value
          }
        })
      })
      .then(resp => resp.json())
      .then(json => callback(json))
    }
  }