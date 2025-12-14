CREATE TABLE ses_info_arr(
	id SERIAL PRIMARY KEY,
	sessionId UUID,
	channelId UUID,
	companyId TEXT,
	ekbId TEXT
);

INSERT INTO ses_info_arr (sessionId, channelId, companyId, ekbId)
VALUES 
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', '111111'),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', '222222'),
('f4465250-1066-11eb-a1ba-333704aff6af', '543ea1f0-81d8-11e8-99e2-75a22f922020', 'i14778026796', '333333');