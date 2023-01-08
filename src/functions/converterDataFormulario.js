export default function converterDataFormulario(data){
    const dataDecomposta=data.split('/');
    const dataFormatada=dataDecomposta[2]+'-'+dataDecomposta[1]+'-'+ dataDecomposta[0];
    return(dataFormatada);
}