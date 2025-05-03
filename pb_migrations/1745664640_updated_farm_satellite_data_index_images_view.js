/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1692114455")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  II.id,\n  FSD.farm_fk,\n  MS.code as satellite_code,\n  MI.code as index_code,\n  FSD.visit_date,\n  FSD.cloud_cover,\n  II.image_url\nFROM farm_satellite_index_images II\nINNER JOIN master_indices MI ON MI.id = II.index_fk\nINNER JOIN master_satellites MS ON MS.id = FSD.satellite_fk\nINNER JOIN farm_satellite_visit_data FSD ON II.visit_fk = FSD.id"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_A8Bk")

  // remove field
  collection.fields.removeById("_clone_zLBp")

  // remove field
  collection.fields.removeById("_clone_6rQH")

  // remove field
  collection.fields.removeById("_clone_Uwc3")

  // remove field
  collection.fields.removeById("_clone_6gZe")

  // remove field
  collection.fields.removeById("_clone_Akzu")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3601257007",
    "hidden": false,
    "id": "_clone_svyW",
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
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_uQWV",
    "max": 2,
    "min": 2,
    "name": "satellite_code",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_nLQe",
    "max": 10,
    "min": 2,
    "name": "index_code",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_iMQi",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "visit_date",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_ewNO",
    "max": 100,
    "min": 0,
    "name": "cloud_cover",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_RUbq",
    "name": "image_url",
    "onlyDomains": [],
    "presentable": false,
    "required": true,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1692114455")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n  II.id,\n  MI.code as index_code,\n  MS.code as satellite_code,\n  FSD.farm_fk,\n  FSD.visit_date,\n  FSD.cloud_cover,\n  II.image_url\nFROM farm_satellite_index_images II\nINNER JOIN master_indices MI ON MI.id = II.index_fk\nINNER JOIN master_satellites MS ON MS.id = FSD.satellite_fk\nINNER JOIN farm_satellite_data FSD ON II.tiff_fk = FSD.id"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_A8Bk",
    "max": 10,
    "min": 2,
    "name": "index_code",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_zLBp",
    "max": 2,
    "min": 2,
    "name": "satellite_code",
    "pattern": "",
    "presentable": true,
    "primaryKey": false,
    "required": true,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": true,
    "collectionId": "pbc_3601257007",
    "hidden": false,
    "id": "_clone_6rQH",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "farm_fk",
    "presentable": true,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_Uwc3",
    "max": "2050-12-31 00:00:00.000Z",
    "min": "2000-01-01 00:00:00.000Z",
    "name": "visit_date",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_6gZe",
    "max": 100,
    "min": 0,
    "name": "cloud_cover",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": [],
    "hidden": false,
    "id": "_clone_Akzu",
    "name": "image_url",
    "onlyDomains": [],
    "presentable": true,
    "required": true,
    "system": false,
    "type": "url"
  }))

  // remove field
  collection.fields.removeById("_clone_svyW")

  // remove field
  collection.fields.removeById("_clone_uQWV")

  // remove field
  collection.fields.removeById("_clone_nLQe")

  // remove field
  collection.fields.removeById("_clone_iMQi")

  // remove field
  collection.fields.removeById("_clone_ewNO")

  // remove field
  collection.fields.removeById("_clone_RUbq")

  return app.save(collection)
})
