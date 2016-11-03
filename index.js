function takeANumber(array, person){
  array.push(person)
  return `Welcome, ${person}. You are number ${array.length} in line.`
}

function nowServing(array){
  if(array.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array){
  var str = "The line is currently: ";
  if(array.length === 0){
    return "The line is currently empty.";
  }
  else{
    for(let i = 0; i < array.length; i++)
      str += `${i + 1}. ${array[i]}, `
  }
  return str.slice(0, -2);
}
