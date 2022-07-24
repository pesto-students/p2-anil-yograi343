var Person = function() {};
Person.prototype.initialize=function(name,age){
    this.name=name;
    this.age=age;
    };
// TODO: create the class Teacher and a method teach
//Document.setPrototypeOf(Teacher,Person);
//"use strict";
var Teacher =function() {};
    
Teacher.prototype=new Person();
    
Teacher.prototype.teach= function (subject) {
        return subject;
    };

var him= new Teacher();
him.initialize("Adam",45);
him.teach("Inheritence");

const displayName =document.getElementById("name");
const displayAge=document.getElementById("age");
const displaySubject=document.getElementById("subject");
document.querySelector("button").addEventListener("click",printAll);
function printAll(){
    displayName.innerHTML="     "+him.name;
    displayAge.innerHTML="      "+him.age;
    displaySubject.innerHTML="  "+him.teach("Inheritence");
}