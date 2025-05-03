/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601257007")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "json1199796668",
    "maxSize": 0,
    "name": "bbox",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601257007")

  // remove field
  collection.fields.removeById("json1199796668")

  return app.save(collection)
})
