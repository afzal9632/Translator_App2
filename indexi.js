function read(id){
    return document.getElementById(id).value;
}
let ids;
 async function Translate(){

    try{

        let input=read("input_text");

        const input_lang=read("inplang");

        const out_lang=read("outlang");

        console.log(input);
        const url="https://libretranslate.de/translate";
        const res=await fetch(url,{
            method:'POST',
            body:JSON.stringify({
                q:input,
                source:input_lang,
                target:out_lang,
                format:"text",
            }),
            headers:{
                    "Content-Type":"application/json",
            },
        });
        
        const {translatedText} =await res.json();
        if(translatedText!=undefined){
        console.log(translatedText)}
         document.getElementById("final_output").innerText=translatedText||[];
    }
    catch(err){
        console.log(err)
    }  
}
function debounce(func,delay){
     if(ids){
         clearTimeout(ids);
     }
       ids=setTimeout(function(){
         func();
     },delay);
}