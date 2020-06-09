const data={}
const name='zhangsan'
Object.defineProperty(data,"name",{
    get:function(){
        console.log('get')
        return name
    },
    set:function(newVal){
        console.log('set')
        name=newVal
    }
})