export class Filme { 
   id!: number; 
   nome!: string; 
   descricao!: string;
   imagem!: string; 
   categoria!: string;
   duracao!: number; 
   preco! : number; 
   anoDeLancamento!: number;
   avaliacao! : number; 
   alugado: boolean = false;
   dataDevolucao!: string; 
}