export function dataCmpFactory(){
    class DataCtrl{
        constructor($scope,userProxy){
            userProxy.load()
            .then((res)=>{
                this.usersData = res.data.results;
            })
        }
        onFilterChanged(value) {
            alert(value);
        }
        setData() {
            
        }
        setOptions(){
            
        }
    }
    
    return {
        controller: DataCtrl,
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'modules/DataComponents/data.cmp.tpl.html'
    }
}