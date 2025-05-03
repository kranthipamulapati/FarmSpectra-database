// replace with localhost in production

// farm create request
// @param - coordinates - Array<{lat: number, lng: number}>
// checks -
//     1. Coordinates is an array of {lat: number, lng: number}
//     2. Coordinates length must be >= 4
//     3. Polygon is closed i.e first & last coordinates must be equal
//     4. All coordinates must be in bounds (-90, 90, -180, 180)
//     5. Must not self intersect
//     6. Min area is 100 sqm & max is 250 hectares/600 acres
// bbox, area_in_sqm are calculated locally, data coming from api is replaced

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
            throw new Error(jsonRes.message);
        }
    } catch (err) {
        throw new ApiError(400, err.message);
    }
}, "farms");

// farm update request
// only name, active can be changed
// throws error if coordinates are changed
// bbox, area_in_sqm are replaced by local data,
//   so at to avoid conflict with api data as they can not be changed

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
            throw new Error(jsonRes.message);
        }
    } catch (err) {
        throw new ApiError(400, err.message);
    }
}, "farms");
