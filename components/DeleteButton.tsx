import {deleteUser, removeUser} from "@/utils/actions";

export default function DeleteButton({id}:{id: string}) {
    const removeUserWithId=removeUser.bind(null, id)

    return (
        <form action={removeUserWithId}>
            <input type="hidden" name="name" value='shakeAndBake'/>
            <button type="submit" className="bg-red-500 text-white txt-xs rounded p-2">Delete</button>
        </form>
    );
}