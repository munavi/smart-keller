/*************************************************************************************
 * Erweiterstes Beispiel aus der Vorlesung "Datenmanagement" von Wolfgang Kowarschick
 *************************************************************************************/

/* *** Schema *** */
BEGIN;

/* Cleanup */

DROP TABLE IF EXISTS hello CASCADE;

/* Tables */
CREATE TABLE hello
(id   VARCHAR(5) PRIMARY KEY,
 data JSONB
);

COMMIT;


/* *** Data *** */
BEGIN;

INSERT INTO hello(id, data)
VALUES
('de', '{ "lang": "de",

          "phrases":
          { "hello": "Hallo, $1!"
          },

          "i18n":
          { "stranger":       "Fremder",
            "askName":        "Wie heißen Sie?",
            "welcome":        "Willkommen zu Web-Programmierung!",
            "buttonReset":    "Reset",
            "buttonSayHello": "Begrüßung"
          }
        }'
),

('en', '{ "lang": "en",

          "phrases":
          { "hello": "Hello, $1!"
          },

          "i18n":
          { "stranger":       "Stranger",
            "askName":        "What''s your name?",
            "welcome":        "Welcome to Web Programing!",
            "buttonReset":    "reset",
            "buttonSayHello": "say hello"
          }
        }'
),

('fr', '{ "lang": "fr",

          "phrases":
          { "hello": "Bonjour $1!"
          },

          "i18n":
          { "stranger":       "étranger",
            "askName":        "Quel est ton nom?",
            "welcome":        "Bienvenue dans la programmation Web!",
            "buttonReset":    "réinitialiser",
            "buttonSayHello": "salutation"
          }
        }'
)
;

COMMIT;
