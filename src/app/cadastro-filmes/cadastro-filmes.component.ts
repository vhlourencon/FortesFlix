import { Component, NgModule, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Filme } from '../lista-filmes/filme';
import { FilmeService } from '../lista-filmes/lista-filmes.service';

@Component({
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})




export class CadastroFilmesComponent implements OnInit {
  
  generos: any[] = [
    { id: 1, name: 'Ação' },
    { id: 2, name: 'Romance' },
    { id: 3, name: 'Aventura' },
    { id: 4, name: 'Terror' },
    { id: 5, name: 'Ficção cientifica' },
    { id: 6, name: 'Comédia' },
    { id: 7, name: 'Aventura' },
    { id: 7, name: 'Drama' },
  ];
  filmeID!: number;
  filme!: Filme;
  constructor(private activatedRoute: ActivatedRoute, private filmeService: FilmeService, private router : Router) {
  }

  categoriaId : string = "1"; 
  categoriaSelecionada! : string;

  salvar(): void {
   // this.filme.categoria = this.getGeneroSelecionado()
    //console.log(salvars);
    this.categoriaSelecionada  =  this.generos.find((g: any) => g.id === +this.categoriaId).name;
    this.filme.categoria = this.categoriaSelecionada;
    console.log(this.categoriaSelecionada);
    this.filmeService.salvar(this.filme).subscribe({
      next: filmeCallBack =>{ console.log('Saved with success', filmeCallBack)
      this.router.navigate(['../../filmes' ], { relativeTo: this.activatedRoute} );
     
    },
      error: err => console.log('Error', err)
    }) ;
    
  }
 
 
 

 

  criarFilmeEmBranco(): Filme {
    return {

    } as Filme;
  }


  ngOnInit(): void {
    
    
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.filmeID = +params['id'];
          if (  params['id'] == "null") {
            this.filme = this.criarFilmeEmBranco()
          } else {
            this.filmeService.retrieveById(this.filmeID).subscribe({
              next: filmeCallBack => {
                this.filme = filmeCallBack
                 this.categoriaId =    this.generos.find((g: any) => g.name === this.filme.categoria).id;
              },
              error: err => console.log('Error', err)
            });
          }
        }
      );
  }


}
