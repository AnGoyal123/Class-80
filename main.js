var student_name_array = [];

function submit(){
for(var i=1; i<=4; i++){
    var temp = document.getElementById("name_of_the_student_"+i).value;
    console.log(temp);
    student_name_array.push(temp);
}
console.log(student_name_array);
var display_student_name_array = [];
var length = student_name_array.length;

for(var k=0; k<length; k++){
    display_student_name_array.push("<h1> Name-"+student_name_array[k]+"</h1>");
}
console.log(display_student_name_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_name_array;

var remove= display_student_name_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
};

function sorting(){
student_name_array.sort();
var display_student_name_array = [];
var length = student_name_array.length;

for(var k=0; k<length; k++){
    display_student_name_array.push("<h1> Name-"+student_name_array[k]+"</h1>");
}

var remove= display_student_name_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove;

};