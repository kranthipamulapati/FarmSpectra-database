/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1317901653")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  FST.id,\n  FST.farm_fk,\n  FST.satellite_fk,\n  FST.start_date,\n  FST.end_date,\n  FSM.first_visit_date,\n  farms.bbox,\n  farms.coordinates,\n  MS.code,\n  MS.revisit_time,\n  MS.collection_code,\n  MS.start_date as satellite_start_date\nFROM farm_satellite_tasking FST\nINNER JOIN farms ON farms.id = FST.farm_fk\nINNER JOIN master_satellites MS ON MS.id = FST.satellite_fk\nLEFT JOIN farm_satellite_metadata FSM ON\n  FSM.farm_fk = FST.farm_fk AND\n  FSM.satellite_fk = FST.satellite_fk\nWHERE\n  FST.active = true AND farms.active = true AND MS.active = true"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_tfmW")

  // remove field
  collection.fields.removeById("_clone_DBGA")

  // remove field
  collection.fields.removeById("_clone_kC8t")

  // remove field
  collection.fields.removeById("_clone_USHP")

  // remove field
  collection.fields.removeById("_clone_FMJa")

  // remove field
  collection.fields.removeById("_clone_zLrc")

  // remove field
  collection.fields.removeById("_clone_2VHq")

  // remove field
  collection.fields.removeById("_clone_dPl0")

  // remove field
  collection.fields.removeById("_clone_T9ol")

  // remove field
  collection.fields.removeById("_clone_Q4rZ")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3601257007",
    "hidden": false,
    "id": "_clone_Utu4",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "farm_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_906893233",
    "hidden": false,
    "id": "_clone_JDIN",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "satellite_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_Akhi",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "start_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_kaSr",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "end_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_A0ME",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "first_visit_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_lI2J",
    "maxSize": 0,
    "name": "bbox",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "_clone_6CMB",
    "maxSize": 0,
    "name": "coordinates",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_R4y9",
    "max": 2,
    "min": 2,
    "name": "code",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_yRuI",
    "max": null,
    "min": null,
    "name": "revisit_time",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_zl63",
    "max": 100,
    "min": 1,
    "name": "collection_code",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "_clone_AusQ",
    "max": "",
    "min": "",
    "name": "satellite_start_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1317901653")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  FST.id,\n  FST.farm_fk,\n  FST.satellite_fk,\n  FST.start_date,\n  FST.end_date,\n  FSM.first_visit_date,\n  farms.coordinates,\n  MS.code,\n  MS.revisit_time,\n  MS.collection_code,\n  MS.start_date as satellite_start_date\nFROM farm_satellite_tasking FST\nINNER JOIN farms ON farms.id = FST.farm_fk\nINNER JOIN master_satellites MS ON MS.id = FST.satellite_fk\nLEFT JOIN farm_satellite_metadata FSM ON\n  FSM.farm_fk = FST.farm_fk AND\n  FSM.satellite_fk = FST.satellite_fk\nWHERE\n  FST.active = true AND farms.active = true AND MS.active = true"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3601257007",
    "hidden": false,
    "id": "_clone_tfmW",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "farm_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_906893233",
    "hidden": false,
    "id": "_clone_DBGA",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "satellite_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_kC8t",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "start_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_USHP",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "end_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_FMJa",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "first_visit_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "_clone_zLrc",
    "maxSize": 0,
    "name": "coordinates",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_2VHq",
    "max": 2,
    "min": 2,
    "name": "code",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "_clone_dPl0",
    "max": null,
    "min": null,
    "name": "revisit_time",
    "onlyInt": true,
    "presentable": false,
    "required": true,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_T9ol",
    "max": 100,
    "min": 1,
    "name": "collection_code",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_Q4rZ",
    "max": "",
    "min": "",
    "name": "satellite_start_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("_clone_Utu4")

  // remove field
  collection.fields.removeById("_clone_JDIN")

  // remove field
  collection.fields.removeById("_clone_Akhi")

  // remove field
  collection.fields.removeById("_clone_kaSr")

  // remove field
  collection.fields.removeById("_clone_A0ME")

  // remove field
  collection.fields.removeById("_clone_lI2J")

  // remove field
  collection.fields.removeById("_clone_6CMB")

  // remove field
  collection.fields.removeById("_clone_R4y9")

  // remove field
  collection.fields.removeById("_clone_yRuI")

  // remove field
  collection.fields.removeById("_clone_zl63")

  // remove field
  collection.fields.removeById("_clone_AusQ")

  return app.save(collection)
})
