import { Fornecedor } from './Fornecedor';

export class CadastroProdutos {
    _id? : string;
    createdAt? : Date;
    updatedAt? : Date;
    data!: Date;
    nomeProduto! : String;
    unidadeMed! : String;
    fornecedores!: Fornecedor[];
}
 