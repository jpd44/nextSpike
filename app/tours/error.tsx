'use client';

export default function Error({error}:{error:Error}) {
    console.log(error);
    
    return(
        <span>An error has occurred.</span>
    );
}