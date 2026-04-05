



export default function Sidebar() {
 // by-default wali chiz pehle ayegi then what to do by condition will be next
    return <div className="flex">
 
        <div className="transition-all delay-1000 md:w-96 h-screen w-0"> 
            Sidebar  
        </div>
        <div className="bg-green-700 w-full flex-1">
            Content
        </div>

    </div>
}