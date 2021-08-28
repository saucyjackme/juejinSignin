const schedule = require("node-schedule");
const JUEJIN = require('./config/index');
const userCookieList = [
   
]


function start(){
    schedule.scheduleJob({ hour: 1, minute: 50 }, function () {
        console.log("开始签到");
        userCookieList.forEach( cooike =>{
            JUEJIN.api.headers.cookie = cooike;
            JUEJIN.startSignin().then( signinResult =>{
                console.log(signinResult)
            })
        })
    });
    
}


start()
