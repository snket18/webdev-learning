"use client"

type PropType ={
    placeholder : string,
    onChange : (e : any)=> void
}

export function TextInput({
    placeholder, onChange
} : PropType ){
    return <input onChange={onChange} placeholder={placeholder} style={{
        padding : "10",
        margin : "10",
        borderColor : "black",
        borderWidth : "1",
        

    }}></input>
}