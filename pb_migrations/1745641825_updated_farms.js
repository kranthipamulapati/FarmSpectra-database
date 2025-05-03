/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601257007")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3601257007")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.coordinates:length >= 4"
  }, collection)

  return app.save(collection)
})
