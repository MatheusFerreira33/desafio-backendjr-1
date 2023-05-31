import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity('User')
class User{

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type:'varchar',length:'100',default:null})
    nome:string | null

    @Column({type:'varchar',default:null})
    idade:string | null

    @Column({type:'varchar',default:null})
    cpf:string | null

    @Column({type:'varchar',default:null})
    rg:string | null

    @Column({type:'date',default:null})
    data_nasc:string | null

    @Column({type:'varchar',length:100,default:null})
    sexo:string | null

    @Column({type:'varchar',length:100,default:null})
    mae:string | null

    @Column({type:'varchar',length:100,default:null})
    pai:string | null

    @Column({type:'varchar',length:100,default:null})
    email:string | null

    @Column({type:'varchar',length:100,default:null})
    senha:string | null

    @Column({type:'varchar',default:null})
    cep:string | null

    @Column({type:'varchar',length:100,default:null})
    endereco:string | null

    @Column({type:'varchar',default:null})
    numero:string | null

    @Column({type:'varchar',length:100,default:null})
    bairro:string | null

    @Column({type:'varchar',length:100,default:null})
    cidade:string | null

    @Column({type:'varchar',length:100,default:null})
    estado:string | null

    @Column({type:'varchar',default:null})
    telefone_fixo:string | null

    @Column({type:'varchar',default:null})
    celular:string | null

    @Column({type:'varchar',length:'100',default:null})
    altura:string | null

    @Column({type:'varchar',default:null})
    peso:string | null

    @Column({type:'varchar',length:100,default:null})
    tipo_sanguineo:string | null

    @Column({type:'varchar',length:100,default:null})
    cor:string | null

}

export {User}