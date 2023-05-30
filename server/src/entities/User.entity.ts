import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity('User')
class User{

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:'varchar',length:'25'})
    nome:string | null

    @Column({type:'int'})
    idade:number | null

    @Column({type:'int'})
    cpf:number | null

    @Column({type:'int'})
    rg:number | null

    @Column({type:'date'})
    data_nasc:string | null

    @Column({type:'varchar',length:20})
    sexo:string | null

    @Column({type:'varchar',length:50})
    mae:string | null

    @Column({type:'varchar',length:50})
    pai:string | null

    @Column({type:'varchar',length:25})
    email:string | null

    @Column({type:'varchar',length:15})
    senha:string | null

    @Column({type:'int'})
    cep:number | null

    @Column({type:'varchar',length:50})
    endereco:string | null

    @Column({type:'int'})
    numero:number | null

    @Column({type:'varchar',length:50})
    bairro:string | null

    @Column({type:'varchar',length:15})
    cidade:string | null

    @Column({type:'varchar',length:10})
    estado:string | null

    @Column({type:'int'})
    telefone_fixo:number | null

    @Column({type:'int'})
    celular:number | null

    @Column({type:'int'})
    altura:number | null

    @Column({type:'int'})
    peso:number | null

    @Column({type:'varchar',length:20})
    tipo_sanguineo:string | null

    @Column({type:'varchar',length:15})
    cor:string | null

}

export {User}