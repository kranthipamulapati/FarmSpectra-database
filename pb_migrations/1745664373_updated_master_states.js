/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_689368338")

  // update field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_815199845",
    "hidden": false,
    "id": "relation3993517870",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "country_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_689368338")

  // update field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_815199845",
    "hidden": false,
    "id": "relation3993517870",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "country_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
