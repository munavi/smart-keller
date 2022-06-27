DROP TABLE IF EXISTS enum_category         CASCADE;
DROP TABLE IF EXISTS enum_storageplace     CASCADE;
DROP TABLE IF EXISTS e_product             CASCADE;

/*****************************************************************************
 * Datentypen und Tabellen
 *****************************************************************************/


CREATE TABLE enum_category
("id"   INTEGER     NOT NULL,
 "name" D_UNTAINTED NOT NULL,

 CONSTRAINT enum_category_pk
     PRIMARY KEY ("id"),

 CONSTRAINT enum_category_unique_name
     UNIQUE ("name")
);

CREATE TABLE enum_storageplace
("id"   INTEGER     NOT NULL,
 "name" D_UNTAINTED NOT NULL,

 CONSTRAINT enum_storageplace_pk
     PRIMARY KEY ("id"),

 CONSTRAINT enum_storageplace_unique_name
     UNIQUE ("name")
);

CREATE TABLE e_product
("id"             INTEGER      NOT NULL,
 "name"           D_UNTAINTED  NOT NULL,
 "counter"        INTEGER      NOT NULL,
 "datum"          DATE         NOT NULL,
 "sp_id"          INTEGER      NOT NULL,
 "c_id"           INTEGER      NOT NULL,
 "a_id"           UUID         NOT NULL,
 
 CONSTRAINT product_pk
     PRIMARY KEY ("id"),

 CONSTRAINT product_unique_name
     UNIQUE ("name"),
 
 CONSTRAINT product_fk_enum_category_id
     FOREIGN KEY ("c_id")   REFERENCES enum_category("id"),

 CONSTRAINT product_fk_enum_storageplace_id
     FOREIGN KEY ("sp_id") REFERENCES enum_storageplace("id"),

  CONSTRAINT product_fk_e_account_id
     FOREIGN KEY ("a_id") REFERENCES account("id")
);
