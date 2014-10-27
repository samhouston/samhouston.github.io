/*example12.js
the "this" object */
var goby = 2;
this.goby = 909;
var go = {
    goby: 78,
    printG: function(){
        //var goby = 55;
        var goby = 33;
        console.log("printG");
        console.log(goby);
        console.log(this.goby);
        var printGG = function(){
            console.log(goby);
            console.log(this.goby);
        };
        var printGGB = function(){
            console.log(goby);
            console.log(this.goby);
        }.bind(this);
        console.log("printGG");
        printGG();
        console.log("printGGB");
        printGGB();
        var mon = {printy: printGG, goby: 44};
        console.log("mon printy");
        mon.printy();
    },
    print: function(v){
        console.log(v);
    }
}
go.printG();
console.log("global");
go.print(goby);
go.print(this.goby);