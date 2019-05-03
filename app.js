var request = require("request");
const appID = "d4d95e1b-3dec-4373-9892-7db42ee53df3";
const subscriptionKey = "6c24974393034473a4a951433d139350";
let query = "I hate  it here"; 
var url = "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/"+
    appID+"?verbose=true&timezoneOffset=-360&subscription-key="+ 
    subscriptionKey+"&q="+query;

request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body)//.topScoringIntent.intent) // Print the json response
        }
    }
)