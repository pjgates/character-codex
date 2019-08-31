export function postDataToWebhook() {
    //get the values needed from the passed in json object
    var userName = "Batman";
    var userPlatform = "Windows XP";
    var userEmail = "Bruce@Gotham.com";
    //url to your webhook
    var webHookUrl = "https://discordapp.com/api/webhooks/504583802799128576/1kNjom2DQirBFV6leId_QbHe-qkZRI7btrnBRNYhTEYXxfTthSORUsP_GAx4ZCTk32rQ";

    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var oReq = new XMLHttpRequest();
    var myJSONStr = {
        "username": "Webhook",
        "avatar_url": "https://i.imgur.com/4M34hi2.png",
        "content": "Text message. Up to 2000 characters.",
        "embeds": [
          {
            "author": {
              "name": "Birdie♫",
              "url": "https://www.reddit.com/r/cats/",
              "icon_url": "https://i.imgur.com/R66g1Pe.jpg"
            },
            "title": "Title",
            "url": "https://google.com/",
            "description": "Text message. You can use Markdown here. *Italic* **bold** __underline__ ~~strikeout~~ [hyperlink](https://google.com) `code`",
            "color": 15258703,
            "fields": [
              {
                "name": "Text",
                "value": "More text",
                "inline": true
              },
              {
                "name": "Even more text",
                "value": "Yup",
                "inline": true
              },
              {
                "name": "Use `\"inline\": true` parameter, if you want to display fields in the same line.",
                "value": "okay..."
              },
              {
                "name": "Thanks!",
                "value": "You're welcome :wink:"
              }
            ],
            "thumbnail": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/3/38/4-Nature-Wallpapers-2014-1_ukaavUI.jpg"
            },
            "image": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/5/5a/A_picture_from_China_every_day_108.jpg"
            },
            "footer": {
              "text": "Woah! So cool! :smirk:",
              "icon_url": "https://i.imgur.com/fKL31aD.jpg"
            }
          }
        ]
      }

    //register method called after data has been sent method is executed
    oReq.addEventListener("load", (response: any) => {
        console.log('response: ', response);  // XX
    });
    oReq.open("POST", webHookUrl, true);
    oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    oReq.send(JSON.stringify(myJSONStr));
}