var proxy = require('redbird')({port: 4010});
    fs = require('fs');
    jsonData = JSON.parse(fs.readFileSync('/app/node-apps/node-webserver/config/config.json', 'utf8'));

    env = process.env.NODE_ENV || 'prod';

   if(env === 'prod') {
   var jsonvalue = jsonData.prod.url;
   } else {
   var jsonvalue = jsonData.dr.url;
   }

//    envconfig = conf.env.url;

proxy.register("http://el4189.ebc.local:4010", jsonvalue);
