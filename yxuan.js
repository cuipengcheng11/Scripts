
/**************************************
脚本功能：知乎 盐故事+知识+书刊+测评
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：20230124
问题反馈：QQ+55749353
食用方法: 配合伟人其他脚本一块食用
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenQAQ
TG频道群：https://t.me/WeiRenOvO
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


20230201
******************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', vafbd = '__0xf461d',  __0xf461d=['w70jFm/DvQ==','f8Kgw7vDoV8=','wrdfw6oNwq4=','XE3DnVTDvQ==','w77DhMKxUsOR','wrMGc33DnQ==','w6Y/w4fDvBc=','w7/DpMKBwonDpA==','c8OwQ0YU','dyQgaMKk','JcOuMiHCrw==','w5Uiw4TDmgc=','IcO0w6/Ch0g=','wpLCicK0d2lTwp8=','A8Ksw4XCvMKzQQ==','w59aw5NBw7h3Xh8+w4TDkcOiTAPCnBsfw788wqkzw7tMw6nDjgFLwo7CucKtw6NsBsK8w6PDlnBJw4bCo14nCMOJBzDCoAHDkRReccKkw5QJw4gvDcKkwp91woDDmy7DmABKw6rDgRrCmcOww59Dw4fCsV/DsUvDjjxeWcKqEyrCqMKzwoAkwocBw4TCv1IyEknDkDVywqfCkQbDrMK3CcORYxstw7/DkjDCvDbCtsK+w6dmU24UwoLCo052EMKbw5rCmsKsE8OUWcOuesK3LcODw68fw7JhGcKqwo3Dn8OXT8OdcDxGFnzCjTfCnnUZwqcwwowIw6chIMOBKsKxN0jCigtzB8KSwrdBwpk3OcOuKcKTRsK5PcKgw7JGwpB6woXDhzjDm8K9RMOSREnChALCu8OPecOcYQHDtgjChhrDoVsDw6LClzMSHsOtwoY1wpjCmsKGwqPCgMO/wpfDujPCucOXwrLDmmRnwqvDqFRBw6HDrMO8wqbDuVrDiGp4wot4BjPCq8KGeX4jai9Qw4XDrcOww7TDu1Avw6oGI8OPwodpQH7CrcKpwpI5Q09gHANnYAppwoNBwoDCq8KfUMOgJXTDoMOdRMOmDMOdAMO6wpXDvkPDocOZXsOtwpZIw4wzVcOJfQdjFDnDkcO/w4AEwoTCiXFSw43DuzrDicKdMmfDgsK3wr0WfMOsbDnCh8Kiw5HDiDoRccK8wpjCikl8W8K/wrHCjcOgfcKzwo7CkFjDi8O7wpYmwqVyFTIoKcO2Q8Okw5dUwpd0w5hGw4vCpHZKwpZuKEDCjQclwrpcPn7CqMO/UF92w43DosKCw5dgMMOxCMOYY8KBQsKDKB1ocQEmwo3Dr8OxQMKtwoMtdSbDvcOdwpIhQzTDo8OEwq7ChFbDhmjDg8O4w7DDqXzChS3DhMO9w5DCrkVgFFwTRMKFHsKxwpXCv3c+AsOKXcOLXsKTQUp+wr7CoF7Dn8KXw4dYw6YmD8K0w6TCrcKfw7rDv8OmXBwRUTZ7wp0pw6h/bsO8wrxgPWVMwqzCnFs1UcOcXMKHEsOLU8Khw55nwrrCpVrDuzfCugfDm3nDjTjDiDTDrcKLL8OWw4hPMMO5wpJUw4rCicOJwqDDgsO1LlTDigbCncKWKsKlLMOUwrDCiMKMw5IZwoXDtcO4TBzDq8KoSwjDhFw/w6lYD8KUPQFqw7fDs8OVbyAfwpvCjsKRw5ktwqdowpEzJCJLK8KQDsOPBsOJbcKXw7bCuzjCq8KPN8Ouw57CnE3DnMKxwo9QwrbDtMOZBUfDgGvDisOeUR3Dgw5PJk3CgDrDqcK+PmHChcOVwoV6woPCnQhxwrrCmhYqCcOPA1/Cm8KKw7BSw5lLeQhUwrsew4zDq8Kvw4lCeAHDi05CYcObwptkw7bCi8Khc2jDvyPCr8K9w5Qxw5I8w5rCrB4kwqQywq0cwoE0wr4XFw0CJGQFwqXDicKYPMKqw5/DjMK7HEPChMOtfSnDmcKKRWDCl8OTA8O5KcOIw50GwoF7DcOYwqo8w7rCjH7DhMOML1/Du8K4w4vCjjjCuMO8w5HCiHhFacOEw4BVwol7eMOdwpZLw7Ehwr9lN8O/EQE0a8ORwqdUNsKeREnCrRvCnVjDg8K1TMKWwpHComPDnhzDm8KAHMO3w5RkwpLDjxZRw6rDvCvDtQHDtTDDmR1pN1U/w7TDgcOJekTCjnPCpsOlWcOFwp9LPMKxEUXDrMKPR1zDrzU1TMK1esKcJGTCvB9UwovCssKowqrCssKIw50vwrN2w4wGcnI6TsKdwociw7nDssK6wohE','wrsnw5EKw5nCviM=','wrtWw63DscK+wqPCnVEVwpzDi09PUcKaw78WPDjCt8K0wphiw494w47ClMKzDUUsw7nCiUrCkcKPwp/Ct2XCksKGw4p8wqbDg8OPFcOJ','PsOXw5/Cpx0pw5zClnPDkg==','JU0pOjBtw5YqW0/DgcOQw7bDv207WcKLwplxbsOVwq03Z8OfwrsZwqrDuwjCghPDg8OQUHvCnMOdw4lPUjXCusKgUwFLQMOfIl1FP8OGw7vCuR3CpW/Cp8Osw4TDvDU1woAyw7bChSATMBvDl2d/wpnDqEQVwqo1OwnDvCXDtBh6PHRcw5Qjwptew7sdwpheGTrCqhkVbcKSZsOwWVg2JMOCw7JzZVPCksOwwpDDlxJzw7jDkcKpCmHCg1FRwp/Cq8K1w6Vlw5DClcKow4E5dcKOw4bDkMKNwqLCiMOiPHfDk3jDjl/DpjbDv0IMwp7Dj0R6w5giw5fCo0o=','wpdmAMKzw6zDkHXCksOSw5LCuDVJ','D8OFw4rDqcKOwqTDqcK2KcKww6rCocKcwo8we0Yrw5dCwr/CkmLDo8KDwpA/bHB6c8KMwqliZcKhJCLDt8KiwrjDusK+CcOsF8KSXhzCngp7QjDDvXrCgcKSw4nDvcKWZEdFAsKXwpB9w7nCkcKVw5UiXUDDrA==','F2gqwqh3YMO2XQRFfMO+wpTCtMOf','Cnha','w7EZwqJ1O3rCqcKPw7Q=','w7Fowr00wq/CgjjChcOMwqHCgsKmRcOf','w7QOw7Q=','ERfCoQ==','54iF5p6M5Y2c776XwoHCpeS/k+WsnuacmOW+uOeome+/qei8r+isoeaVjuaMjeaIluS6hueYkuW3puS+og==','5Yq+6Zuw54q55p+J5Y2q772qOsKr5L+z5a285p2e5b6S56qM','w6HCncKkDMO4w48Lw5zCng3CnsK5eMOBw4bDsA==','w4cPA8Khw4vCgMK9woBhw5R6QsOmBVwZw5DDunQkw6I5w7jDpzPDsEXDrHgwalHChHjCmsOJw6NpVSjCpwYMwrECwrobw7RoQsK7w5XCgVfDv1onagXDuB/Ckg==','wpYKw5HCtQ==','w4AEw7HDnis=','wr99BMKuw7c=','wrk3Rw==','w60VPVTDlA==','w63DpMKdwozDqQ==','wplEwq3Cu1E=','wqHCslDDnSs=','SXTDhknDoQ==','wqhCVXVw','TXpewowh','w5M2w53DuwA=','KcOxw4LDn8Ky','wr1dSHJm','WyUXaMKR','ZcKBwqnDsR0=','GlcgDWw=','SUV2','wowJdQ==','w57CvcKzOsOq','SsOtwoXCiMOQ','wqMwwo/DvRs=','w7hawoM=','LVrCk8OPw6cRwqtJwrXDucOsw45q','w5VXw6NYw74=','w5nDrMKFwp3Dlw==','w4DCkMK+F8OG','LMOvDsKMw7A=','w6hrwrs0wro=','CMOLw5TCpl8Ew54=','w79BPcO/wow=','wpUxVEdJwrPDow==','JcOQIAvCsjbDvSbDtg==','w7cDWsOJwrTCo8OT','UnXDiA==','B8OrIsKRw5bDtMKc','w69pwrY+wqs=','fEnDi8OAwrgBw7o=','wopkw7o2','w5wZMlXDisKuFQ==','w5/CgcOaa8K0','w5vDu0lHd8KlXw==','w6x6wqUz','chpvRsOJ','WMK7wpHDrgs=','wp/CqhfCozg=','w4JuwpMPwrk=','AcOyA8Ksw6k=','wp52VEpE','IMOrw5zDnMKM','PMOKw4LDrsKt','C8KiW8OlAQ==','wrNaw5k+wq0=','wqYfw6Qhw5g=','MsORw77Ch0c=','w63DmsKLw7YT','RcK+w5DDmUg=','DMO1w4vCokA=','EMKyw5rCg8KM','woHCmXbDhQA=','d0TDi8O+wqY=','wq/CpQPChg==','wqrCvlnDuzc=','wo1BwoPCgkI=','wrbCmU/Dng==','ZVJ5wrrCgw==','wrTCiwbChDI=','NcKhw6zCrcKz','EcK2U8Kawoc=','e8K6w7/DmF8=','YcKBwrPDuRQ=','aU3DgUzDhw==','V3PDq8OKwo4=','wrjChyfCoAU=','w4zDpsKt','w6vDusKVwoDDuw8+wr3CjQ==','cETDj8OWwrQZ','w6ICwqhzKXrCqMKE','K1rCk8OPw6IRwq9JwrHDucOvw45q','w5nDncKFwrTDtQ==','wq9hLMKcw68=','ZlTDvcO0wrs=','w5V9w5x5w44=','LsODw5o=','w78bfg==','elxUwrDChA==','wpLChcKdeUU=','w70VUsO0wpw=','w7sHw53DkS0=','TMKYw7PDsno=','w7MKw7/Dniw=','JcOCNTvCsw==','cXJywr0s','w51yw6V8w5g=','wpLCmlPDgw8=','dwgncsK4','wq0OR8KvwrfCqm0=','w6BkLkUEE8KOC30NwqoeYsOrwr3CjkU=','w4ljCsOIwqM=','M8OYLwfCtg==','w6TCqhk0','QMKywqnDsQ==','KMOYw4jDvsKbwqLCoMOraQ==','woIsW1dD','w7EeRsOVwqk=','cMK/w5M=','w5zDsUVBfw==','wqkQw6rCjMKu','TWrDg1bDvA==','I8Ksw4TCpMK1SMOg','csOJUHM=','woBlw7IqwpvCmwI=','w6LCmsK4AMO+','wr7CuBPClyURwqHCoHU=','w43DncKSd8O4','w6cYwqhjMn/Cog==','wq0zYQ==','w7hLMcO5woTDhsOw','JMKmw4jCosK9','I8OHLR3CrS7DsQ==','GGtcIw==','w77DmsK8c8OI','NcKAw7vCgcKD','F8OwH8KSw64=','woQNwqzDkCs=','WUHDoMOVwoU=','w5FwwqM3TA==','w6ULw5XDkRc=','w7jDo17Dsmw=','w5IIQsOtwrU=','w4kZJW7DvQ==','wr4LdE1/','J8OtKA3Cqg==','N8KQcg==','ODHCrw==','w6Nuwp07wqo=','w4nDnMKuw7cm','blXDsMOewpA=','w7prwqcxwrc=','w4vDoFVddsKu','w6XDqsKq','wosFQg==','w7LDscKfwoLDqQ4=','FwDCiA==','CsOfCw==','F8KvXg==','woURYg==','w7pHGw==','UMOOwqU=','McK5asOGOA==','w7TDocKmw5IF','wr4tw6Y=','K8OEDQzCtA==','wogyTcK0wqA=','wpBAEMKzw7s=','woI4RUnDkQ==','JsK2w4TCtMKuTcOqVjvDrsKqPFBeRh0=','T0FDAcKQKcKWw4kdWzpiYSJgGsKxM8KOVsKQJh3Cp8K+D8OHwo3DmhnDosOqBMK2w5gqw6rCj8K9F8KFb8O2KMKDwrc4IG/Cj8OldsOgRMOcRMKcwrXCs8KiT8OO','eww4Uw==','I8OAIgfCrA==','DcOqPMKXw40=','wrwZaGRe','wrADwrjDoxw=','csOJwq/CmMOv','OMKRdsOIBA==','woI7SUA=','wrYMb8K7wpw=','EmoNOFY=','w6AJR8OO','wpInwqnDgR8=','w5EVw5PDpwk=','w6pqwpsqwrQ=','wqsMw5HCoMKD','woEnQcKzwrc=','DcKTw5/CnMKp','BsOBL8Ksw54=','wrcrw70jw7g=','wrloaFVM','w5/CqsKcKMOA','wrcTcVXDqQ==','GsKMfcKawpU=','M8OSBwPChw==','w7fCo8OdT8K1','w73DoWtDQg==','w5HDmGpjQQ==','w5fCpsOAQ8K3','U0/Dh3jDuQ==','woJ6w6w1wo0=','wr/Cv8KCWF4=','wrBPbWND'];(function(_0x45acd9,_0x3d0cc6){var _0x2df8ce=function(_0x588f77){while(--_0x588f77){_0x45acd9['push'](_0x45acd9['shift']());}};var _0x4bcec1=function(){var _0x487202={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x117ac,_0x4f61a9,_0x1b22c1,_0x25a937){_0x25a937=_0x25a937||{};var _0x290055=_0x4f61a9+'='+_0x1b22c1;var _0x42751b=0x0;for(var _0x42751b=0x0,_0x1c3130=_0x117ac['length'];_0x42751b<_0x1c3130;_0x42751b++){var _0x34c600=_0x117ac[_0x42751b];_0x290055+=';\x20'+_0x34c600;var _0x74b090=_0x117ac[_0x34c600];_0x117ac['push'](_0x74b090);_0x1c3130=_0x117ac['length'];if(_0x74b090!==!![]){_0x290055+='='+_0x74b090;}}_0x25a937['cookie']=_0x290055;},'removeCookie':function(){return'dev';},'getCookie':function(_0x41ed32,_0x4c2730){_0x41ed32=_0x41ed32||function(_0x341327){return _0x341327;};var _0x4a2a41=_0x41ed32(new RegExp('(?:^|;\x20)'+_0x4c2730['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x1b4bf9=function(_0x42e889,_0x2015cb){_0x42e889(++_0x2015cb);};_0x1b4bf9(_0x2df8ce,_0x3d0cc6);return _0x4a2a41?decodeURIComponent(_0x4a2a41[0x1]):undefined;}};var _0x1bf894=function(){var _0x485731=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x485731['test'](_0x487202['removeCookie']['toString']());};_0x487202['updateCookie']=_0x1bf894;var _0x2f6ce9='';var _0x3ddee8=_0x487202['updateCookie']();if(!_0x3ddee8){_0x487202['setCookie'](['*'],'counter',0x1);}else if(_0x3ddee8){_0x2f6ce9=_0x487202['getCookie'](null,'counter');}else{_0x487202['removeCookie']();}};_0x4bcec1();}(__0xf461d,0xeb));var _0xbc7f=function(_0x1251ad,_0x1b34f9){_0x1251ad=_0x1251ad-0x0;var _0x4cf1a2=__0xf461d[_0x1251ad];if(_0xbc7f['initialized']===undefined){(function(){var _0xfd0d39=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1892ab='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xfd0d39['atob']||(_0xfd0d39['atob']=function(_0x134c5b){var _0x3378a0=String(_0x134c5b)['replace'](/=+$/,'');for(var _0x354def=0x0,_0x27ab8c,_0x213f4b,_0x122f26=0x0,_0x207bf1='';_0x213f4b=_0x3378a0['charAt'](_0x122f26++);~_0x213f4b&&(_0x27ab8c=_0x354def%0x4?_0x27ab8c*0x40+_0x213f4b:_0x213f4b,_0x354def++%0x4)?_0x207bf1+=String['fromCharCode'](0xff&_0x27ab8c>>(-0x2*_0x354def&0x6)):0x0){_0x213f4b=_0x1892ab['indexOf'](_0x213f4b);}return _0x207bf1;});}());var _0x3095cb=function(_0x5c38f4,_0x13b562){var _0x139464=[],_0x1165f3=0x0,_0x5baff6,_0x142aa4='',_0x8d9c51='';_0x5c38f4=atob(_0x5c38f4);for(var _0x56bd8c=0x0,_0x86201a=_0x5c38f4['length'];_0x56bd8c<_0x86201a;_0x56bd8c++){_0x8d9c51+='%'+('00'+_0x5c38f4['charCodeAt'](_0x56bd8c)['toString'](0x10))['slice'](-0x2);}_0x5c38f4=decodeURIComponent(_0x8d9c51);for(var _0x161535=0x0;_0x161535<0x100;_0x161535++){_0x139464[_0x161535]=_0x161535;}for(_0x161535=0x0;_0x161535<0x100;_0x161535++){_0x1165f3=(_0x1165f3+_0x139464[_0x161535]+_0x13b562['charCodeAt'](_0x161535%_0x13b562['length']))%0x100;_0x5baff6=_0x139464[_0x161535];_0x139464[_0x161535]=_0x139464[_0x1165f3];_0x139464[_0x1165f3]=_0x5baff6;}_0x161535=0x0;_0x1165f3=0x0;for(var _0x263a56=0x0;_0x263a56<_0x5c38f4['length'];_0x263a56++){_0x161535=(_0x161535+0x1)%0x100;_0x1165f3=(_0x1165f3+_0x139464[_0x161535])%0x100;_0x5baff6=_0x139464[_0x161535];_0x139464[_0x161535]=_0x139464[_0x1165f3];_0x139464[_0x1165f3]=_0x5baff6;_0x142aa4+=String['fromCharCode'](_0x5c38f4['charCodeAt'](_0x263a56)^_0x139464[(_0x139464[_0x161535]+_0x139464[_0x1165f3])%0x100]);}return _0x142aa4;};_0xbc7f['rc4']=_0x3095cb;_0xbc7f['data']={};_0xbc7f['initialized']=!![];}var _0x3192a9=_0xbc7f['data'][_0x1251ad];if(_0x3192a9===undefined){if(_0xbc7f['once']===undefined){var _0x49a58f=function(_0x1cd1a6){this['rc4Bytes']=_0x1cd1a6;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x49a58f['prototype']['checkState']=function(){var _0x38338d=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x38338d['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x49a58f['prototype']['runState']=function(_0x553e3e){if(!Boolean(~_0x553e3e)){return _0x553e3e;}return this['getState'](this['rc4Bytes']);};_0x49a58f['prototype']['getState']=function(_0x3af138){for(var _0x214fdc=0x0,_0x5e12ae=this['states']['length'];_0x214fdc<_0x5e12ae;_0x214fdc++){this['states']['push'](Math['round'](Math['random']()));_0x5e12ae=this['states']['length'];}return _0x3af138(this['states'][0x0]);};new _0x49a58f(_0xbc7f)['checkState']();_0xbc7f['once']=!![];}_0x4cf1a2=_0xbc7f['rc4'](_0x4cf1a2,_0x1b34f9);_0xbc7f['data'][_0x1251ad]=_0x4cf1a2;}else{_0x4cf1a2=_0x3192a9;}return _0x4cf1a2;};var _0x399bb6=$request[_0xbc7f('0x0','!g]Z')];_0x399bb6[_0xbc7f('0x1','eKAh')]=_0xbc7f('0x2','ETQ3');_0x399bb6[_0xbc7f('0x3','%*Fp')]=_0xbc7f('0x4','#Ep0');_0x399bb6[_0xbc7f('0x5','[rF0')]=_0xbc7f('0x6','$8qj');_0x399bb6[_0xbc7f('0x7','I2]P')]=_0xbc7f('0x8','COVv');$done({'headers':_0x399bb6});;(function(_0x209cf4,_0x30b78d,_0x46dd4a){var _0x15eeb2={'Rcarq':_0xbc7f('0x9','P!2v'),'lrVQr':_0xbc7f('0xa','GNk!'),'cNlwM':function _0x455e00(_0x4d59a2,_0x25351e){return _0x4d59a2!==_0x25351e;},'wnivi':_0xbc7f('0xb','ZH$x'),'pZMLE':function _0x4745bc(_0x4e5301,_0x4357d4){return _0x4e5301===_0x4357d4;},'lnCXd':_0xbc7f('0xc','phZm'),'dQiDY':_0xbc7f('0xd','3j5w'),'eEPKS':_0xbc7f('0xe','sade'),'IGFOX':function _0x29d990(_0x53b0db,_0x5707ad){return _0x53b0db+_0x5707ad;},'RRrnn':_0xbc7f('0xf','COVv'),'PilRn':_0xbc7f('0x10','gDvh'),'HUNyY':function _0x28600e(_0x4e078b){return _0x4e078b();},'cGWRP':function _0x399966(_0x3b964d,_0x2e8dc4,_0x5230a8){return _0x3b964d(_0x2e8dc4,_0x5230a8);},'GuOgU':_0xbc7f('0x11','#5ms'),'uCQVY':_0xbc7f('0x12','*@9m'),'stSpW':function _0x6044d6(_0x34b38d,_0x451f44){return _0x34b38d(_0x451f44);},'QgPtG':_0xbc7f('0x13','#Ep0'),'FgEfR':function _0x59bf3c(_0xd6ca5d,_0x1cd178){return _0xd6ca5d+_0x1cd178;},'ANZSw':_0xbc7f('0x14','3j5w'),'ycPZX':_0xbc7f('0x15','I2]P'),'FdvWn':function _0x53dbbe(_0x56cbed,_0x17789f){return _0x56cbed===_0x17789f;},'voyHX':_0xbc7f('0x16','OKiH'),'gEkch':function _0x21bd8d(_0x4aba50,_0x2d0d1e,_0x38f8c2){return _0x4aba50(_0x2d0d1e,_0x38f8c2);}};var _0x21d111=_0x15eeb2[_0xbc7f('0x17','RR9X')][_0xbc7f('0x18','gDvh')]('|'),_0x2ef931=0x0;while(!![]){switch(_0x21d111[_0x2ef931++]){case'0':try{_0x46dd4a+=_0x15eeb2[_0xbc7f('0x19','nys9')];_0x30b78d=encode_version;if(!(_0x15eeb2[_0xbc7f('0x1a','hHA@')](typeof _0x30b78d,_0x15eeb2[_0xbc7f('0x1b','uhii')])&&_0x15eeb2[_0xbc7f('0x1c','vYxM')](_0x30b78d,_0x15eeb2[_0xbc7f('0x1d','P!2v')]))){if(_0x15eeb2[_0xbc7f('0x1e','3j5w')](_0x15eeb2[_0xbc7f('0x1f','COVv')],_0x15eeb2[_0xbc7f('0x20','vYxM')])){}else{_0x209cf4[_0x46dd4a](_0x15eeb2[_0xbc7f('0x21','dbT9')]('删除',_0x15eeb2[_0xbc7f('0x22','WivA')]));}}}catch(_0x37d3fc){_0x209cf4[_0x46dd4a](_0x15eeb2[_0xbc7f('0x23','$8qj')]);}continue;case'1':var _0x442489=function(){var _0x43ea16={'YUyUf':function _0x4f6d91(_0xc367da,_0x176b5b){return _0xc367da===_0x176b5b;},'IUfgE':_0xbc7f('0x24','P!2v'),'vZsYw':_0xbc7f('0x25','bO@d')};if(_0x43ea16[_0xbc7f('0x26','#5ms')](_0x43ea16[_0xbc7f('0x27','uxAj')],_0x43ea16[_0xbc7f('0x28',']t#(')])){}else{var _0x16c402=!![];return function(_0x34c9c8,_0x76e79a){var _0x268b2c={'AArKU':function _0x4fcfcb(_0x592878,_0x2a5558){return _0x592878!==_0x2a5558;},'GxtxJ':_0xbc7f('0x29','phZm'),'HkBnI':_0xbc7f('0x2a','lQ4R')};var _0x3d8a90=_0x16c402?function(){if(_0x76e79a){if(_0x268b2c[_0xbc7f('0x2b','ETQ3')](_0x268b2c[_0xbc7f('0x2c','gDvh')],_0x268b2c[_0xbc7f('0x2d','#5ms')])){var _0x277e37=_0x268b2c[_0xbc7f('0x2e','jRTI')][_0xbc7f('0x2f','phZm')]('|'),_0x3daf91=0x0;while(!![]){switch(_0x277e37[_0x3daf91++]){case'0':that[_0xbc7f('0x30','[rF0')][_0xbc7f('0x31','*@9m')]=func;continue;case'1':that[_0xbc7f('0x32','k#3v')][_0xbc7f('0x33','Z%oe')]=func;continue;case'2':that[_0xbc7f('0x34','*mxK')][_0xbc7f('0x35','uhii')]=func;continue;case'3':that[_0xbc7f('0x36','jRTI')][_0xbc7f('0x37','phZm')]=func;continue;case'4':that[_0xbc7f('0x38','lQ4R')][_0xbc7f('0x39','%*Fp')]=func;continue;case'5':that[_0xbc7f('0x3a','RR9X')][_0xbc7f('0x3b','Z5e3')]=func;continue;case'6':that[_0xbc7f('0x3c','vDM6')][_0xbc7f('0x3d','phZm')]=func;continue;}break;}}else{var _0x102ac4=_0x76e79a[_0xbc7f('0x3e','E@WQ')](_0x34c9c8,arguments);_0x76e79a=null;return _0x102ac4;}}}:function(){};_0x16c402=![];return _0x3d8a90;};}}();continue;case'2':(function(){var _0x3edb55={'gQqwp':_0x50c3bb[_0xbc7f('0x3f','WivA')],'PqpTV':_0x50c3bb[_0xbc7f('0x40','d%Do')],'CeJof':function _0x1dfdb5(_0x25503b,_0x4e0c3b){return _0x50c3bb[_0xbc7f('0x41','phZm')](_0x25503b,_0x4e0c3b);},'hbnMq':_0x50c3bb[_0xbc7f('0x42','jRTI')],'hBeQQ':function _0x429112(_0x40ecea,_0x566c7c){return _0x50c3bb[_0xbc7f('0x43','vYxM')](_0x40ecea,_0x566c7c);},'xwxha':_0x50c3bb[_0xbc7f('0x44','COVv')],'YjnxL':function _0x6dcffe(_0x4d767d,_0x1e63fd){return _0x50c3bb[_0xbc7f('0x45','COVv')](_0x4d767d,_0x1e63fd);},'oKvvg':_0x50c3bb[_0xbc7f('0x46','A^)X')],'ubFzi':function _0x277dcd(_0x44b5cb,_0x4c6c12){return _0x50c3bb[_0xbc7f('0x47','%*Fp')](_0x44b5cb,_0x4c6c12);},'gjKSd':_0x50c3bb[_0xbc7f('0x48','YKaz')],'VRhfg':function _0x228e7f(_0x13749d,_0x5d34e4){return _0x50c3bb[_0xbc7f('0x49','[rF0')](_0x13749d,_0x5d34e4);},'WWnsO':function _0x5df977(_0x4c3b0a){return _0x50c3bb[_0xbc7f('0x4a','(gF8')](_0x4c3b0a);}};_0x50c3bb[_0xbc7f('0x4b','SJIE')](_0xdbae0f,this,function(){var _0x4bfec7=new RegExp(_0x3edb55[_0xbc7f('0x4c','[rF0')]);var _0x324cf1=new RegExp(_0x3edb55[_0xbc7f('0x4d','eKAh')],'i');var _0x285735=_0x3edb55[_0xbc7f('0x4e','hHA@')](_0x3f8544,_0x3edb55[_0xbc7f('0x4f','lQ4R')]);if(!_0x4bfec7[_0xbc7f('0x50','d%Do')](_0x3edb55[_0xbc7f('0x51','hHA@')](_0x285735,_0x3edb55[_0xbc7f('0x52','nys9')]))||!_0x324cf1[_0xbc7f('0x53','hHA@')](_0x3edb55[_0xbc7f('0x54','t$Ek')](_0x285735,_0x3edb55[_0xbc7f('0x55','d%Do')]))){if(_0x3edb55[_0xbc7f('0x56','eKAh')](_0x3edb55[_0xbc7f('0x57','q2OP')],_0x3edb55[_0xbc7f('0x58','SJIE')])){_0x3edb55[_0xbc7f('0x59','WivA')](_0x285735,'0');}else{}}else{_0x3edb55[_0xbc7f('0x5a','uhii')](_0x3f8544);}})();}());continue;case'3':_0x15eeb2[_0xbc7f('0x5b','lQ4R')](_0x3caa43);continue;case'4':var _0x3caa43=_0x15eeb2[_0xbc7f('0x5c','d%Do')](_0x442489,this,function(){var _0x53f7a1={'GItQh':function _0x49d417(_0x449eda,_0x1fc09b){return _0x449eda!==_0x1fc09b;},'yrXGl':_0xbc7f('0x5d','(gF8'),'AkMje':function _0x2166f9(_0x55b486){return _0x55b486();},'XkMfh':function _0x26f84d(_0x1602b1,_0x302579){return _0x1602b1!==_0x302579;},'PHGyA':_0xbc7f('0x5e','gDvh'),'Pfoii':function _0x1b7247(_0x2b14fa,_0x5016f5){return _0x2b14fa===_0x5016f5;},'ejvUq':_0xbc7f('0x5f','lQ4R'),'Idtos':_0xbc7f('0x60','ZH$x'),'VtRMB':_0xbc7f('0x61','lQ4R')};if(_0x53f7a1[_0xbc7f('0x62','gDvh')](_0x53f7a1[_0xbc7f('0x63','I2]P')],_0x53f7a1[_0xbc7f('0x64','lQ4R')])){_0x53f7a1[_0xbc7f('0x65','ETQ3')](_0x3f8544);}else{var _0x849ef8=function(){var _0x350dbc={'FdCrK':function _0x2efd8c(_0x4978cb,_0xba12ad){return _0x4978cb===_0xba12ad;},'hiHjI':_0xbc7f('0x66','COVv'),'iyfNG':_0xbc7f('0x67','*mxK')};if(_0x350dbc[_0xbc7f('0x68','t$Ek')](_0x350dbc[_0xbc7f('0x69','!g]Z')],_0x350dbc[_0xbc7f('0x6a','*mxK')])){debugger;}else{}};var _0x442a2f=_0x53f7a1[_0xbc7f('0x6b','3j5w')](typeof window,_0x53f7a1[_0xbc7f('0x6c','SJIE')])?window:_0x53f7a1[_0xbc7f('0x6d','3j5w')](typeof process,_0x53f7a1[_0xbc7f('0x6e','Z%oe')])&&_0x53f7a1[_0xbc7f('0x6f','P!2v')](typeof require,_0x53f7a1[_0xbc7f('0x70','ETQ3')])&&_0x53f7a1[_0xbc7f('0x71','hHA@')](typeof global,_0x53f7a1[_0xbc7f('0x72','dbT9')])?global:this;if(!_0x442a2f[_0xbc7f('0x73','OKiH')]){_0x442a2f[_0xbc7f('0x73','OKiH')]=function(_0x1869fc){var _0x5ce882={'RGUBH':_0xbc7f('0x74','vYxM')};var _0x11cc7e=_0x5ce882[_0xbc7f('0x75','*@9m')][_0xbc7f('0x76','Z%oe')]('|'),_0x1125bf=0x0;while(!![]){switch(_0x11cc7e[_0x1125bf++]){case'0':_0x46dd4a[_0xbc7f('0x77','BD9m')]=_0x1869fc;continue;case'1':_0x46dd4a[_0xbc7f('0x78','WivA')]=_0x1869fc;continue;case'2':return _0x46dd4a;case'3':_0x46dd4a[_0xbc7f('0x79','COVv')]=_0x1869fc;continue;case'4':_0x46dd4a[_0xbc7f('0x7a','k#3v')]=_0x1869fc;continue;case'5':_0x46dd4a[_0xbc7f('0x7b','*mxK')]=_0x1869fc;continue;case'6':_0x46dd4a[_0xbc7f('0x7c','SJIE')]=_0x1869fc;continue;case'7':_0x46dd4a[_0xbc7f('0x7d','vDM6')]=_0x1869fc;continue;case'8':var _0x46dd4a={};continue;}break;}}(_0x849ef8);}else{var _0x10231f=_0x53f7a1[_0xbc7f('0x7e','#Ep0')][_0xbc7f('0x7f','uhii')]('|'),_0x1438c7=0x0;while(!![]){switch(_0x10231f[_0x1438c7++]){case'0':_0x442a2f[_0xbc7f('0x80','eKAh')][_0xbc7f('0x81','iCdk')]=_0x849ef8;continue;case'1':_0x442a2f[_0xbc7f('0x82','%*Fp')][_0xbc7f('0x83','#5ms')]=_0x849ef8;continue;case'2':_0x442a2f[_0xbc7f('0x36','jRTI')][_0xbc7f('0x84','d%Do')]=_0x849ef8;continue;case'3':_0x442a2f[_0xbc7f('0x32','k#3v')][_0xbc7f('0x85','vpK3')]=_0x849ef8;continue;case'4':_0x442a2f[_0xbc7f('0x86','ZH$x')][_0xbc7f('0x87','bO@d')]=_0x849ef8;continue;case'5':_0x442a2f[_0xbc7f('0x88','*@9m')][_0xbc7f('0x89','eKAh')]=_0x849ef8;continue;case'6':_0x442a2f[_0xbc7f('0x8a','Z%oe')][_0xbc7f('0x8b','GNk!')]=_0x849ef8;continue;}break;}}}});continue;case'5':_0x46dd4a='al';continue;case'6':var _0x50c3bb={'ohJqx':_0x15eeb2[_0xbc7f('0x8c','vpK3')],'DjgQm':_0x15eeb2[_0xbc7f('0x8d','eKAh')],'YuDRw':function _0x136b11(_0x1a81a9,_0x23f11d){return _0x15eeb2[_0xbc7f('0x8e','jRTI')](_0x1a81a9,_0x23f11d);},'evONP':_0x15eeb2[_0xbc7f('0x8f',']t#(')],'FnLsq':function _0x6ea4b2(_0x17090a,_0x4948d3){return _0x15eeb2[_0xbc7f('0x90','lQ4R')](_0x17090a,_0x4948d3);},'mKwGg':_0x15eeb2[_0xbc7f('0x91','Ne25')],'qjiuF':function _0x2b1d44(_0x13fefa,_0x4e27e2){return _0x15eeb2[_0xbc7f('0x92','3j5w')](_0x13fefa,_0x4e27e2);},'wKDhJ':_0x15eeb2[_0xbc7f('0x93','7hFN')],'PPEgY':function _0x45b97a(_0x1d73f4,_0x57541c){return _0x15eeb2[_0xbc7f('0x94','*mxK')](_0x1d73f4,_0x57541c);},'BepSD':_0x15eeb2[_0xbc7f('0x95','RR9X')],'pSuvP':function _0x515967(_0x516b37){return _0x15eeb2[_0xbc7f('0x96','k#3v')](_0x516b37);},'YndRs':function _0x4df588(_0x31a77b,_0x27a3e2,_0x481f1a){return _0x15eeb2[_0xbc7f('0x97','Z%oe')](_0x31a77b,_0x27a3e2,_0x481f1a);}};continue;case'7':var _0xdbae0f=function(){var _0x4e62f3=!![];return function(_0x239e21,_0xa24e17){var _0x5b7242=_0x4e62f3?function(){var _0x235dad={'xuJfd':function _0x113f96(_0x184445,_0x1b0cf1){return _0x184445===_0x1b0cf1;},'TUPwe':_0xbc7f('0x98','q2OP'),'qsUmG':_0xbc7f('0x99','sade')};if(_0x235dad[_0xbc7f('0x9a','phZm')](_0x235dad[_0xbc7f('0x9b','(gF8')],_0x235dad[_0xbc7f('0x9c','lQ4R')])){}else{if(_0xa24e17){var _0x547e8a=_0xa24e17[_0xbc7f('0x9d','phZm')](_0x239e21,arguments);_0xa24e17=null;return _0x547e8a;}}}:function(){};_0x4e62f3=![];return _0x5b7242;};}();continue;}break;}}(window));function _0x3f8544(_0x3170b6){var _0x598221={'MPuKs':function _0x189faf(_0x42cb36,_0x231e32){return _0x42cb36===_0x231e32;},'ihXRF':_0xbc7f('0x9e','vDM6'),'OFhoo':function _0x279817(_0xe4f5df){return _0xe4f5df();},'bEcNg':_0xbc7f('0x9f','(gF8'),'SQiQd':_0xbc7f('0xa0','bO@d'),'XBVGL':function _0x54edf5(_0x30666a,_0x30a935){return _0x30666a!==_0x30a935;},'vOwXU':function _0x431a68(_0x1d8028,_0x46e759){return _0x1d8028+_0x46e759;},'lPeSv':function _0x2372df(_0x5596f0,_0x45fece){return _0x5596f0/_0x45fece;},'szDmE':_0xbc7f('0xa1','gDvh'),'EuLwZ':function _0xa1a5cc(_0x57aa57,_0xe8384b){return _0x57aa57%_0xe8384b;},'iLMWY':function _0x465469(_0x80ddf6,_0x336217){return _0x80ddf6!==_0x336217;},'mUhGq':_0xbc7f('0xa2','sade'),'ESWKR':function _0x52c661(_0x70f354,_0xb281d5){return _0x70f354(_0xb281d5);},'hWuZv':function _0x4eed2e(_0x520018,_0xe193af){return _0x520018===_0xe193af;},'BUJIX':_0xbc7f('0xa3','Z%oe'),'cpOjd':_0xbc7f('0xa4','q2OP'),'TUvTZ':function _0x3db307(_0x1e8a7a){return _0x1e8a7a();},'bWrku':function _0x641c3e(_0x6e7dcb,_0x2e810b){return _0x6e7dcb!==_0x2e810b;},'GkBFL':_0xbc7f('0xa5','k#3v'),'rZupa':_0xbc7f('0xa6','*@9m'),'eFqOm':_0xbc7f('0xa7','uxAj'),'vNTmB':function _0x2ba2f8(_0x419f99){return _0x419f99();}};function _0x57648a(_0x324105){if(_0x598221[_0xbc7f('0xa8','A^)X')](typeof _0x324105,_0x598221[_0xbc7f('0xa9','(gF8')])){var _0x4a8333=function(){var _0x5ae817={'klNbv':function _0x21a11a(_0x134bf4,_0x100bfb){return _0x134bf4!==_0x100bfb;},'FSdhx':_0xbc7f('0xaa','YKaz'),'CdCDm':function _0x36e46c(_0x232aa5,_0x5b626f,_0x2afeab){return _0x232aa5(_0x5b626f,_0x2afeab);}};if(_0x5ae817[_0xbc7f('0xab','Z%oe')](_0x5ae817[_0xbc7f('0xac','OKiH')],_0x5ae817[_0xbc7f('0xad','I2]P')])){_0x5ae817[_0xbc7f('0xae','bO@d')](_0x183f1f,this,function(){var alrFOS={'JGRPx':_0xbc7f('0xaf','eKAh'),'eiDGp':_0xbc7f('0xb0','E@WQ'),'qqLwz':function _0xcbdcba(_0x18dce7,_0x3c381f){return _0x18dce7(_0x3c381f);},'DxiEO':_0xbc7f('0xb1','dbT9'),'xmFgD':function _0xea36e1(_0xb7d727,_0x51e1d8){return _0xb7d727+_0x51e1d8;},'XTAgT':_0xbc7f('0xb2','Z%oe'),'GMUes':function _0x5386d8(_0x643806,_0x526269){return _0x643806+_0x526269;},'ryCPL':_0xbc7f('0xb3','jRTI'),'Thiao':function _0x3f0a21(_0x4f42ab){return _0x4f42ab();}};var _0x1b61ca=new RegExp(alrFOS[_0xbc7f('0xb4','k#3v')]);var _0x3f4ba0=new RegExp(alrFOS[_0xbc7f('0xb5',']t#(')],'i');var _0x86a693=alrFOS[_0xbc7f('0xb6','uxAj')](_0x3f8544,alrFOS[_0xbc7f('0xb7','A^)X')]);if(!_0x1b61ca[_0xbc7f('0xb8','k#3v')](alrFOS[_0xbc7f('0xb9','OKiH')](_0x86a693,alrFOS[_0xbc7f('0xba','$8qj')]))||!_0x3f4ba0[_0xbc7f('0xbb','*mxK')](alrFOS[_0xbc7f('0xbc',']t#(')](_0x86a693,alrFOS[_0xbc7f('0xbd','3j5w')]))){alrFOS[_0xbc7f('0xbe','phZm')](_0x86a693,'0');}else{alrFOS[_0xbc7f('0xbf','#Ep0')](_0x3f8544);}})();}else{while(!![]){}}};return _0x598221[_0xbc7f('0xc0','OKiH')](_0x4a8333);}else{if(_0x598221[_0xbc7f('0xc1','eKAh')](_0x598221[_0xbc7f('0xc2','jRTI')],_0x598221[_0xbc7f('0xc3','YKaz')])){if(fn){var _0x5e8a54=fn[_0xbc7f('0xc4','vYxM')](context,arguments);fn=null;return _0x5e8a54;}}else{if(_0x598221[_0xbc7f('0xc5','#5ms')](_0x598221[_0xbc7f('0xc6','bO@d')]('',_0x598221[_0xbc7f('0xc7','q2OP')](_0x324105,_0x324105))[_0x598221[_0xbc7f('0xc8','Z%oe')]],0x1)||_0x598221[_0xbc7f('0xc9','Z5e3')](_0x598221[_0xbc7f('0xca','vDM6')](_0x324105,0x14),0x0)){if(_0x598221[_0xbc7f('0xcb','vDM6')](_0x598221[_0xbc7f('0xcc','Z5e3')],_0x598221[_0xbc7f('0xcd','uhii')])){var _0x228385=firstCall?function(){if(fn){var _0xa86a3a=fn[_0xbc7f('0xce','%*Fp')](context,arguments);fn=null;return _0xa86a3a;}}:function(){};firstCall=![];return _0x228385;}else{debugger;}}else{debugger;}}}_0x598221[_0xbc7f('0xcf','!g]Z')](_0x57648a,++_0x324105);}try{if(_0x3170b6){if(_0x598221[_0xbc7f('0xd0','vYxM')](_0x598221[_0xbc7f('0xd1','RR9X')],_0x598221[_0xbc7f('0xd2','SJIE')])){var _0x81ed6d=function(){while(!![]){}};return _0x598221[_0xbc7f('0xd3','%*Fp')](_0x81ed6d);}else{return _0x57648a;}}else{if(_0x598221[_0xbc7f('0xd4','uhii')](_0x598221[_0xbc7f('0xd5','vpK3')],_0x598221[_0xbc7f('0xd6','bO@d')])){_0x598221[_0xbc7f('0xd7','3j5w')](_0x57648a,0x0);}else{var _0x26e355=fn[_0xbc7f('0xd8','gDvh')](context,arguments);fn=null;return _0x26e355;}}}catch(_0x358082){if(_0x598221[_0xbc7f('0xd9','iCdk')](_0x598221[_0xbc7f('0xda','dbT9')],_0x598221[_0xbc7f('0xdb','Z%oe')])){}else{_0x598221[_0xbc7f('0xdc','3j5w')](_0x3f8544);}}}setInterval(function(){var _0x187d0e={'JPURx':function _0x1c2f92(_0xb752d2){return _0xb752d2();}};_0x187d0e[_0xbc7f('0xdd','[rF0')](_0x3f8544);},0xfa0);;encode_version = 'jsjiami.com.v5';