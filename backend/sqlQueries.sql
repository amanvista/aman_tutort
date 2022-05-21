create table admin (
	id serial PRIMARY KEY,
  	"userName" varchar(50) UNIQUE NOT NULL,
  	"pwdHash" text NOT NULL
);

insert into admin("userName", "pwdHash") values('TutortAdmin', '$2b$10$B45xwREnlTZZbuBkhDOTGu2VCEfqkZNkYD8Xugfo9bmTfLhfOfsbq');
insert into admin("userName", "pwdHash") values('Abhishek', '$2b$10$hGLvnEUJiKiWzpbtVbMIRemQ0368mITH/WuynuILYpUHGbbMEQWoO');
insert into admin("userName", "pwdHash") values('Manu', '$2b$10$63ZT5mCNi7r0wKpREfRDMOuSyw8tuIZ80kjmSK4FmCuBOj5Sz95/2');

-- USE SINGLE QUOTES TO INSERT VALUES NOT DOUBLE, AND DOUBLE QUOTES AROUND COLUMN NAMES

-- COURSE-CONFIG TABLE

create table "courseConfig" (
	id serial PRIMARY KEY,
	"courseId" int UNIQUE NOT NULL,
	"courseName" text NOT NULL,
	"batchDate" varchar(50) NOT NULL,
	brochure text NOT NULL,
	"currentFees" int NOT NULL,
	discount smallint,
	"discountDate" varchar(50),
	"classTimings" varchar(30) NOT NULL,
	"applicationDate" varchar(50)
);

--DSA

insert into "courseConfig" (
	id, 
	"courseId", 
	"courseName", 
	"batchDate", 
	brochure, 
	"currentFees", 
	discount,
	"discountDate",
	"classTimings"
) values (
	1,
	1,
	'Data Structures and Algorithms Master''s Course',
	'26th September',
	'https://drive.google.com/file/d/1v0x8Y-5uVMJVre_wg0aHvHosv3ZdYd6m/view?usp=sharing',
	27999,
	25,
	'10th September',
	'9am - 11:30am'
);

--SYSTEM DESIGN

insert into "courseConfig" (
	id, 
	"courseId", 
	"courseName", 
	"batchDate", 
	brochure, 
	"currentFees", 
	discount,
	"discountDate",
	"classTimings"
) values (
	2,
	2,
	'Advanced Data Structures, Algorithms and System Design Course',
	'26th September',
	'https://drive.google.com/file/d/1wPgYlKiQuYlVAL8NnIXbRO_oLNJ-BFgp/view?usp=sharing',
	44999,
	25,
	'10th September',
	'9am - 11:30am'
);

--DATA SCIENCE

insert into "courseConfig" (
	id, 
	"courseId", 
	"courseName", 
	"batchDate", 
	brochure, 
	"currentFees", 
	discount,
	"discountDate",
	"classTimings"
) values (
	3,
	3,
	'Data Science and Machine Learning Master''s Course ',
	'12th September',
	'https://drive.google.com/file/d/1_3XyUogCSfNJKfMjQtyVA8TP_AEJb3LH/view?usp=sharing',
	44999,
	25,
	'10th September',
	'9am - 12pm'
);

--AI AND ML

insert into "courseConfig" (
	id, 
	"courseId", 
	"courseName", 
	"batchDate", 
	brochure, 
	"currentFees", 
	discount,
	"discountDate",
	"classTimings"
) values (
	4,
	4,
	'Advanced Artificial Intelligence and Machine Learning Course',
	'12th September',
	'https://drive.google.com/file/d/1vwb7BaIt83wXAdbmGVHQ0FUhd6ExgF8b/view?usp=sharing',
	59999,
	25,
	'10th September',
	'9am - 12pm'
);

-- INSERTING batchDay COLUMN IN COURSE CONFIG

alter table "courseConfig"
add column "batchDay" varchar(50);

-- MASTER CLASS DETAILS
-- Table Name: masterClassDetails

-- masterClassId
-- masterClassName
-- masterClassStartTime  --(Timestamp)
-- masterClassEndTime
-- masterClassInstructor
-- masterClassCover
-- masterClassDetail1
-- masterClassDetail2
-- masterClassDetail3
-- peopleRegistered
-- peopleAttended

-- calenderInvite
-- meetingInvite


-- USER DETAILS
-- Table Name: masterClassUsers

-- userId --(Unique code)
-- userName
-- mobile
-- email
-- linkedin
-- experience

-- -- MASTER CLASS ATTENDED
-- Table Name: masterClassUserDetails

-- userId
-- masterClassId -- (userId & masterClassId together will be primary key)
-- masterClassAttended

create table "masterClassDetails" (
	"masterClassId" serial PRIMARY KEY,
	"masterClassName" text NOT NULL,
	"masterClassStartTime" timestamp NOT NULL,
	"masterClassEndTime" timestamp NOT NULL,
	"masterClassInstructor" text,
	"masterClassCover" text,
	"masterClassDetail1" text,
	"masterClassDetail2" text,
	"masterClassDetail3" text,
	"usersRegistered" int [],
	"usersAttended" int []
	--"usersRegistered" bytea[],
	--"usersAttended" bytea[]
); 

ALTER TABLE "masterClassDetails"
ADD COLUMN "externalLink" text;

CREATE EXTENSION hstore;

create table "registeredUsers" (
	"userId" serial PRIMARY KEY,
	-- "userId" bytea PRIMARY KEY,
	"userName" text NOT NULL,
	"mobile" text NOT NULL,
	"email" text NOT NULL,
	"linkedin" text,
	"experience" int NOT NULL,
	"masterClass" hstore --(INSERT KEY AS masterClassId, VALUE AS ATTENDED OR NOT)
	-- "masterClassesRegistered",
	-- "masterClassesAttended"
);

-- insert into masterClassDetails(
-- 	"masterClassName",
-- 	"masterClassStartTime" timestamp[] NOT NULL,
-- 	"masterClassEndTime" timestamp[] NOT NULL,
-- 	"masterClassInstructor" text,
-- 	"masterClassCover" text,
-- 	"masterClassDetail1" text,
-- 	"masterClassDetail2" text,
-- 	"masterClassDetail3" text,
-- )

insert into "courseConfig" (
	"id",
	"courseId", 
	"courseName", 
	"batchDate", 
	brochure, 
	"currentFees", 
	discount,
	"discountDate",
	"classTimings"
) values (
	5,
	5,
	'Job Oriented Full Stack Specialisation In Software Development',
	'15th October',
	'https://drive.google.com/file/d/1wPgYlKiQuYlVAL8NnIXbRO_oLNJ-BFgp/view?usp=sharing',
	69999,
	20,
	'10th October',
	'9am - 12pm'
);