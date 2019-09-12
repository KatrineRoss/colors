export function isEmpty(object) {
    if (Array.isArray(object)) {
        return !object || object.length === 0;
    }
}