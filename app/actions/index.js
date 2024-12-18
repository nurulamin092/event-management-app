"use server";

import { createUser, foundUserByCredentials, updateInterest } from "@/db/queries"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function registerUser(formData) {
    const user = Object.fromEntries(formData);

    const create = await createUser(user)

    redirect("/login")

}

async function performLogin(formData) {
    try {
        const credential = {};
        credential.email = formData.get("email");
        credential.password = formData.get("password");

        const found = await foundUserByCredentials(credential)
        return found

    } catch (error) {
        throw error;
    }
}

async function addInterestedEvent(eventId, authId) {
    try {
        await updateInterest(eventId, authId)
    } catch (error) {
        throw error;
    }
    revalidatePath("/")
}
export { registerUser, performLogin, addInterestedEvent }