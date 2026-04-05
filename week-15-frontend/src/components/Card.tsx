import { ShareIcon } from "../icons/shareIcon";



export function Card () {

    return <div>
        <div className="p-4 bg-white rounded-md border-grey-200 max-w-72 border">
            <div className="flex justify-between">
                <div className="flex item-center text-md"> 
                    <div className="text-grey-500 pr-2">
                        <ShareIcon></ShareIcon>
                    </div>
                    project Ideas 
                </div>
                <div className="flex item-center ">
                <div className="text-grey-500 pr-2 ">
                    <ShareIcon />
                </div>
                <div className="text-grey">
                    <ShareIcon />
                </div>
            </div>
            
            </div>


        </div>
    </div>
}