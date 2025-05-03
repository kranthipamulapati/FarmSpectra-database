/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1274343248")

  // remove field
  collection.fields.removeById("relation3240371186")

  // remove field
  collection.fields.removeById("relation636461696")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1274343248")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3241045760",
    "hidden": false,
    "id": "relation3240371186",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "role_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
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
})
