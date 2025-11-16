document.addEventListener("DOMContentLoaded", function() {

  // ui elements
    const displayData = document.getElementById("displayData");
    const getFreshData = document.getElementById("getFreshData");

    // adafruit io setup
    const username = "username";
    const activeKey = "activeKey";
    const IO = new AdafruitIO(username, activeKey);

    IO.setLimit(1); // set limit to 1 to get only the latest data point

    // request fresh data on click
    getFreshData.addEventListener("click", function() {
        IO.getData("temperature", function(data){
            // console.log(data.feed, data.json);
            
            // display the latest temperature value
            displayData.innerText = data.json[0].value;
        });

        
    });

});


