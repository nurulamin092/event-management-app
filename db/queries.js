import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/libs/data-util";
import { eventModel } from "@/models/event-models"

export async function getAllEvents() {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents)

}

export async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event)
}