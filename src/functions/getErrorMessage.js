export default function getErrorMessage(errorObject){
    let errorMessage="Formato de dados inválido."
    if(errorObject.hasOwnProperty('Data')){
        errorMessage=errorObject.Data[0]
    } 
    if(errorObject.hasOwnProperty('Nome')){
        errorMessage=errorObject.Nome[0]
    }
    return errorMessage;
}