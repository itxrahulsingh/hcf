export default function getMaxId(arr) {
    let maxId = -1
    for (let i = 0, len = arr.length; i < len; i++) {
        const id = arr[i].id
        if (id > maxId) maxId = id
    }
    return maxId
}
