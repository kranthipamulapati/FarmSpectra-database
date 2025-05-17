/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      }
    ],
    "id": "pbc_3262593660",
    "indexes": [],
    "listRule": null,
    "name": "farm_calendar_info",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n  farm_calendar.id AS id\n  FROM farm_calendar \n  INNER JOIN master_crops ON master_crops.id = farm_calendar.crop_fk\n  INNER JOIN master_growth_stages ON master_growth_stages.id = farm_calendar.growth_stage_fk\n  INNER JOIN master_irrigation_methods ON master_irrigation_methods.id = farm_calendar.irrigation_method_fk\n  LEFT JOIN master_tillage_types ON master_tillage_types.id = farm_calendar.tillage_type_fk\n  LEFT JOIN master_seasons ON master_seasons.id = farm_calendar.season_fk",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3262593660");

  return app.delete(collection);
})
