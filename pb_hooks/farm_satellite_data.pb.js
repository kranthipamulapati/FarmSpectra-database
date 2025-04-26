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
}, "farm_satellite_data");
