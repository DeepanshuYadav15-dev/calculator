let result = document.getElementById('result');
 const getresult = (value) =>{
    if(value == '='){
        result.value = eval(result.value);
    }
    else{
        result.value += value;
    }
 }
 const clearResult = ()=>{
    result.value = '';
 }