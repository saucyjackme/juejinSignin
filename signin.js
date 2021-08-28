const schedule = require("node-schedule");
const fetch = require('node-fetch');

const headers = {
    'content-type': 'application/json; charset=utf-8',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'sec-ch-ua': '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    referer: 'https://juejin.cn/',
    accept: '*/*',
    cookie:"_ga=GA1.2.979248823.1625709153; passport_csrf_token_default=4581e494e205c38a92af79d4b71c7e64; passport_csrf_token=4581e494e205c38a92af79d4b71c7e64; _tea_utm_cache_2608={%22utm_source%22:%2220210801%22%2C%22utm_medium%22:%22web%22%2C%22utm_campaign%22:%2231day%22}; _gid=GA1.2.1784476286.1629870419; sid_guard=36083848da879def01949734fffeeb58%7C1630139086%7C5184000%7CWed%2C+27-Oct-2021+08%3A24%3A46+GMT; uid_tt=22133b8fc02c302a0e7718b25472cfb7; uid_tt_ss=22133b8fc02c302a0e7718b25472cfb7; sid_tt=36083848da879def01949734fffeeb58; sessionid=36083848da879def01949734fffeeb58; sessionid_ss=36083848da879def01949734fffeeb58; sid_ucp_v1=1.0.0-KDE5NTc1MDQ5Nzk4N2JhOWQwYWEwZDdhNDgxOGNiZmYwNDRlNWNkOGIKFwidl_Ctio2oAxDO5aeJBhiwFDgCQO8HGgJsZiIgMzYwODM4NDhkYTg3OWRlZjAxOTQ5NzM0ZmZmZWViNTg; ssid_ucp_v1=1.0.0-KDE5NTc1MDQ5Nzk4N2JhOWQwYWEwZDdhNDgxOGNiZmYwNDRlNWNkOGIKFwidl_Ctio2oAxDO5aeJBhiwFDgCQO8HGgJsZiIgMzYwODM4NDhkYTg3OWRlZjAxOTQ5NzM0ZmZmZWViNTg; n_mh=cgG-3zp7rtm_Y0ogsFVVX6AfvKO8AXszYfznLHmAPtg; MONITOR_WEB_ID=d5a8f5ac-cf59-40ea-a341-0cf548376e76"
};

// 查询今日是否已经签到
async function isSignin(){
    const { err_no, err_msg, data  }  = await fetch('https://api.juejin.cn/growth_api/v1/get_today_status', { headers, method: 'GET', credentials: 'include' }).then( res => res.json() );
    return err_no;
}

//响应成功示例
// { err_no: 0, err_msg: 'success', data: { incr_point: 100, sum_point: 146 } }
//todt 15001 您今日已完成签到，请勿重复签到 null
async function startSignin(){
    const { err_no, err_msg, data  } = await fetch('https://api.juejin.cn/growth_api/v1/check_in', { headers,  method: 'POST', credentials: 'include' }).then( res => res.json() );
    return err_no;
}

//查询是否有免费抽奖次数
async function isLottery(){
    const { err_no, err_msg, data  } = await fetch('https://api.juejin.cn/growth_api/v1/lottery_config/get', { headers,  method: 'GET', credentials: 'include' }).then( res => res.json() );
    return err_no;
}

//开始执行免费抽奖
async function startLottery(){
    const { err_no, err_msg, data  } = await fetch('https://api.juejin.cn/growth_api/v1/lottery/draw', { headers,  method: 'POST', credentials: 'include' }).then( res => res.json() );
    return err_no;
}

async function signin(){
    console.log(1111)
}


signin()