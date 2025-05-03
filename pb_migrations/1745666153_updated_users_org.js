/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1274343248")

  // update field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2873630990",
    "hidden": false,
    "id": "relation636461696",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "organization_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1274343248")

  // update field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2873630990",
    "hidden": false,
    "id": "relation636461696",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "organization_fk",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
