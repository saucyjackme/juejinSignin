const schedule = require("node-schedule");
const JUEJIN = require('./config/index');
const userCookieList = [
    {
        userName:'铁猪',
        cooike:"_ga=GA1.2.959166188.1630249307; _gid=GA1.2.689699640.1630249307; passport_csrf_token_default=4684bad08790cc74f88502ef07be0cc3; passport_csrf_token=4684bad08790cc74f88502ef07be0cc3; sid_guard=c2a7fb63a94f6ea3a09005f86d7c038c%7C1630249324%7C5184000%7CThu%2C+28-Oct-2021+15%3A02%3A04+GMT; uid_tt=629c84e3256e175acb793644c1772dfe; uid_tt_ss=629c84e3256e175acb793644c1772dfe; sid_tt=c2a7fb63a94f6ea3a09005f86d7c038c; sessionid=c2a7fb63a94f6ea3a09005f86d7c038c; sessionid_ss=c2a7fb63a94f6ea3a09005f86d7c038c; sid_ucp_v1=1.0.0-KDVlMjg5MGUzNjJiOWQ3ZmIwOWNhMjJiZmVkODk4Y2QyNmVlYWY3ZWMKFwidl_Ctio2oAxDswq6JBhiwFDgCQO8HGgJsZiIgYzJhN2ZiNjNhOTRmNmVhM2EwOTAwNWY4NmQ3YzAzOGM; ssid_ucp_v1=1.0.0-KDVlMjg5MGUzNjJiOWQ3ZmIwOWNhMjJiZmVkODk4Y2QyNmVlYWY3ZWMKFwidl_Ctio2oAxDswq6JBhiwFDgCQO8HGgJsZiIgYzJhN2ZiNjNhOTRmNmVhM2EwOTAwNWY4NmQ3YzAzOGM; n_mh=cgG-3zp7rtm_Y0ogsFVVX6AfvKO8AXszYfznLHmAPtg; MONITOR_WEB_ID=a0787aa8-ca2d-4f05-9a4f-cfffaf6a5ff5"
    },
    {
        userName:"小号m",
        cooike:"_ga=GA1.2.396621682.1630249398; _gid=GA1.2.399914464.1630249398; passport_csrf_token_default=8fee45f6782bd68d319bec0ebf0618e9; passport_csrf_token=8fee45f6782bd68d319bec0ebf0618e9; sid_guard=27605c5452c12edd82d75b2e15ce3b68%7C1630249446%7C5184000%7CThu%2C+28-Oct-2021+15%3A04%3A06+GMT; uid_tt=33ecae41a0873a310ef87aea62ab9ab1; uid_tt_ss=33ecae41a0873a310ef87aea62ab9ab1; sid_tt=27605c5452c12edd82d75b2e15ce3b68; sessionid=27605c5452c12edd82d75b2e15ce3b68; sessionid_ss=27605c5452c12edd82d75b2e15ce3b68; sid_ucp_v1=1.0.0-KGMxNjNkNWZlMTNkNmYwZjk1ZmRkMjc2ZjBhNTE4Y2Q0Yjc3MDgxOTMKFwitzICzqoy-BhDmw66JBhiwFDgCQO8HGgJsZiIgMjc2MDVjNTQ1MmMxMmVkZDgyZDc1YjJlMTVjZTNiNjg; ssid_ucp_v1=1.0.0-KGMxNjNkNWZlMTNkNmYwZjk1ZmRkMjc2ZjBhNTE4Y2Q0Yjc3MDgxOTMKFwitzICzqoy-BhDmw66JBhiwFDgCQO8HGgJsZiIgMjc2MDVjNTQ1MmMxMmVkZDgyZDc1YjJlMTVjZTNiNjg; n_mh=UDLp6EQOMyssOYwdQ4xqcHEmaKX11xELH3ZZ-jF0tG0; MONITOR_WEB_ID=beafad38-37db-495a-8c1c-ee1d7cedfc0f"
    },
    {
        userName:"猪头",
        cooike:"_ga=GA1.2.1546388062.1630249618; _gid=GA1.2.1496230731.1630249618; passport_csrf_token_default=6e210d6c323a1a238968abe36005355e; passport_csrf_token=6e210d6c323a1a238968abe36005355e; sid_guard=79c0b4fc0212d68c86b6f18d079ad5b8%7C1630249635%7C5184000%7CThu%2C+28-Oct-2021+15%3A07%3A15+GMT; uid_tt=a533abb21c4733d0ef2c56f1ad012914; uid_tt_ss=a533abb21c4733d0ef2c56f1ad012914; sid_tt=79c0b4fc0212d68c86b6f18d079ad5b8; sessionid=79c0b4fc0212d68c86b6f18d079ad5b8; sessionid_ss=79c0b4fc0212d68c86b6f18d079ad5b8; sid_ucp_v1=1.0.0-KDFlMDEyMWYxMzhkODc4NDg1ODM0NjYxYzFiNDkzYTc2ZmQ3N2VkNTUKFwie1vCa3_WjAhCjxa6JBhiwFDgCQO8HGgJsZiIgNzljMGI0ZmMwMjEyZDY4Yzg2YjZmMThkMDc5YWQ1Yjg; ssid_ucp_v1=1.0.0-KDFlMDEyMWYxMzhkODc4NDg1ODM0NjYxYzFiNDkzYTc2ZmQ3N2VkNTUKFwie1vCa3_WjAhCjxa6JBhiwFDgCQO8HGgJsZiIgNzljMGI0ZmMwMjEyZDY4Yzg2YjZmMThkMDc5YWQ1Yjg; n_mh=Y_dtOBh8j7dgRQGR5ESZ_Ekp4YCnbNhnCK5Td7piG2o; MONITOR_WEB_ID=2c39af3a-0a71-4b37-ab30-d67336b1cf7d"
    },
    {
        userName:"何清",
        cooike:"_ga=GA1.2.1546388062.1630249618; _gid=GA1.2.1496230731.1630249618; passport_csrf_token_default=6e210d6c323a1a238968abe36005355e; passport_csrf_token=6e210d6c323a1a238968abe36005355e; sid_guard=79c0b4fc0212d68c86b6f18d079ad5b8%7C1630249635%7C5184000%7CThu%2C+28-Oct-2021+15%3A07%3A15+GMT; uid_tt=a533abb21c4733d0ef2c56f1ad012914; uid_tt_ss=a533abb21c4733d0ef2c56f1ad012914; sid_tt=79c0b4fc0212d68c86b6f18d079ad5b8; sessionid=79c0b4fc0212d68c86b6f18d079ad5b8; sessionid_ss=79c0b4fc0212d68c86b6f18d079ad5b8; sid_ucp_v1=1.0.0-KDFlMDEyMWYxMzhkODc4NDg1ODM0NjYxYzFiNDkzYTc2ZmQ3N2VkNTUKFwie1vCa3_WjAhCjxa6JBhiwFDgCQO8HGgJsZiIgNzljMGI0ZmMwMjEyZDY4Yzg2YjZmMThkMDc5YWQ1Yjg; ssid_ucp_v1=1.0.0-KDFlMDEyMWYxMzhkODc4NDg1ODM0NjYxYzFiNDkzYTc2ZmQ3N2VkNTUKFwie1vCa3_WjAhCjxa6JBhiwFDgCQO8HGgJsZiIgNzljMGI0ZmMwMjEyZDY4Yzg2YjZmMThkMDc5YWQ1Yjg; n_mh=Y_dtOBh8j7dgRQGR5ESZ_Ekp4YCnbNhnCK5Td7piG2o; MONITOR_WEB_ID=2c39af3a-0a71-4b37-ab30-d67336b1cf7d"
    },
    {
        userName:"谢林",
        cooike:"_ga=GA1.2.686785737.1630249714; _gid=GA1.2.1267233295.1630249714; passport_csrf_token_default=70b124b0722bfad2b587dc89ac5414f4; passport_csrf_token=70b124b0722bfad2b587dc89ac5414f4; sid_guard=cfa095a8ee0969bfa5583cb0df5653b7%7C1630249727%7C5184000%7CThu%2C+28-Oct-2021+15%3A08%3A47+GMT; uid_tt=4a610e2df557cd73edaeb2fc34ef2dfc; uid_tt_ss=4a610e2df557cd73edaeb2fc34ef2dfc; sid_tt=cfa095a8ee0969bfa5583cb0df5653b7; sessionid=cfa095a8ee0969bfa5583cb0df5653b7; sessionid_ss=cfa095a8ee0969bfa5583cb0df5653b7; sid_ucp_v1=1.0.0-KGZkYzg0ZTM2N2M1NjAwZThmYzY4NTRiOTBiODE1ZjI5NTZmYzZlZTEKFwiO9LC1qozSBhD_xa6JBhiwFDgCQO8HGgJsZiIgY2ZhMDk1YThlZTA5NjliZmE1NTgzY2IwZGY1NjUzYjc; ssid_ucp_v1=1.0.0-KGZkYzg0ZTM2N2M1NjAwZThmYzY4NTRiOTBiODE1ZjI5NTZmYzZlZTEKFwiO9LC1qozSBhD_xa6JBhiwFDgCQO8HGgJsZiIgY2ZhMDk1YThlZTA5NjliZmE1NTgzY2IwZGY1NjUzYjc; n_mh=-SEwyv3YnWwt0AqLpOk6CCRhXpFLpd9ubGlGIHnn204; MONITOR_WEB_ID=024a3f9e-420c-4aaf-8ba5-d5cb05c1a07c"
    },
    {
        userName:"何亚",
        cooike:"_ga=GA1.2.349609242.1630249827; _gid=GA1.2.769979292.1630249827; passport_csrf_token_default=8a9aa96ac0f1ce58d0f22ed51bd143d4; passport_csrf_token=8a9aa96ac0f1ce58d0f22ed51bd143d4; sid_guard=c25231b0602c2d6116d459a96193a198%7C1630249840%7C5184000%7CThu%2C+28-Oct-2021+15%3A10%3A40+GMT; uid_tt=702aad8a4f26041b12baa05c30ec9099; uid_tt_ss=702aad8a4f26041b12baa05c30ec9099; sid_tt=c25231b0602c2d6116d459a96193a198; sessionid=c25231b0602c2d6116d459a96193a198; sessionid_ss=c25231b0602c2d6116d459a96193a198; sid_ucp_v1=1.0.0-KDc1YmQzMGFiM2U4YzgyYWY1NGZmNjgyOWM2MDA4NjY0YmU3MmVmNDAKFgj-3eC1qoweEPDGrokGGLAUOAJA7wcaAmxmIiBjMjUyMzFiMDYwMmMyZDYxMTZkNDU5YTk2MTkzYTE5OA; ssid_ucp_v1=1.0.0-KDc1YmQzMGFiM2U4YzgyYWY1NGZmNjgyOWM2MDA4NjY0YmU3MmVmNDAKFgj-3eC1qoweEPDGrokGGLAUOAJA7wcaAmxmIiBjMjUyMzFiMDYwMmMyZDYxMTZkNDU5YTk2MTkzYTE5OA; n_mh=s85OnKxfD4aNBCiiagpGgMNAi0wWzG5npugQtUfPO_A; MONITOR_WEB_ID=18f83faf-563c-4080-90c0-a72396e9998a"
    },
    {
        userName:"大彪",
        cooike:"_ga=GA1.2.1633962013.1630249875; _gid=GA1.2.1223011319.1630249875; passport_csrf_token_default=fa03e0b5ba29dbdbf5e310a3a55b45f6; passport_csrf_token=fa03e0b5ba29dbdbf5e310a3a55b45f6; sid_guard=c3fda11cbd85082843dbb0d96d181d0e%7C1630249886%7C5184000%7CThu%2C+28-Oct-2021+15%3A11%3A26+GMT; uid_tt=eeb3fe3a997390370ec961a02d3e2e83; uid_tt_ss=eeb3fe3a997390370ec961a02d3e2e83; sid_tt=c3fda11cbd85082843dbb0d96d181d0e; sessionid=c3fda11cbd85082843dbb0d96d181d0e; sessionid_ss=c3fda11cbd85082843dbb0d96d181d0e; sid_ucp_v1=1.0.0-KGQ4NTAyMDlkN2NlZTA2Njc4NjQ1NGE0ZjNkZjRjMTg5MDVhNWMxNGUKFwjItKC2qozaBxCex66JBhiwFDgCQO8HGgJsZiIgYzNmZGExMWNiZDg1MDgyODQzZGJiMGQ5NmQxODFkMGU; ssid_ucp_v1=1.0.0-KGQ4NTAyMDlkN2NlZTA2Njc4NjQ1NGE0ZjNkZjRjMTg5MDVhNWMxNGUKFwjItKC2qozaBxCex66JBhiwFDgCQO8HGgJsZiIgYzNmZGExMWNiZDg1MDgyODQzZGJiMGQ5NmQxODFkMGU; n_mh=bCeaAI_oAx1lecDNR1VPNscis3QyYCxFqIfY8g3cwa0; MONITOR_WEB_ID=5481a19f-4c02-4152-8b42-42057ffa0a1d"
    },
    {
        userName:"李师",
        cooike:"_ga=GA1.2.10120510.1630249919; _gid=GA1.2.906030739.1630249919; passport_csrf_token_default=779a65d4625165f3b2ac043628ec91b4; passport_csrf_token=779a65d4625165f3b2ac043628ec91b4; sid_guard=4a79b59c63cce6a9e10ba9b302094550%7C1630249930%7C5183999%7CThu%2C+28-Oct-2021+15%3A12%3A09+GMT; uid_tt=95dbfdc42854f331bac9c134c584cbd6; uid_tt_ss=95dbfdc42854f331bac9c134c584cbd6; sid_tt=4a79b59c63cce6a9e10ba9b302094550; sessionid=4a79b59c63cce6a9e10ba9b302094550; sessionid_ss=4a79b59c63cce6a9e10ba9b302094550; sid_ucp_v1=1.0.0-KDQxMzBiMjRjOTRkM2MwYmYwNzIyZTk5YjhkOTk3NzM2Zjg1ZGJjNTgKFwiupOCNq4zaAxDKx66JBhiwFDgCQO8HGgJsZiIgNGE3OWI1OWM2M2NjZTZhOWUxMGJhOWIzMDIwOTQ1NTA; ssid_ucp_v1=1.0.0-KDQxMzBiMjRjOTRkM2MwYmYwNzIyZTk5YjhkOTk3NzM2Zjg1ZGJjNTgKFwiupOCNq4zaAxDKx66JBhiwFDgCQO8HGgJsZiIgNGE3OWI1OWM2M2NjZTZhOWUxMGJhOWIzMDIwOTQ1NTA; n_mh=8QrvunRd9dAfooXq5qj-YunRf_jgAR-H6TlE43iVKOE; MONITOR_WEB_ID=248e32c5-5aca-4788-936e-fe920cb17b1b"
    },
    {
        userName:"李师2",
        cooike:"_ga=GA1.2.1314938019.1630250165; _gid=GA1.2.866432912.1630250165; passport_csrf_token_default=24648f1804c1599d5948fe9666d0010f; passport_csrf_token=24648f1804c1599d5948fe9666d0010f; sid_guard=70275831a44902a0241276d542860007%7C1630250177%7C5184000%7CThu%2C+28-Oct-2021+15%3A16%3A17+GMT; uid_tt=87f529b96deb50162d658105ca80388a; uid_tt_ss=87f529b96deb50162d658105ca80388a; sid_tt=70275831a44902a0241276d542860007; sessionid=70275831a44902a0241276d542860007; sessionid_ss=70275831a44902a0241276d542860007; sid_ucp_v1=1.0.0-KGYxZmE0MWEzYjU0MDExZmNjODI5ZTE2OThhZjgzZDJmZjllYmZhZjEKFgi9kLCOq4weEMHJrokGGLAUOAJA7wcaAmxmIiA3MDI3NTgzMWE0NDkwMmEwMjQxMjc2ZDU0Mjg2MDAwNw; ssid_ucp_v1=1.0.0-KGYxZmE0MWEzYjU0MDExZmNjODI5ZTE2OThhZjgzZDJmZjllYmZhZjEKFgi9kLCOq4weEMHJrokGGLAUOAJA7wcaAmxmIiA3MDI3NTgzMWE0NDkwMmEwMjQxMjc2ZDU0Mjg2MDAwNw; n_mh=wbeoLnFD-zTgYSnOdXStBO2EFCYz18rHxTJ5-y_Mpuk; MONITOR_WEB_ID=6da29919-d295-4ab8-a5e0-598e73482c83"
    },
    {
        userName:"刘名",
        cooike:"_ga=GA1.2.131962665.1630250219; _gid=GA1.2.520181068.1630250219; passport_csrf_token_default=92297d800a538cb9681cb26133941a8a; passport_csrf_token=92297d800a538cb9681cb26133941a8a; sid_guard=7c280d360e0976b7d1201416d6affbd8%7C1630250231%7C5184000%7CThu%2C+28-Oct-2021+15%3A17%3A11+GMT; uid_tt=6ecefd51a91912cfd700494bbb69ae5c; uid_tt_ss=6ecefd51a91912cfd700494bbb69ae5c; sid_tt=7c280d360e0976b7d1201416d6affbd8; sessionid=7c280d360e0976b7d1201416d6affbd8; sessionid_ss=7c280d360e0976b7d1201416d6affbd8; sid_ucp_v1=1.0.0-KDQ5MDYwMzliOWIwYmQ2MDhiYTA2ZjFjOTVlMTQ3ODg1MzQ4MDM5NDcKFwje-dCUq4yyBxD3ya6JBhiwFDgCQO8HGgJsZiIgN2MyODBkMzYwZTA5NzZiN2QxMjAxNDE2ZDZhZmZiZDg; ssid_ucp_v1=1.0.0-KDQ5MDYwMzliOWIwYmQ2MDhiYTA2ZjFjOTVlMTQ3ODg1MzQ4MDM5NDcKFwje-dCUq4yyBxD3ya6JBhiwFDgCQO8HGgJsZiIgN2MyODBkMzYwZTA5NzZiN2QxMjAxNDE2ZDZhZmZiZDg; n_mh=GaUBoIWiTX_0Smz-4_T9t3CNg5geQfx8Esysq5GFnUA; MONITOR_WEB_ID=4eebbb65-2df8-4b72-b40c-7414fbbfc3de"
    },
    {
        userName:"广生",
        cooike:"_ga=GA1.2.1261686850.1630250276; _gid=GA1.2.778929141.1630250276; passport_csrf_token_default=fa0e0dfa728a46658feee3a318a69850; passport_csrf_token=fa0e0dfa728a46658feee3a318a69850; sid_guard=6192aa43bcd0a44ae0410c812fe6f57a%7C1630250289%7C5184000%7CThu%2C+28-Oct-2021+15%3A18%3A09+GMT; uid_tt=45bfa6b28426dc70099ac913c2f7b3c4; uid_tt_ss=45bfa6b28426dc70099ac913c2f7b3c4; sid_tt=6192aa43bcd0a44ae0410c812fe6f57a; sessionid=6192aa43bcd0a44ae0410c812fe6f57a; sessionid_ss=6192aa43bcd0a44ae0410c812fe6f57a; sid_ucp_v1=1.0.0-KDMzODUwOTBkYzc0YTc5MjZiMzlhZTljYmY4ZDU4ZWQ3ZWNjYTVjYmYKFwjH7bCRq4yuARCxyq6JBhiwFDgCQO8HGgJsZiIgNjE5MmFhNDNiY2QwYTQ0YWUwNDEwYzgxMmZlNmY1N2E; ssid_ucp_v1=1.0.0-KDMzODUwOTBkYzc0YTc5MjZiMzlhZTljYmY4ZDU4ZWQ3ZWNjYTVjYmYKFwjH7bCRq4yuARCxyq6JBhiwFDgCQO8HGgJsZiIgNjE5MmFhNDNiY2QwYTQ0YWUwNDEwYzgxMmZlNmY1N2E; n_mh=MhCDivzTI1ENNyXeg92XR82ujrkULnFKvR1SxCHB4rw; MONITOR_WEB_ID=cde660dd-2b94-4232-951a-3a2d0da9bc3c"
    },
    {
        userName:"黄金",
        cooike:"_ga=GA1.2.2047364990.1630250343; _gid=GA1.2.1747224160.1630250343; passport_csrf_token_default=21c83d9da4e971d155f9b2631ea73df9; passport_csrf_token=21c83d9da4e971d155f9b2631ea73df9; sid_guard=b45a90b3383a9d0cee69ce1498386fb7%7C1630250353%7C5184000%7CThu%2C+28-Oct-2021+15%3A19%3A13+GMT; uid_tt=8162d27d2b535ba90910ffef38b68f5c; uid_tt_ss=8162d27d2b535ba90910ffef38b68f5c; sid_tt=b45a90b3383a9d0cee69ce1498386fb7; sessionid=b45a90b3383a9d0cee69ce1498386fb7; sessionid_ss=b45a90b3383a9d0cee69ce1498386fb7; sid_ucp_v1=1.0.0-KDM2ZjM0OTJhYzIyZDY2OGI5NGY1MzMzY2FkMmEwOGU3OWY0MGRhYjMKFgjnkICSq4weEPHKrokGGLAUOAJA7wcaAmxmIiBiNDVhOTBiMzM4M2E5ZDBjZWU2OWNlMTQ5ODM4NmZiNw; ssid_ucp_v1=1.0.0-KDM2ZjM0OTJhYzIyZDY2OGI5NGY1MzMzY2FkMmEwOGU3OWY0MGRhYjMKFgjnkICSq4weEPHKrokGGLAUOAJA7wcaAmxmIiBiNDVhOTBiMzM4M2E5ZDBjZWU2OWNlMTQ5ODM4NmZiNw; n_mh=V9ATA27o35I0tYldlNsYmCoO7a0VBuKAq0PwZjJyjl0; MONITOR_WEB_ID=d9a92bd4-9f82-4ba5-b057-29a03a12ee25"
    },
    {
        userName:"温赖",
        cooike:"_ga=GA1.2.761966807.1630250393; _gid=GA1.2.1589083737.1630250393; passport_csrf_token_default=b55f41f1a5e1346f0c98b7331b15d2a0; passport_csrf_token=b55f41f1a5e1346f0c98b7331b15d2a0; sid_guard=161fef6d0217a8e0b56361d722c4eeaf%7C1630250405%7C5184000%7CThu%2C+28-Oct-2021+15%3A20%3A05+GMT; uid_tt=fcbddded0abe917d71a6d31f891a4908; uid_tt_ss=fcbddded0abe917d71a6d31f891a4908; sid_tt=161fef6d0217a8e0b56361d722c4eeaf; sessionid=161fef6d0217a8e0b56361d722c4eeaf; sessionid_ss=161fef6d0217a8e0b56361d722c4eeaf; sid_ucp_v1=1.0.0-KDY5NGJjOGZmM2VjNjcxY2FjOTFlNDBlZjVhZDNkZjljZDYwY2EwMzcKFgj-6fCSq4w-EKXLrokGGLAUOAJA7wcaAmxmIiAxNjFmZWY2ZDAyMTdhOGUwYjU2MzYxZDcyMmM0ZWVhZg; ssid_ucp_v1=1.0.0-KDY5NGJjOGZmM2VjNjcxY2FjOTFlNDBlZjVhZDNkZjljZDYwY2EwMzcKFgj-6fCSq4w-EKXLrokGGLAUOAJA7wcaAmxmIiAxNjFmZWY2ZDAyMTdhOGUwYjU2MzYxZDcyMmM0ZWVhZg; n_mh=dI5B23IziEYpJzARS8Q9D3Ky0JtVTNNq0E_VDJZg3zY; MONITOR_WEB_ID=8cf59b46-9b52-4102-b6aa-55cf8fbc051e"
    },
    {
        userName:"倩1",
        cooike:"_ga=GA1.2.866982980.1630250445; _gid=GA1.2.1298017337.1630250445; passport_csrf_token_default=74f010e9a07db5d985547cc701b16ae2; passport_csrf_token=74f010e9a07db5d985547cc701b16ae2; sid_guard=7fadbfda81064a11cbf81ab58d15bb45%7C1630250454%7C5184000%7CThu%2C+28-Oct-2021+15%3A20%3A54+GMT; uid_tt=1ba4bcfb53343d7cbdf6f86fd1f38fae; uid_tt_ss=1ba4bcfb53343d7cbdf6f86fd1f38fae; sid_tt=7fadbfda81064a11cbf81ab58d15bb45; sessionid=7fadbfda81064a11cbf81ab58d15bb45; sessionid_ss=7fadbfda81064a11cbf81ab58d15bb45; sid_ucp_v1=1.0.0-KDY4NTQwYjI1YTM3NjNiNTMwZTA3MzU4MDk4YTYxZmRiZGQ0ODcyOTQKFwjXw6C_q4ymAxDWy66JBhiwFDgCQO8HGgJsZiIgN2ZhZGJmZGE4MTA2NGExMWNiZjgxYWI1OGQxNWJiNDU; ssid_ucp_v1=1.0.0-KDY4NTQwYjI1YTM3NjNiNTMwZTA3MzU4MDk4YTYxZmRiZGQ0ODcyOTQKFwjXw6C_q4ymAxDWy66JBhiwFDgCQO8HGgJsZiIgN2ZhZGJmZGE4MTA2NGExMWNiZjgxYWI1OGQxNWJiNDU; n_mh=WpvjA-lbAKsOk0MzzWAIJJVILzn6PEa7pWfZshFJjmQ; MONITOR_WEB_ID=767d5832-5966-4f1a-a516-669d59575f09"
    },
    {
        userName:"倩2", 
        cooike:"_ga=GA1.2.126107122.1630250517; _gid=GA1.2.1589631701.1630250517; passport_csrf_token_default=a3af73b74bdf471de0dbc385a0f788dc; passport_csrf_token=a3af73b74bdf471de0dbc385a0f788dc; sid_guard=6fecce325deab5f08f90a88ad2bdb4c6%7C1630250529%7C5184000%7CThu%2C+28-Oct-2021+15%3A22%3A09+GMT; uid_tt=063ff42f32d6c7e1d6cff5bbe1e28051; uid_tt_ss=063ff42f32d6c7e1d6cff5bbe1e28051; sid_tt=6fecce325deab5f08f90a88ad2bdb4c6; sessionid=6fecce325deab5f08f90a88ad2bdb4c6; sessionid_ss=6fecce325deab5f08f90a88ad2bdb4c6; sid_ucp_v1=1.0.0-KDM1Y2RlZjlkNTNkZWNlNmJkYjNkODE0ZWU5MTJlMWMwNTY3MmY2YWEKFwiY-fC_q4yaBBChzK6JBhiwFDgCQO8HGgJsZiIgNmZlY2NlMzI1ZGVhYjVmMDhmOTBhODhhZDJiZGI0YzY; ssid_ucp_v1=1.0.0-KDM1Y2RlZjlkNTNkZWNlNmJkYjNkODE0ZWU5MTJlMWMwNTY3MmY2YWEKFwiY-fC_q4yaBBChzK6JBhiwFDgCQO8HGgJsZiIgNmZlY2NlMzI1ZGVhYjVmMDhmOTBhODhhZDJiZGI0YzY; n_mh=uhpWlraZsUWJntXsDN9f0IucCBzy2bvwhSt41bAp4FM; MONITOR_WEB_ID=cfc8c779-4ccc-4daf-a5a7-378c1ca7b180"
    },
    {
        userName:"寅", 
        cooike:"_ga=GA1.2.645557963.1630250596; _gid=GA1.2.18350792.1630250596; passport_csrf_token_default=5356f72e2af806380d846111dd4c7d9a; passport_csrf_token=5356f72e2af806380d846111dd4c7d9a; sid_guard=19a0b25fb404a025a1223c884f425b1c%7C1630250603%7C5184000%7CThu%2C+28-Oct-2021+15%3A23%3A23+GMT; uid_tt=fd18776e2347543ee7cf60f7fab2df01; uid_tt_ss=fd18776e2347543ee7cf60f7fab2df01; sid_tt=19a0b25fb404a025a1223c884f425b1c; sessionid=19a0b25fb404a025a1223c884f425b1c; sessionid_ss=19a0b25fb404a025a1223c884f425b1c; sid_ucp_v1=1.0.0-KDM5ODAxMTg2MzY2ODI0YzZhNDRkNTFmNGI0MzI1ZjYyMTljY2FlYzkKFgiOiqDMq4waEOvMrokGGLAUOAJA7wcaAmxmIiAxOWEwYjI1ZmI0MDRhMDI1YTEyMjNjODg0ZjQyNWIxYw; ssid_ucp_v1=1.0.0-KDM5ODAxMTg2MzY2ODI0YzZhNDRkNTFmNGI0MzI1ZjYyMTljY2FlYzkKFgiOiqDMq4waEOvMrokGGLAUOAJA7wcaAmxmIiAxOWEwYjI1ZmI0MDRhMDI1YTEyMjNjODg0ZjQyNWIxYw; n_mh=hi4RH1MdBBdwu_G22hi4AIFrI85LP66mpKkuLJZgnT0; MONITOR_WEB_ID=cec1fffd-3676-44a2-950d-3dc0afcc6161"
    }
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
        //钉钉通知下
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
