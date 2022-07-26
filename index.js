'use strict';
//variables
let cipherEncrypt=document.querySelector('.enrypt-cypher')
let enryptCode=document.querySelector('.encrypt-code')
let cipherBtn=document.querySelector('.encrypt-btn')
let cipherDecrypt=document.querySelector('.decrypt-cypher')
let decypherCode=document.querySelector('.decrypt-code')
let decryptBtn=document.querySelector('.decrypt-btn')

//alphabetic data
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const numbers=['1','2','3','4','5','6','7','8','9','0']
const symbols=['!','@','#','$','%','^','&','*','(',')','_','-','+','=','~','`','>','<','|',':','?','']

console.log(alphabet);

//

function Enrypt(text,key){
    let textArr=text.toUpperCase().split('').map((element)=>{
        return numbers.includes(element)?Number(element):element
    })
    console.log(textArr)
    let enryptedText=[];
    

    for (let i=0;i<=text.length;i++){


        console.log(alphabet.indexOf(textArr[i])+key+1>=alphabet.length)

        if (textArr[i]===' '){
            enryptedText.push(' ')
            continue
        }
        //-----------------For Text Letter--------------------------

        if (alphabet.indexOf(textArr[i])+key+1>=alphabet.length && alphabet.indexOf(textArr[i]) !== -1){

            let notEqual=true
            let newKey
            let correctIndex=(alphabet.indexOf(textArr[i])+key+1)
       
            while (notEqual) {
                correctIndex=Number(correctIndex)-(alphabet.length)
                if(correctIndex<alphabet.length){
                    newKey=correctIndex
                    notEqual=false
                }
                else{

                }
            }
            

            // let newIndex=(alphabet.indexOf(textArr[i])+key+1)-alphabet.length
            let encryptedLetter=alphabet[newKey]
            enryptedText.push(encryptedLetter)

            continue;

        }

        else if (alphabet.indexOf(textArr[i])+key+1<alphabet.length && alphabet.indexOf(textArr[i]) !== -1){
            // console.log(alphabet[alphabet.indexOf(textArr[i])+key+1])
            if (typeof(textArr[i])==='string'){
                let encryptedLetter=alphabet[(alphabet.indexOf(textArr[i]))+key+1]
                enryptedText.push(encryptedLetter)

            }
            continue

        }

        //-------------------------if Number-------------------------------
        let numToString=String(textArr[i])
        console.log(typeof(numToString))
        console.log(numbers.indexOf(numToString))

        if (numbers.indexOf(numToString)>=0){


            if (numbers.indexOf(numToString)+key+1>=numbers.length){

                let notEqual=true
                let newKey
                let correctIndex=(numbers.indexOf(numToString)+key+1)
           
                while (notEqual) {
                    correctIndex=Number(correctIndex)-(numbers.length)
                    if(correctIndex<numbers.length){
                        newKey=correctIndex
                        notEqual=false
                    }
                    else{
    
                    }
                }
                
    
                // let newIndex=(alphabet.indexOf(textArr[i])+key+1)-alphabet.length
                let encryptedLetter=numbers[newKey]
                enryptedText.push(encryptedLetter)
    
                continue;
    
            }
    
            else if (numbers.indexOf(numToString)+key+1<numbers.length){
                // console.log(alphabet[alphabet.indexOf(textArr[i])+key+1])
                if (typeof(numToString)==='string'){
                    let encryptedLetter=numbers[(numbers.indexOf(numToString))+key+1]
                    enryptedText.push(encryptedLetter)
    
                }
                continue
    
            }

        }
      
        

        //-------------------------------for Symbols
        if (symbols.indexOf(textArr[i])+key+1>=symbols.length && symbols.indexOf(textArr[i]) !== -1){

            let notEqual=true
            let newKey
            let correctIndex=(symbols.indexOf(textArr[i])+key+1)
       
            while (notEqual) {
                correctIndex=Number(correctIndex)-(symbols.length)
                console.log('looped')
                if(correctIndex<symbols.length){
                    newKey=correctIndex
                    notEqual=false
                }
                else{
                }
            }
            
            // let newIndex=(alphabet.indexOf(textArr[i])+key+1)-alphabet.length
            let encryptedLetter=symbols[newKey]
            enryptedText.push(encryptedLetter)
            continue;
        }

        else if (symbols.indexOf(textArr[i])+key+1<alphabet.length && symbols.indexOf(textArr[i]) !== -1){
            // console.log(alphabet[alphabet.indexOf(textArr[i])+key+1])
            if (typeof(textArr[i])==='string'){
                let encryptedLetter=symbols[(symbols.indexOf(textArr[i]))+key+1]
                enryptedText.push(encryptedLetter)
            }
            continue
        }
        
    }
    return enryptedText.join('')
}




//Decryption Function 🤙
//take text key
// convert to arr
//choose one and if number convert to string
//take key and subtract it from indexof letter


function Decrypt(text,key){
    let decryptedText=[]

    let textArr=text.toUpperCase().split('')
    console.log(textArr)
    console.log(key)
    let givenKey=Number(key)

    for (let i=0;i<=textArr.length-1;i++){
        console.log(`main letter${textArr[i]}`)
    
        //for spaces ' '    
        if (textArr[i]===' '){
            decryptedText.push(' ')
            continue
        }


        //for english alphabets
        if (alphabet.indexOf(textArr[i])>=0){

            let newIndex=((alphabet.indexOf(textArr[i])))-givenKey-1
    
            if (newIndex>alphabet.length){
                let isNotRight=true
                while (isNotRight){
                    newIndex-=alphabet.length
                    isNotRight=newIndex<=alphabet.length?false:true
                }
                continue;
    
    
                let newLetter=alphabet[newIndex]
        
                decryptedText.push(newLetter)
            }
    
    
            if (newIndex<0){
                console.log(alphabet.length)
                // newIndex=(alphabet.length-newIndex)-2
                
                let isNotRight=true
                while (isNotRight){
                    // console.log(`new Index ${newIndex}`)
                    newIndex=alphabet.length-newIndex
                    if (newIndex<0){
                        newIndex=newIndex+alphabet.length
                        
                    }
                    if (newIndex>=0){
                        // console.log(`after newINdex ${newIndex}`)
                        isNotRight=newIndex<=alphabet.length?false:true
    
                    }
                }
                
            
                let newLetter=alphabet[newIndex]
                console.log(newLetter)
    
                decryptedText.push(newLetter)
    
                continue;
            }
            else{
                // console.log(`givenk${newIndex}`)
                let newLetter=alphabet[newIndex]
                decryptedText.push(newLetter)
    
            }
        }
        //---------------------------------------------------------------------
        //for numbers
        let numToString=String(textArr[i])
        if (numbers.indexOf(numToString)>0){
            let newIndex=((numbers.indexOf(numToString)))-givenKey-1
    
            if (newIndex>numbers.length){
                let isNotRight=true
                while (isNotRight){
                    newIndex-=numbers.length
                    isNotRight=newIndex<=numbers.length?false:true
                }
                continue;
    
    
                let newSymbol=symbols[newIndex]
        
                decryptedText.push(newSymbol)
            }
    
    
            if (newIndex<0){
                // console.log(`i raned ${i} times`)
                console.log(symbols.length)
                // newIndex=(alphabet.length-newIndex)-2
                
                let isNotRight=true
                while (isNotRight){
                    // console.log(`new Index ${newIndex}`)
                    newIndex=symbols.length-newIndex
                    if (newIndex<0){
                        newIndex=newIndex+symbols.length
                        
                    }
                    if (newIndex>=0){
                        // console.log(`after newINdex ${newIndex}`)
                        isNotRight=newIndex<=symbols.length?false:true
    
                    }
                }
                
            
                let newSymbol=symbols[newIndex]
                // console.log(newLetter)
    
                decryptedText.push(newSymbol)
    
                continue;
            }
            else{
                // console.log(`givenk${newIndex}`)
                let newSymbol=numbers[newIndex]
                decryptedText.push(newSymbol)
    
            }
        }        







        //for symbols !#@^
        if (symbols.indexOf(textArr[i])>0){
            let newIndex=((symbols.indexOf(textArr[i])))-givenKey-1
    
            if (newIndex>symbols.length){
                let isNotRight=true
                while (isNotRight){
                    newIndex-=symbols.length
                    isNotRight=newIndex<=symbols.length?false:true
                }
                continue;
    
    
                let newSymbol=symbols[newIndex]
        
                decryptedText.push(newSymbol)
            }
    
    
            if (newIndex<0){
                // console.log(`i raned ${i} times`)
                console.log(symbols.length)
                // newIndex=(alphabet.length-newIndex)-2
                
                let isNotRight=true
                while (isNotRight){
                    // console.log(`new Index ${newIndex}`)
                    newIndex=symbols.length-newIndex
                    if (newIndex<0){
                        newIndex=newIndex+symbols.length
                        
                    }
                    if (newIndex>=0){
                        // console.log(`after newINdex ${newIndex}`)
                        isNotRight=newIndex<=symbols.length?false:true
    
                    }
                }
                
            
                let newSymbol=symbols[newIndex]
                // console.log(newLetter)
    
                decryptedText.push(newSymbol)
    
                continue;
            }
            else{
                // console.log(`givenk${newIndex}`)
                let newSymbol=symbols[newIndex]
                decryptedText.push(newSymbol)
    
            }
        }


    }

    console.log(decryptedText)
    return decryptedText.join('')
}



cipherBtn.addEventListener('click',()=>{
    let usersText=cipherEncrypt.value
    let userKey=Number(enryptCode.value)
    let EcryptedText=Enrypt(usersText,userKey)
    cipherDecrypt.value=EcryptedText
})

decryptBtn.addEventListener('click',()=>{
    let encryptedText=cipherDecrypt.value
    let secretKey=Number(decypherCode.value)
    let DecryptedText=Decrypt(encryptedText,secretKey)
    cipherEncrypt.value=DecryptedText
})