export function userProxyFactory($http) {
    class UserProxy{
        constructor(url){
            this.url = url;
        }
        load(num=3){
            //return $http.get(`${this.url}/?results=${num}`);
            return $http.get(this.url);
        }
    }
    //return new UserProxy('http://http://api.randomuser.me');
    return new UserProxy('data/users.json');
}