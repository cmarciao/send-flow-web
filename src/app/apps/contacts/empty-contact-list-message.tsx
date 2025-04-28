import { Info } from "lucide-react";

export function EmptyContactListMessage() {
    return (
        <div className='flex flex-col justify-center items-center mt-16'>
            <Info color='#FFDE07' size={86} />
            <h2 className='text-center mt-4 text-white'>
                Your contact list is empty, add new contacts to send messages to.
            </h2>
        </div>
    );
}
