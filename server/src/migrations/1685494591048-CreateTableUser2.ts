import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser21685494591048 implements MigrationInterface {
    name = 'CreateTableUser21685494591048'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" ADD "altura" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "User" ADD "peso" character varying`);
        await queryRunner.query(`ALTER TABLE "User" ADD "tipo_sanguineo" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "User" ADD "cor" character varying(100)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "cor"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "tipo_sanguineo"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "peso"`);
        await queryRunner.query(`ALTER TABLE "User" DROP COLUMN "altura"`);
    }

}
