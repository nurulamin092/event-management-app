import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/libs/data-util";
import { eventModel } from "@/models/event-models"
import { userModel } from "@/models/user-model";

export async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents)

}

export async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event)
}

export async function updateInterest(eventId, authId) {
    const event = await eventModel.findById(eventId)

    if (event) {
        const foundUsers = event.interested_ids.find(id => id.toString() === authId)

        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId))
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId))
        }
        event.save()
    }
}

export async function createUser(user) {
    return await userModel.create(user)
}

export async function foundUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null
}
