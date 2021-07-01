var grades = [1, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;
if(grades.length > 0){
  for(index = 0; index < grades.length; index++){
    if (grades[index] != undefined){
      sum = sum + grades[index];
      count = count + 1;
    }
  }
  //Do we really want to divide with the size of the array
  document.write(sum/count);

}
