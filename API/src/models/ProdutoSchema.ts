import { model, Schema } from "mongoose";
import {fornecedorSchema} from "../models/FornecedorSchema";

const produtoSchema = new Schema(
  {
    
    fornecedor:{
      type: Schema.Types.Number,
      ref: "fornecedores",
      //required: [true, "O campo Fornecedor é obrigatório!"],
    },
    
    nomeProduto: {
      type: String,
      required: [true, "O campo NOME DO PRODUTO é obrigatório!"],
    },

    unidadeMed: {
      type: String,
      required: [true, "O campo UNIDADE DE MEDIDA é obrigatório!"],
      enum: ["UNIDADE", "CAIXA", "PACOTE"],
    },
    
   // fornecedores : [fornecedorSchema]
    
  },
    
  {
    timestamps: true,
  }
);

export default model("produtos", produtoSchema);
