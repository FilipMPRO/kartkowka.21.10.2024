function one(){
    const input=document.createElement("input");
    const div = document.createElement("div")
    
    input.type="color"
    div.style.border="2px solid black"
    div.style.width="250px"
    div.style.height="250px"
    
    document.body.appendChild(div)
    document.body.appendChild(input)

    input.addEventListener("change", ()=>{
        div.style.backgroundColor = input.value
        
    })
}
function two(){
    const input= document.createElement("input")
    const button= document.createElement("button")
    
    button.textContent="Generuj"
    
    document.body.appendChild(input)
    document.body.append(button)
    
    button.addEventListener("click",()=>{
        const a = document.createElement("a")
        a.target="blank_"
        a.href=`https://${input.value}/`
        a.textContent=input.value
        
        document.body.appendChild(a)
    })
}
function three(){
    const inputHeight= document.createElement("input")
    const inputWidth= document.createElement("input")
    const button=document.createElement("button")
    
    button.textContent="zmien"
    const div = document.createElement("div")
    inputHeight.type="number"
    inputWidth.type="number"
    inputHeight.placeholder="wysokość"
    inputWidth.placeholder="szerokość"
    div.style.border="2px solid red"
    
    document.body.appendChild(inputHeight)
    document.body.appendChild(inputWidth)
    document.body.appendChild(button)
    
    button.addEventListener("click",()=>{
        div.style.width=`${inputWidth.value}px`
        div.style.height=`${inputHeight.value}px`
        document.body.appendChild(div)
    })
}
function four(){
    const ul = document.createElement("ul")
    
    const input= document.createElement("input")
    const button= document.createElement("button")
    button.textContent="ADD"
    document.body.appendChild(input)
    document.body.appendChild(button)
    document.body.appendChild(ul)

    button.addEventListener("click", ()=>{
        const li = document.createElement("li")
        const delButton= document.createElement("button")
        delButton.textContent="del"
        li.textContent=input.value
        ul.appendChild(li)
        li.appendChild(delButton)
        delButton.addEventListener("click",()=>{
            li.style.display="none"
        })
    })
}