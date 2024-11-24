"use server";

import {readFile, writeFile} from "fs/promises";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

type User = {
    id: string;
    firstName: string;
    lastName: string;
};

export const createUser = async (prevState:any,formData: FormData) => {
    console.log(prevState);

    // simulate a delay
    await new Promise((resolve)=> setTimeout(resolve, 3000));

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const rawData = Object.fromEntries(formData);
    const newUser: User = {firstName, lastName, id: Date.now().toString()};

    console.log("creating user " + lastName + ", " + firstName + "...");
    console.log(rawData);

    try {
        await saveUser(newUser);
        revalidatePath('/actions');
        return('User created successfully.');
    } catch (error) {
        console.log(error);
        return('Failed to create user.');
    }

    // redirect('/'); // dont place this in the try block
};

export const fetchUsers = async (): Promise<User[]> => {
    const result = await readFile("users.json", {encoding: "utf-8"});
    const users = result ? JSON.parse(result) : [];
    console.log('users: ' + users);

    return users;
};

export const saveUser = async (user: User) => {
    const users = await fetchUsers();
    users.push(user);
    await writeFile('users.json', JSON.stringify(users));
}

export const deleteUser= async (formData:FormData) => {
    const id=formData.get("id") as string;
    console.log('Deleting user ' + id);

    const users = await fetchUsers();
    const updatedUsers=users.filter((user)=> user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
}

export const removeUser= async (id:string,formData:FormData) => {
    const name=formData.get("name") as string;

    const users = await fetchUsers();
    const updatedUsers=users.filter((user)=> user.id !== id);
    await writeFile('users.json', JSON.stringify(updatedUsers));
    revalidatePath('/actions');
}

