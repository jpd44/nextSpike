import {fetchUsers} from "@/utils/actions";
import DeleteButton from "@/components/DeleteButton";

export default async function UsersList() {
    const users = await (fetchUsers());
    return (
        <div className="mt-4">
            <h3 className="text-xl">UsersList</h3>
            {
                users.length ? <div className='max-w-lg'>
                    {
                        users.map(user => {
                                return (
                                    <div className="flex items-center flex justify-between items-center mb-2">
                                        <h4 key="{user.id}"
                                            className="capitalize text-lg">
                                            {user.lastName}, {user.firstName}
                                        </h4>
                                        <DeleteButton id={user.id}/>
                                    </div>
                                );
                            }
                        )
                    }

                </div> : <p>No users found</p>
            }
        </div>
    )
}