// replace with localhost in production

// farm calendar create request
// @param - id - optional, string, id of calendar in case of update
// @param - farm_fk - string, id of farm
// @param - sowing_date - Date
// @param - harvesting_date - Date
// checks -
//     1. sowing_date must be less than harvesting date
//     2. current calendar must not overlap with other calendars of same farm

onRecordCreateRequest((e) => {
    const farm_fk = e.record.get("farm_fk");
    const crop_fk = e.record.get("crop_fk");
    const sowing_date = e.record.get("sowing_date");
    const harvesting_date = e.record.get("harvesting_date");

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({
                farm_fk,
                crop_fk,
                sowing_date,
                harvesting_date,
            }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/calendar/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isCalendarValid === true) {
            e.next();
        } else {
            throw new Error(jsonRes.message);
        }
    } catch (err) {
        throw new ApiError(400, err.message);
    }
}, "farm_calendar");

onRecordUpdateRequest((e) => {
    const id = e.record.id;
    const farm_fk = e.record.get("farm_fk");
    const crop_fk = e.record.get("crop_fk");
    const sowing_date = e.record.get("sowing_date");
    const harvesting_date = e.record.get("harvesting_date");

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({
                id,
                farm_fk,
                crop_fk,
                sowing_date,
                harvesting_date,
            }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/calendar/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isCalendarValid === true) {
            e.next();
        } else {
            throw new Error(jsonRes.message);
        }
    } catch (err) {
        throw new ApiError(400, err.message);
    }
}, "farm_calendar");
