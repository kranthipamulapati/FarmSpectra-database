/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3262593660")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id = farm_fk.user_fk.id"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_AyXS")

  // remove field
  collection.fields.removeById("_clone_ePTI")

  // remove field
  collection.fields.removeById("_clone_x2Yh")

  // remove field
  collection.fields.removeById("_clone_sV99")

  // remove field
  collection.fields.removeById("_clone_vaK4")

  // remove field
  collection.fields.removeById("_clone_aY3u")

  // remove field
  collection.fields.removeById("_clone_OtUO")

  // remove field
  collection.fields.removeById("_clone_OBKi")

  // remove field
  collection.fields.removeById("_clone_d4O1")

  // remove field
  collection.fields.removeById("_clone_92gL")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3601257007",
    "hidden": false,
    "id": "_clone_VuGa",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "farm_fk",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_LOHo",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "sowing_date",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_LxIt",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "harvesting_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_AYFI",
    "max": 100000,
    "min": 0,
    "name": "estimated_yield_in_kgha",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_cbax",
    "max": 100000,
    "min": 1,
    "name": "target_yield_in_kgha",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_cnZX",
    "max": 50,
    "min": 3,
    "name": "crop_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_TCgV",
    "max": 50,
    "min": 3,
    "name": "growth_state_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ImXr",
    "max": 50,
    "min": 4,
    "name": "irrigation_method_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_A8M0",
    "max": 50,
    "min": 4,
    "name": "tillage_type_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_JW0n",
    "max": 50,
    "min": 4,
    "name": "season_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3262593660")

  // update collection data
  unmarshal({
    "listRule": null
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3601257007",
    "hidden": false,
    "id": "_clone_AyXS",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "farm_fk",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_ePTI",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "sowing_date",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_x2Yh",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "harvesting_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_sV99",
    "max": 100000,
    "min": 0,
    "name": "estimated_yield_in_kgha",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_vaK4",
    "max": 100000,
    "min": 1,
    "name": "target_yield_in_kgha",
    "onlyInt": false,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_aY3u",
    "max": 50,
    "min": 3,
    "name": "crop_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_OtUO",
    "max": 50,
    "min": 3,
    "name": "growth_state_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_OBKi",
    "max": 50,
    "min": 4,
    "name": "irrigation_method_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_d4O1",
    "max": 50,
    "min": 4,
    "name": "tillage_type_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_92gL",
    "max": 50,
    "min": 4,
    "name": "season_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_VuGa")

  // remove field
  collection.fields.removeById("_clone_LOHo")

  // remove field
  collection.fields.removeById("_clone_LxIt")

  // remove field
  collection.fields.removeById("_clone_AYFI")

  // remove field
  collection.fields.removeById("_clone_cbax")

  // remove field
  collection.fields.removeById("_clone_cnZX")

  // remove field
  collection.fields.removeById("_clone_TCgV")

  // remove field
  collection.fields.removeById("_clone_ImXr")

  // remove field
  collection.fields.removeById("_clone_A8M0")

  // remove field
  collection.fields.removeById("_clone_JW0n")

  return app.save(collection)
})
