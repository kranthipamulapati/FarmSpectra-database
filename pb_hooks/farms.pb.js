// replace with localhost in production

onRecordCreateRequest((e) => {
    const coordinates = JSON.parse(e.record.get("coordinates"));

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({ coordinates }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/create/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isPolygonValid === true) {
            e.record.set("bbox", jsonRes.bbox);
            e.record.set("area_in_sqm", jsonRes.area);
            e.next();
        } else {
            throw new BadRequestError(400, jsonRes.message);
        }
    } catch (err) {
        throw new BadRequestError(400, err.message);
    }
}, "farms");

onRecordUpdateRequest((e) => {
    const id = e.record.id;
    const coordinates = JSON.parse(e.record.get("coordinates"));

    try {
        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify({ id, coordinates }),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/update/validate",
        });

        const jsonRes = res.json;

        if (jsonRes.isPolygonValid === true) {
            e.record.set("bbox", jsonRes.bbox);
            e.record.set("area_in_sqm", jsonRes.area);
            e.next();
        } else {
            throw new BadRequestError(400, jsonRes.message);
        }
    } catch (err) {
        throw new BadRequestError(400, err.message);
    }
}, "farms");
