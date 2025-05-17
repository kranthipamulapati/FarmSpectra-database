/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3262593660")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  farm_calendar.id,\n  farm_calendar.sowing_date,\n  farm_calendar.harvesting_date,\n  farm_calendar.estimated_yield_in_kgha,\n  farm_calendar.target_yield_in_kgha,\n  master_crops.name AS crop_name,\n  master_growth_stages.description AS growth_state_description,\n  master_irrigation_methods.description AS irrigation_method_description,\n  master_tillage_types.description AS tillage_type_description,\n  master_seasons.name AS season_name\n  FROM farm_calendar \n  INNER JOIN master_crops ON master_crops.id = farm_calendar.crop_fk\n  INNER JOIN master_growth_stages ON master_growth_stages.id = farm_calendar.growth_stage_fk\n  INNER JOIN master_irrigation_methods ON master_irrigation_methods.id = farm_calendar.irrigation_method_fk\n  LEFT JOIN master_tillage_types ON master_tillage_types.id = farm_calendar.tillage_type_fk\n  LEFT JOIN master_seasons ON master_seasons.id = farm_calendar.season_fk"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Kmqi")

  // remove field
  collection.fields.removeById("_clone_bfoP")

  // remove field
  collection.fields.removeById("_clone_xUGc")

  // remove field
  collection.fields.removeById("_clone_08AO")

  // remove field
  collection.fields.removeById("_clone_ihaF")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_pUlT",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "sowing_date",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_UJj6",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "harvesting_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_LDF2",
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
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_xK1g",
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
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ofPZ",
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
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_wKBm",
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
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_0XOc",
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
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_0azd",
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
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_rw2l",
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
    "viewQuery": "SELECT \n  farm_calendar.id AS id,\n  master_crops.name AS crop_name,\n  master_growth_stages.description AS growth_state_description,\n  master_irrigation_methods.description AS irrigation_method_description,\n  master_tillage_types.description AS tillage_type_description,\n  master_seasons.name AS season_name\n  FROM farm_calendar \n  INNER JOIN master_crops ON master_crops.id = farm_calendar.crop_fk\n  INNER JOIN master_growth_stages ON master_growth_stages.id = farm_calendar.growth_stage_fk\n  INNER JOIN master_irrigation_methods ON master_irrigation_methods.id = farm_calendar.irrigation_method_fk\n  LEFT JOIN master_tillage_types ON master_tillage_types.id = farm_calendar.tillage_type_fk\n  LEFT JOIN master_seasons ON master_seasons.id = farm_calendar.season_fk"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Kmqi",
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
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_bfoP",
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
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_xUGc",
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
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_08AO",
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
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ihaF",
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
  collection.fields.removeById("_clone_pUlT")

  // remove field
  collection.fields.removeById("_clone_UJj6")

  // remove field
  collection.fields.removeById("_clone_LDF2")

  // remove field
  collection.fields.removeById("_clone_xK1g")

  // remove field
  collection.fields.removeById("_clone_ofPZ")

  // remove field
  collection.fields.removeById("_clone_wKBm")

  // remove field
  collection.fields.removeById("_clone_0XOc")

  // remove field
  collection.fields.removeById("_clone_0azd")

  // remove field
  collection.fields.removeById("_clone_rw2l")

  return app.save(collection)
})
