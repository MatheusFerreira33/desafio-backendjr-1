import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableUser1685494845446 implements MigrationInterface {
    name = 'AlterTableUser1685494845446'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "cpf" numeric`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "rg"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "rg" numeric`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "cep" numeric`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "numero" numeric`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "telefone_fixo"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "telefone_fixo" numeric`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "celular"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "celular" numeric`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "celular"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "celular" integer`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "telefone_fixo"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "telefone_fixo" integer`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "numero" integer`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "cep" integer`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "rg"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "rg" integer`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "User" ADD "cpf" integer`);
    }

}
