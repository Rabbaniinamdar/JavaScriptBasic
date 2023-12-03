function a() {
    var a = 10
    function b() {
        console.log(a)
    }
    return b
}
var c=a()
c()