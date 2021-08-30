const schedule = require("node-schedule");
const JUEJIN = require('./config/index');
const userCookieList = [
    
]


async function start(){
    schedule.scheduleJob({ hour: 00, minute: 3 }, async function () {
        const dingdingInfo = []
        for( let user of  userCookieList){
            const { cooike, userName } = user;
            JUEJIN.api.headers.cookie = cooike;
            const signinResult = await JUEJIN.startSignin();
            dingdingInfo.push(`用户：【${userName} 】  签到情况：【${signinResult}】`)
        }
        //钉钉通知
        JUEJIN.notifyDingTalk(dingdingInfo.join("\n"))
    });

    // const dingdingInfo = []
    // for( let user of  userCookieList){
    //     const { cooike, userName } = user;
    //     JUEJIN.api.headers.cookie = cooike;
    //     const signinResult = await JUEJIN.startSignin();
    //     dingdingInfo.push(`用户：【${userName} 】  签到情况：【${signinResult}】`)
    // }
    // JUEJIN.notifyDingTalk(dingdingInfo.join("\n"))
}

// setInterval( () =>{
//     JUEJIN.api.headers.cookie = ""
//     JUEJIN.api.draw().then( res =>{
//         console.log(res)
//     })
// },50)

start()
