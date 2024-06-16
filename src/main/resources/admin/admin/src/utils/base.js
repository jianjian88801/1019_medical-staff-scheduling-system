const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootjf5zc/",
            name: "springbootjf5zc",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootjf5zc/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医护人员排班系统"
        } 
    }
}
export default base
