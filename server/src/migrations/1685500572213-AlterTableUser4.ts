import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableUser41685500572213 implements MigrationInterface {
    name = 'AlterTableUser41685500572213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "User" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "nome" varchar(100), "idade" varchar, "cpf" varchar, "rg" varchar, "data_nasc" date, "sexo" varchar(100), "mae" varchar(100), "pai" varchar(100), "email" varchar(100), "senha" varchar(100), "cep" varchar, "endereco" varchar(100), "numero" varchar, "bairro" varchar(100), "cidade" varchar(100), "estado" varchar(100), "telefone_fixo" varchar, "celular" varchar, "altura" varchar(100), "peso" varchar, "tipo_sanguineo" varchar(100), "cor" varchar(100))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "User"`);
    }

}
