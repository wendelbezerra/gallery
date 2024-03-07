import { Photo } from "@/types/Photo"
import { log } from "console";

type Props = {
    image: string;
    closeModal: () => void;
};

export function Modal({image, closeModal}: Props) {
    console.log('xi');
    
    return(
        <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90 cursor-pointer px-7"> 
            <img src={`/assets/images/${image}`} alt={`${image}`} className="max-w-screen max-h-screen" />
        </div>
    )
};