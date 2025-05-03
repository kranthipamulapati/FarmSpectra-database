/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3104162131")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id = farm_fk.user_fk.id && estimated_yield_in_kgha:isset = false"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3104162131")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != '' && estimated_yield_in_kgha:isset = false"
  }, collection)

  return app.save(collection)
})
