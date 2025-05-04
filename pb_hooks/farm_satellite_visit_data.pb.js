// replace with localhost in production

onRecordAfterCreateSuccess((e) => {
    const id = e.record.get("id");

    Promise.resolve().then(() => {
        $http.send({
            url:
                "http://172.25.160.1:3000/farms/satellite/process/indices/" +
                id,
            method: "GET",
            timeout: 1, // in seconds
        });
    });

    return e.next();
}, "farm_satellite_visit_data");

routerAdd(
    "POST",
    "/api/farms/satellite/index/data",
    (e) => {
        const body = e.requestInfo().body;

        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/satellite/data/index",
        });

        const resJson = res.json;

        e.json(200, { data: resJson.data });
    },
    $apis.requireAuth()
);
