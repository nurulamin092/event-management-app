export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
        return {
            id: item._id.toString(),
            ...item
        }
    }).map(({ _id, ...rest }) => rest);
    return mappedArray;
}

//alternative
export const replaceMongoIdInObject = (obj) => {
    const updatedObject = {
        ...obj,
        id: obj._id.toString()
    }

    delete updatedObject._id;

    return updatedObject
}

// export const replaceMongoIdInObject = (obj) => {
//     const { _id, ...updateObject } = { ...obj, id: obj._id.toString() };
//     return updateObject
// }