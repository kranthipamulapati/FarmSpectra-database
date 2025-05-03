/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3104162131")

  // update collection data
  unmarshal({
    "updateRule": "@request.auth.id != '' && @request.body.sowing_date <= @request.body.harvesting_date && estimated_yield_in_kgha:isset = false"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3104162131")

  // update collection data
  unmarshal({
    "updateRule": null
  }, collection)

  return app.save(collection)
})
