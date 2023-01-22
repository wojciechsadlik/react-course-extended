interface IHasDate {
    date: Date;
}

function hasDate(obj: object): obj is IHasDate {
    return "date" in obj;
}

const castDates = <T extends object,>(obj: T): T => {
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
}

export default castDates;