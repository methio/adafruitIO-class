# adafruitIO-class
Helper Class to use adafruitIO HTTP API


## How to use

### Load the library
add the following tag to your html header
```html
<script src="https://cdn.jsdelivr.net/gh/methio/adafruitIO-class@latest/index.js"></script>
```

### Create an instance of the class 
```javascript
const IO = new AdafruitIO(username, activeKey);
```
Use your adafruit credentials

### You now have access to two methods 

#### getData()
the .getData() method that get data from a feed as an object.
data.feed -> feed name 
data.json -> array of datas

```javascript
IO.getData(feed, function(data) {
  console.log(data.feed, data.json);
});
```

#### postData()
the .postData() method that post data to a feed.
It takes two parameters:
- feed → where to post
- value → what to post

```javascript
IO.postData(feed, value);
```

### Other methods 

#### setLimit()

The .setLimit() method allow you to limit the amount of data return by the .getData() method. 

```javascript 
IO.setLimit(1);
```

The line of code above will reduce the number of values returned by the .getData() to 1.