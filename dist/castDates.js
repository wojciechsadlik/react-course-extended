function hasDate(obj) {
    return "date" in obj;
}
const castDates = (obj) => {
    if (Array.isArray(obj)) {
        obj.forEach((item) => {
            if (hasDate(item)) {
                item.date = new Date(item.date);
            }
        });
    }
    else if (hasDate(obj)) {
        obj.date = new Date(obj.date);
    }
    return obj;
};
export default castDates;
