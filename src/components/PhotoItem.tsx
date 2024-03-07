import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo;
    onClick: () => void;
}

export function PhotoItem({photo, onClick}:Props) {
    return(
        <div onClick={onClick} className="max-w-60 cursor-pointer opacity-75 hover:opacity-100">
            <img src={`/assets/images/${photo.url}`} alt={`${photo.id}`} className="mx-auto w-full aspect-[3/4]" />
        </div>
    )
};