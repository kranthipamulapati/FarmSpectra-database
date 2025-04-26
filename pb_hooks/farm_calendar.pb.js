onRecordCreateRequest((e) => {
    const farm_fk = e.record.get("farm_fk");
    const sowing_date = e.record.get("sowing_date");
    const harvesting_date = e.record.get("harvesting_date");

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({ farm_fk, sowing_date, harvesting_date }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/calendar/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isCalendarValid === true) {
            e.next();
        } else {
            throw new BadRequestError(400, jsonRes.message);
        }
    } catch (err) {
        throw new BadRequestError(400, err.message);
    }
}, "farm_calendar");

onRecordUpdateRequest((e) => {
    const id = e.record.id;
    const farm_fk = e.record.get("farm_fk");
    const sowing_date = e.record.get("sowing_date");
    const harvesting_date = e.record.get("harvesting_date");

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({ id, farm_fk, sowing_date, harvesting_date }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/calendar/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isCalendarValid === true) {
            e.next();
        } else {
            throw new BadRequestError(400, jsonRes.message);
        }
    } catch (err) {
        throw new BadRequestError(400, err.message);
    }
}, "farm_calendar");
