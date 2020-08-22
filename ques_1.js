<!DOCTYPE html>
<html>
<body>

<script>
let allRead =true;


let notifications = [
	{message: "Lorem", read: true},
{message: "Ipsum", read: true},
{message: "Dolor", read: true},
{message: "Sit", read: false},
{message: "Amet", read: true}
];

//object is created for array
function Obj(message,read){
this.message=message;
this.read=read;
}


//iterator by every method on array
notifications.every(myfun);

//every iterator method callback function
function myfun(value,index,array){
obj1=new Obj(value.message,false);
array[index]=obj1;
if(value.read==false) return true;
return value.read;
}


document.writeln("After setting allRead value to false notifications array looks below:<br> <br> ");
for (let i=0;i<notifications.length;i++)
document.writeln("message:"+notifications[i].message+" "+"read:"+notifications[i].read+"<br>");

</script>

</body>
</html>

 


 
