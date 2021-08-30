const fetch = require('node-fetch');
const JUEJIN = {
    headers:{
        'content-type': 'application/json; charset=utf-8',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        referer: 'https://juejin.cn/',
        accept: '*/*',
        cookie:null
    },
    checkIsSignin(){
        return new Promise( ( resolve, reject ) =>{
            fetch('https://api.juejin.cn/growth_api/v1/get_today_status', { 
                headers:this.headers, 
                method: 'GET', 
                credentials: 'include' 
            })
            .then( config => config.json())
            .then( res => {
                console.log('111',res)
                res.data === false ? resolve(true) : reject( false )
            } );
        })
        
    },
    signin(){
        return new Promise( resolve =>{
            fetch('https://api.juejin.cn/growth_api/v1/check_in', { 
                headers:this.headers,  
                method: 'POST', 
                credentials: 'include' 
            })
            .then( config => config.json() )
            .then( ({ data }) => {
                resolve( data.sum_point )
            });
        })
    },
    check_in(){
        return new Promise( (resolve,reject) =>{
            fetch('https://api.juejin.cn/growth_api/v1/lottery_config/get', { 
                headers:this.headers,  
                method: 'GET', 
                credentials: 'include' 
            })
            .then( config => config.json() )
            .then( res => {
                res.data.free_count === 1 ? resolve(1) : reject(0) 
            });
        })
    },
    draw(){
        return new Promise( resolve =>{
            fetch('https://api.juejin.cn/growth_api/v1/lottery/draw', { 
                headers:this.headers,  
                method: 'POST', 
                credentials: 'include' 
            })
            .then( config => config.json() )
            .then( ({ data }) => {
                resolve(data.lottery_name)
            });
        })
    }
}
//签到
function SIGNIN( current_user_name ){
    return new Promise( resolve =>{
        JUEJIN.checkIsSignin().then( () =>{
            JUEJIN.signin().then( sum_point =>{
                DRAW().then( res => {
                    resolve([`签到成功！当前总矿石数${ sum_point }`, res])
                })
            })
        }).catch( err =>{
            DRAW().then( res => {
                resolve( [`已经签到过了`, res] )
            })
        })
    })
}
//免费抽奖
function DRAW(){
    return new Promise( resolve =>{
        JUEJIN.check_in()
        .then( () =>{
            JUEJIN.draw()
            .then( lottery_name =>{
                resolve(`免费抽奖成功：${lottery_name}`)
            })
        })
        .catch(err =>{
            resolve('没有免费抽奖次数了')
        })
    })
}

function notifyDingTalk(content){
    let data = {
        "msgtype": "text",
        "text":{
            "content": content 
        },
        "at":{
            "atMobiles": [
                "18720706348"
            ], 
        }
    }
    fetch('https://oapi.dingtalk.com/robot/send?access_token=cc54112dbe4d1505569a14d7b79fcf1dba9158543dc15db8b36a01f26d1e1aa3', { 
        headers:{ "Content-Type": "application/json" }, 
        method: 'POST',
        body:JSON.stringify(data)
    })
    .then( config => config.json())
    .then( res => {
        console.log(res)
    });
}

module.exports = {
    api:JUEJIN,
    startSignin:SIGNIN,
    notifyDingTalk,
}