// replace with localhost in production

onRecordCreateRequest((e) => {
    const farm_fk = e.record.get("farm_fk");
    const start_date = e.record.get("start_date");
    const end_date = e.record.get("end_date");
    const satellite_fk = e.record.get("satellite_fk");

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({
                farm_fk,
                start_date,
                end_date,
                satellite_fk,
            }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/satellite/task/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isTaskValid === true) {
            e.next();
        } else {
            throw new BadRequestError(400, jsonRes.message);
        }
    } catch (err) {
        throw new BadRequestError(400, err.message);
    }
}, "farm_satellite_tasking");

onRecordUpdateRequest((e) => {
    const id = e.record.id;
    const farm_fk = e.record.get("farm_fk");
    const start_date = e.record.get("start_date");
    const end_date = e.record.get("end_date");
    const satellite_fk = e.record.get("satellite_fk");

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({
                id,
                farm_fk,
                start_date,
                end_date,
                satellite_fk,
            }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/satellite/task/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isTaskValid === true) {
            e.next();
        } else {
            throw new BadRequestError(400, jsonRes.message);
        }
    } catch (err) {
        throw new BadRequestError(400, err.message);
    }
}, "farm_satellite_tasking");

onRecordAfterCreateSuccess((e) => {
    const id = e.record.get("id");

    Promise.resolve().then(() => {
        $http.send({
            url:
                "http://172.25.160.1:3000/farms/satellite/data/getPrevious/" +
                id,
            method: "GET",
            timeout: 1, // in seconds
        });
    });

    return e.next();
}, "farm_satellite_tasking");
