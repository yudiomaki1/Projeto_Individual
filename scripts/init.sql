drop table if exists tasks; 
drop table if exists categories;
drop table if exists users;
create table users (
  id uuid primary key default gen_random_uuid(), /*O uuid gera automaticamente um id, utilizando o gen_random_uuid*/
  name varchar(100) not null,
  email varchar(100) unique not null
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  name varchar(100),
  color varchar(100),
  user_id uuid references users(id) 
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  title varchar(100),
  description text, /*"text" faz com que não tenha limite de letras*/
  created_at timestamp default now(),
  due_date date,
  user_id uuid references users(id),
  category_id uuid references categories(id)
);