/*
脚本功能：哔哩哔哩 会员
下载地址：appstore
软件版本：所有
脚本作者：伟人
作者QQ:55749353
更新时间：2022-11-22
问题反馈：QQ+55749353
QQ会员群：暂无
TG反馈群：https://t.me/+tOQEwAEP0B81YzVl
TG频道群：暂无
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/blbl.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', pmczn = '__0xf0340',  __0xf0340=['AnUGw7nDuCbCmMORUA==','5Yq+6Zme54mE5p+t5Y+m776Jw4lW5L6L5a2f5pyG5b+c56u0','V8Kiw7HDijI=','w5dOY8KuQA==','csKuw6l1w58=','w41QwpZ6wqs=','wpfDumDDmMONIcKLCcKxw53CoMKtA8KA','bMKGw77Diwc=','C8OPwp16w7w=','w5xOYcOHwojDhsKP','TxzDscOpwp5V','w5hqwpMtwqDCtWxOw5TCpcOkMGIXwprCqMK0OjbChcOvQMOEw6MZw7HDiTfDpcO0wog+w5xRwr/CrsKfSMKtPMOyDcK4wqzDlMOCSATCoMORwo8wwrDDn8OswoXDs8Kgwq1ow4jDvMO6RsKGWMKLwo1cw5jCtMKJHMOjw4xHwprDisOZCFvCoinCssO6w69BwrcRL1pDw4rDmsOsJMK0T8OXNkjDgsOLwrUhV8KJfMOQM8Kow54Vwq01LsO6Zyp8w7hXUjbDlEPDj8KlwqsHwonCi1hnw5tvwozCssONw5cuasKWcxDDjcO6w6sEw5zCozrCq3LDqcKLPhIeVErDg8OLbCzCmiDCt0jCr8OYTMOZWhUqJcKGwrDCvcOTwp4BwpPCvsK2csOPfgHCpyDCgSY3Z8KVGVsvw75OwpTDjQbCt8OccsKEcAMLE8KUw4zDqsOwcsKNb0vCssOPwrrCpQLCnwRxJMO8KRPCrF0aw69Uw4N/w6XDqMKhSsKDwqgSSMK6RB7DkHzDi8O2wqDDlmJRUx9vwpvCsEkLw7dmw6rDtUnDuErDum/DizQNZAUtfMK0wrvCtsOeC8K/w7/CpMOmNcKPTMOqwqMpdcK0wozDjn4GCBfCv8KIVMO5w7tc','wrHDi0bCqQjDrWbDgjd2MsO5wqw=','w74Lw65fXsO2XsOoKztew6Abw6HCh8OEwozCusONRW/ChhhFw5oYIRcdNGzDnG/CqMO0wrHDrywSeh/CtHjDhA==','KsKYHzXDu8O4b8OxYsKeHmPDhcONKMKxdwbCpcKmwpnCgkV0DcOzw5HClcObwpTDgnBmw7giw6E6WcKHwqpFwpvDucOVwp0iE8Kvw58ATm9+dE55GxwawqIARcOUwpsfCDjDl8OLwpseUyDDhh8XZX3DrnIwKcKWWcO4','wq80QQ=='];(function(_0x9f830,_0x13f81d){var _0x530396=function(_0x222d85){while(--_0x222d85){_0x9f830['push'](_0x9f830['shift']());}};_0x530396(++_0x13f81d);}(__0xf0340,0x79));var _0x3b5b=function(_0xf64183,_0x160ba8){_0xf64183=_0xf64183-0x0;var _0xce806e=__0xf0340[_0xf64183];if(_0x3b5b['initialized']===undefined){(function(){var _0x2bb6a9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xa99a2e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2bb6a9['atob']||(_0x2bb6a9['atob']=function(_0xd082f8){var _0xf8504e=String(_0xd082f8)['replace'](/=+$/,'');for(var _0x2e88a4=0x0,_0x2b098f,_0x454498,_0x1d12f1=0x0,_0x5575f1='';_0x454498=_0xf8504e['charAt'](_0x1d12f1++);~_0x454498&&(_0x2b098f=_0x2e88a4%0x4?_0x2b098f*0x40+_0x454498:_0x454498,_0x2e88a4++%0x4)?_0x5575f1+=String['fromCharCode'](0xff&_0x2b098f>>(-0x2*_0x2e88a4&0x6)):0x0){_0x454498=_0xa99a2e['indexOf'](_0x454498);}return _0x5575f1;});}());var _0x13fb13=function(_0x38a57f,_0xdd39fe){var _0x2764e0=[],_0x5e6468=0x0,_0x1b312f,_0x244851='',_0x302cf3='';_0x38a57f=atob(_0x38a57f);for(var _0xa86155=0x0,_0x31dc61=_0x38a57f['length'];_0xa86155<_0x31dc61;_0xa86155++){_0x302cf3+='%'+('00'+_0x38a57f['charCodeAt'](_0xa86155)['toString'](0x10))['slice'](-0x2);}_0x38a57f=decodeURIComponent(_0x302cf3);for(var _0x357d16=0x0;_0x357d16<0x100;_0x357d16++){_0x2764e0[_0x357d16]=_0x357d16;}for(_0x357d16=0x0;_0x357d16<0x100;_0x357d16++){_0x5e6468=(_0x5e6468+_0x2764e0[_0x357d16]+_0xdd39fe['charCodeAt'](_0x357d16%_0xdd39fe['length']))%0x100;_0x1b312f=_0x2764e0[_0x357d16];_0x2764e0[_0x357d16]=_0x2764e0[_0x5e6468];_0x2764e0[_0x5e6468]=_0x1b312f;}_0x357d16=0x0;_0x5e6468=0x0;for(var _0x1972a7=0x0;_0x1972a7<_0x38a57f['length'];_0x1972a7++){_0x357d16=(_0x357d16+0x1)%0x100;_0x5e6468=(_0x5e6468+_0x2764e0[_0x357d16])%0x100;_0x1b312f=_0x2764e0[_0x357d16];_0x2764e0[_0x357d16]=_0x2764e0[_0x5e6468];_0x2764e0[_0x5e6468]=_0x1b312f;_0x244851+=String['fromCharCode'](_0x38a57f['charCodeAt'](_0x1972a7)^_0x2764e0[(_0x2764e0[_0x357d16]+_0x2764e0[_0x5e6468])%0x100]);}return _0x244851;};_0x3b5b['rc4']=_0x13fb13;_0x3b5b['data']={};_0x3b5b['initialized']=!![];}var _0x4c2ff6=_0x3b5b['data'][_0xf64183];if(_0x4c2ff6===undefined){if(_0x3b5b['once']===undefined){_0x3b5b['once']=!![];}_0xce806e=_0x3b5b['rc4'](_0xce806e,_0x160ba8);_0x3b5b['data'][_0xf64183]=_0xce806e;}else{_0xce806e=_0x4c2ff6;}return _0xce806e;};var modifiedHeaders=$request[_0x3b5b('0x0','itlp')];modifiedHeaders[_0x3b5b('0x1','JBIt')]=_0x3b5b('0x2','ezvI');modifiedHeaders[_0x3b5b('0x3','nNik')]=_0x3b5b('0x4','K0hs');modifiedHeaders['x-bili-device-bin']='CAEQ5LuwIRokWUE0Qjc0QUIxNDYxODFCNjQ4RDU5NDAwMDNCNjVGQ0NBQUVBIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIDExUgYxNS4zLjFqBTcuMC4wckAwMTA2RDAyQzNEQThBN0MyNjgxMzQ2Rjk3NjQ2NTBBQjIwMjAwNTE1MDUyMjIyODM5NDlFRTkzRENFRUE0NTNEeNu+g6C5MA==';modifiedHeaders['User-Agent']=_0x3b5b('0x5','cDxk');$notify('伟人提醒您B站会员注入成功!!!');$done({'headers':modifiedHeaders});;(function(_0x20057b,_0x593a4d,_0x39a95c){var _0x50d940={'AFbmW':_0x3b5b('0x6','jxVB'),'ItooQ':function _0x39a32e(_0xcd38c,_0x14fa06){return _0xcd38c!==_0x14fa06;},'qFEeV':_0x3b5b('0x7','Mh#%'),'fSajm':function _0x4fa404(_0xd5e8e5,_0x44f8fd){return _0xd5e8e5===_0x44f8fd;},'zbmlb':function _0x18c346(_0x416ea9,_0x5a8142){return _0x416ea9+_0x5a8142;},'EmNLT':_0x3b5b('0x8','kga#')};_0x39a95c='al';try{_0x39a95c+=_0x50d940[_0x3b5b('0x9','08Jv')];_0x593a4d=encode_version;if(!(_0x50d940[_0x3b5b('0xa','kga#')](typeof _0x593a4d,_0x50d940[_0x3b5b('0xb','9r%*')])&&_0x50d940[_0x3b5b('0xc','ezvI')](_0x593a4d,_0x3b5b('0xd','fz7U')))){_0x20057b[_0x39a95c](_0x50d940[_0x3b5b('0xe','08Jv')]('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}catch(_0x7bb61b){_0x20057b[_0x39a95c](_0x50d940[_0x3b5b('0xf','v]el')]);}}(window));;encode_version = 'jsjiami.com.v5';
