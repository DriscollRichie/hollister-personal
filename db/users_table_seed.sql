create table if not exists users (
   id serial primary key,
   display_name text,
   auth_id text,
   img text
)