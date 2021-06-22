// import { getLocalStorage } from "../../utils/auth";
// import { RouteEnum } from "../../config/routeConfig";
// const whitePathList = [RouteEnum.BASE_LOGIN];
export function createAsyncGuard(router) {
  router.beforeEach(async (to, from, next) => {
    console.log(to, from);
    // // if (whitePathList.includes(to.path)) {
    // //   next('/');
    // //   return;
    // // }
    // // if (to.path !== RouteEnum.BASE_LOGIN&&!getLocalStorage('Authority')) {
    // //   next(RouteEnum.BASE_LOGIN);
    // //   return
    // // }
    // const cache = getLocalStorage('Authority');
    // if (cache) { //已登录
    //   if (to.path == "/login") {
    //     next( )
    //   } else {
    //     // 访问其他页面

    //   }
    // } else {  //未登录
    //   if (whitePathList.includes(to.path)) {
    //     next();
    //   } else {
    //     // next();
    //   }
    // }
    // const redirect  = from.query.redirect || to.path  ;
    // const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    // next(nextData);
    if (to.meta.title) {
      document.title = to.meta.title;
    } else {
      document.title = "多比特用户平台";
    }
    next();
  });
}
