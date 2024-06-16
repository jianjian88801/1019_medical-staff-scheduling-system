import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import discussyiyuanxinxi from '@/views/modules/discussyiyuanxinxi/list'
    import yiyuanxinxi from '@/views/modules/yiyuanxinxi/list'
    import paibanxinxi from '@/views/modules/paibanxinxi/list'
    import yihuleixing from '@/views/modules/yihuleixing/list'
    import paibanleixing from '@/views/modules/paibanleixing/list'
    import storeup from '@/views/modules/storeup/list'
    import yihuxinxi from '@/views/modules/yihuxinxi/list'
    import discusskeshixinxi from '@/views/modules/discusskeshixinxi/list'
    import keshixinxi from '@/views/modules/keshixinxi/list'
    import tousuxinxi from '@/views/modules/tousuxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/discussyiyuanxinxi',
        name: '医院信息评论',
        component: discussyiyuanxinxi
      }
      ,{
	path: '/yiyuanxinxi',
        name: '医院信息',
        component: yiyuanxinxi
      }
      ,{
	path: '/paibanxinxi',
        name: '排班信息',
        component: paibanxinxi
      }
      ,{
	path: '/yihuleixing',
        name: '医护类型',
        component: yihuleixing
      }
      ,{
	path: '/paibanleixing',
        name: '排班类型',
        component: paibanleixing
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/yihuxinxi',
        name: '医护信息',
        component: yihuxinxi
      }
      ,{
	path: '/discusskeshixinxi',
        name: '科室信息评论',
        component: discusskeshixinxi
      }
      ,{
	path: '/keshixinxi',
        name: '科室信息',
        component: keshixinxi
      }
      ,{
	path: '/tousuxinxi',
        name: '投诉信息',
        component: tousuxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
