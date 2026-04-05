

export default function Darkmode(){

    return (
        <div className="h-screen bg-white dark:bg-black ">
        <h1 className="text-black dark:text-white ">Hi there ! </h1>
        <button onClick={() => {
            document.querySelector("html").classList.toggle("dark")
        }} className="text-black dark:text-white"> toggle theme </button>
</div>
)
    
}