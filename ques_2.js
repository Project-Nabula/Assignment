<!DOCTYPE html>
<html>
<body>

<script>
var arr=[1,2,2,2,3,4,4,5];
var set = new Set(arr);
var arr= Array.from(set);
document.writeln("new array length: "+arr.length+"<br> new members: <br>");
for (let elements of arr) {
 document.writeln(elements+"<br>");
}
</script>

</body>
</html>

 
