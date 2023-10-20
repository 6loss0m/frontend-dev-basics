/**
 * Array 확장(prototype 기반의 확장)
 * 
 */

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(var i = 0; i < value.length; i++) {
        //     this.splice(index+i, 0, value[i]);
        // }

        console.log(this);

        // 오류!!
        // 콜백함수 안의 this는 어휘상의 this와 일치 하지 않는다.
        // value.forEach(function(e){
        //     console.log(this);
        //     // this.splice(index++, 0, e);
        // });
        
    // 해결방법1 : closure 사용하는 방법
    // var _this = this;
    // value.forEach(function(e){
    //     this.splice(index++, 0, e);
    // });

    var f = function(e){
        this.splice(index++, 0, e);
    };
    
     value.forEach(function(e){
        this.splice(index++, 0, e);
    });

    } else {
        this.splice(index, 0, value);
    }

}


// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(2);
console.log(a);

a.insert(2, ['a', 'b', 'c']);
console.log(a);