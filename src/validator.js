const validator = {
  isValid:(numero)=>{
    let rev ='';
    for(let i = numero.length -1; i >=0; i--){
      rev += numero[i]
    }
    const array = Array.from(rev).map(Number);
    let impar=[] ;
    for(let i=0; i < array.length; i++){
      if(i%2!==0){
          impar.push(array[i]*2);
      }else{
          impar.push(array[i]*1);
    }
    }
    let list = [];
    for(let i=0; i<impar.length; i++){
        if(impar[i]>=10){
           list.push((impar[i]-10)+1);
            }else{
                list.push(impar[i]*1);
            }
    }
    const total = list.reduce((sum, current) => sum + current, 0);
    if(total%10 ===0 ){
      return true;
    } else {
      return false; 
    }
  },


  maskify:(numero)=>{
    let maskify2 = '';
        for(let i=0; i<numero.length; i++){
            if(i<=numero.length-5){
                maskify2 = maskify2 + '*';
            }else{
                maskify2 = maskify2 + numero[i];
            }
        }

//console.log(maskify2)       
 return maskify2
  }
  
}

export default validator;
