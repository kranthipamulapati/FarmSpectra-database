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
        const data = new DynamicModel({
            farm_fk: "",
            index_fk: "",
            satellite_fk: "",
            visit_date: new Date(),
        });

        e.bindBody(data);

        const res = $http.send({
            method: "POST",
            timeout: 120,
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            },
            url: "http://172.25.160.1:3000/farms/satellite/data/index",
        });

        e.json(200, res);
    },
    $apis.requireAuth()
);
