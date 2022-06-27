/*************************************************************************************
 * Smart_Keller: Data
 *************************************************************************************/

BEGIN;

/* Data */

INSERT INTO enum_category(id, name)
VALUES
    (1, 'Nudeln'),
    (2, 'Getreide'),
    (3, 'Öl'),
    (4, 'Konserven'),
    (5, 'Milchprodukte'),
    (6, 'Fleischprodukte'),
    (7, 'Obst'),
    (8, 'Gemüse'),
    (9, 'Medikamente'),
    (10, 'Mehl'),
    (11, 'Eier')
;

INSERT INTO enum_storageplace(id, name)
VALUES
    (1, 'Keller Weißschrank'),
    (2, 'Keller Regal'),
    (3, 'Keller Tisch'),
    (4, 'Kühlschrank'),
    (5, 'Küche Unterschrank'),
    (6, 'Küche Oberschrank'),
    (7, 'Wohnzimmer Pax'),
    (8, 'Küche Ivar'),
    (9, 'Keller Umzugskarton')
;

INSERT INTO e_product(id, name, counter, datum, sp_id, c_id, a_id)
VALUES
    (1, 'Nudeln Barrila',10, '2024-12-01', 9, 1, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (2, 'Buchweizen',12, '2023-05-17', 5, 2, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (3, 'Sonnenblumenöl',2, '2023-07-12', 6, 3, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (4, 'Thunfisch',4, '2022-12-31', 1, 4, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (5, 'Schmand', 1, '2022-05-25', 4, 5, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (6, 'Wurst', 2, '2022-07-12', 4, 6, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (7, 'Bananen', 5, '2022-06-15', 8, 7, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (8, 'Tomaten', 15, '2022-06-18', 8, 8, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (9, 'Ibuprofen', 3, '2024-01-01', 7, 9, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (10, 'Leinenmehl',1, '2023-02-27', 2, 10, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13'),
    (11, 'Eier 18Pack',2, '2022-07-04', 5, 11, 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13')
;


/* Save it */

COMMIT;

-- /*
-- SELECT * FROM account;
-- */
