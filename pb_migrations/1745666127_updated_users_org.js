/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1274343248")

  // add field
  collection.fields.addAt(9, new Field({
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

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1795275867",
    "max": 20,
    "min": 8,
    "name": "phone_number",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1274343248")

  // remove field
  collection.fields.removeById("relation3240371186")

  // remove field
  collection.fields.removeById("relation636461696")

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1795275867",
    "max": 20,
    "min": 8,
    "name": "phone_number",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
