const inputTextarea = document.querySelector(".textarea-input")
const outputTextarea = document.querySelector(".textarea-output")
const btnFormat = document.querySelector(".btn-format")
const btnMinify = document.querySelector(".btn-minify")

// take the input & format it as string and display it on output Textarea 
btnFormat.addEventListener('click', () =>{
    const format = JSON.stringify(JSON.parse(inputTextarea.value), null, 2 ) 
    outputTextarea.value = format
    
})

// default behavior of json 
btnMinify.addEventListener('click', () =>{
    const minify = JSON.stringify(JSON.parse(inputTextarea.value)) 
    outputTextarea.value = minify
})
