function updateView(){
    console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty=Array.prototype
// 创建新对象,原型指向oldArrayProperty,再扩展到新的方法不会影响到原型
const arrProto=Object.create(oldArrayProperty);
['push','pop','shift','unshift','splice'].forEach(methodName=>{
    arrProto[methodName]=function(){
        updateView()//触发视图更新
        oldArrayProperty[methodName].call(this,...arguments)
    }
})
// 重新定义属性，监听起来
function defineReactive(target,key,value){
    // 深度监听
    observer(value)
    // 核心api
    Object.defineProperty(target,key,{
        get(){
            return value
        },
        set(newValue){
            if(newValue!==value){
                // 深度监听
                observer(value)
                // 设置新值
                // 注意,value一直在闭包中,此处设置完之后,再get时也是
                value=newValue
                // 触发更新视图
                updateView()
            }
        }
    })
}

function observer(target){
    if(typeof target !=='object' || target===null){
        return target
    }
    
    // 这样做会污染全局Array的原型
    // Array.prototype.push=function(){
    //     updateView()
    //     ...
    // }



    if(Array.isArray(target)){
        target.__proto__=arrProto
    }


    for(let key in target){
        defineReactive(target,key,target[key])
    }
}

const data={
    name:'zhangsan',
    age:20,
    info:{
        address:'北京'
    },
    nums:[10,20,30]
}

observer(data)

data.name='lisi'
data.age=21
// data.age={num:21}
// data.age.num=22


data.x='100' //新增属性，监听不到---所以有vue.set
delete data.name //删除属性，监听不到---所以有vue.delete

data.info.address='上海'
data.nums.push(4)