/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3104162131")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date4221475977",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "harvesting_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3104162131")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date4221475977",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "harvesting_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
})
