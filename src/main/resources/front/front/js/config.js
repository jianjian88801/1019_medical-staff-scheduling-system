
var projectName = '医护人员排班系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '医院信息',
	url: './pages/yiyuanxinxi/list.html'
}, 
{
	name: '医护信息',
	url: './pages/yihuxinxi/list.html'
}, 
{
	name: '科室信息',
	url: './pages/keshixinxi/list.html'
}, 
{
	name: '投诉信息',
	url: './pages/tousuxinxi/list.html'
}, 

{
	name: '论坛',
	url: './pages/forum/list.html'
}, 
]

var adminurl =  "http://localhost:8080/springbootjf5zc/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医院信息","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医护信息","menuJump":"列表","tableName":"yihuxinxi"}],"menu":"医护信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医护类型","menuJump":"列表","tableName":"yihuleixing"}],"menu":"医护类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"排班信息","menuJump":"列表","tableName":"paibanxinxi"}],"menu":"排班信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"排班类型","menuJump":"列表","tableName":"paibanleixing"}],"menu":"排班类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科室信息","menuJump":"列表","tableName":"keshixinxi"}],"menu":"科室信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"投诉信息","menuJump":"列表","tableName":"tousuxinxi"}],"menu":"投诉信息管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"医院信息列表","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息模块"},{"child":[{"buttons":["查看"],"menu":"医护信息列表","menuJump":"列表","tableName":"yihuxinxi"}],"menu":"医护信息模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"科室信息列表","menuJump":"列表","tableName":"keshixinxi"}],"menu":"科室信息模块"},{"child":[{"buttons":["查看"],"menu":"投诉信息列表","menuJump":"列表","tableName":"tousuxinxi"}],"menu":"投诉信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"排班信息","menuJump":"列表","tableName":"paibanxinxi"}],"menu":"排班信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"医院信息列表","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息模块"},{"child":[{"buttons":["查看"],"menu":"医护信息列表","menuJump":"列表","tableName":"yihuxinxi"}],"menu":"医护信息模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"科室信息列表","menuJump":"列表","tableName":"keshixinxi"}],"menu":"科室信息模块"},{"child":[{"buttons":["查看"],"menu":"投诉信息列表","menuJump":"列表","tableName":"tousuxinxi"}],"menu":"投诉信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"医护","tableName":"yihu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
