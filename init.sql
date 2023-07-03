CREATE TABLE IF NOT EXISTS public.users
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    surname character varying COLLATE pg_catalog."default" NOT NULL,
    address character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    id_sponsor integer NOT NULL DEFAULT 0,
    number_sponsored integer DEFAULT 0,
    role character varying COLLATE pg_catalog."default",
    is_suspended boolean DEFAULT false
);

CREATE TABLE IF NOT EXISTS public.performance_log
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    log character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT performance_log_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.connection_log
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    log character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT connection_log_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.components
(
    component_name character varying COLLATE pg_catalog."default" NOT NULL,
    creator character varying COLLATE pg_catalog."default" NOT NULL,
    code character varying COLLATE pg_catalog."default" NOT NULL,
    last_updater character varying COLLATE pg_catalog."default",
    creation_date date NOT NULL,
    last_update_date date,
    city character varying COLLATE pg_catalog."default" NOT NULL,
    category character varying COLLATE pg_catalog."default" NOT NULL,
    component_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 )
);

CREATE TABLE IF NOT EXISTS public.component_log
(
    log character varying COLLATE pg_catalog."default" NOT NULL,
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 )
);