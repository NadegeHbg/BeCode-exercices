CREATE TABLE "users"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "email" VARCHAR(150) NOT NULL UNIQUE,
    "password" VARCHAR(60) NOT NULL
);

CREATE TABLE "profile"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "user_id" INTEGER NOT NULL
);

CREATE TABLE "profile_per_loby"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "profile_id" INTEGER NOT NULL,
    "lobby_id" INTEGER NOT NULL
);

CREATE TABLE "lobby"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "profile_id" BIGINT NOT NULL
);

CREATE TABLE "post"(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "profile_id" INTEGER NOT NULL,
    "lobby_id" INTEGER NOT NULL,
    "message" VARCHAR(255) NOT NULL
);

ALTER TABLE
    "profile" ADD CONSTRAINT "profile_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "profile_per_loby" ADD CONSTRAINT "profile_per_loby_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "post" ADD CONSTRAINT "post_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "lobby" ADD CONSTRAINT "lobby_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "profile_per_loby" ADD CONSTRAINT "profile_per_loby_lobby_id_foreign" FOREIGN KEY("lobby_id") REFERENCES "lobby"("id");
ALTER TABLE
    "post" ADD CONSTRAINT "post_lobby_id_foreign" FOREIGN KEY("lobby_id") REFERENCES "lobby"("id");