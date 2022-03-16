import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute, private filmeService: FilmeService) {
  }


  salvar(): void {
    this.filmeService.salvar(this.filme).subscribe();
  }


  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.filmeID = +params['id'];
          this.filmeService.retrieveById(this.filmeID).subscribe({
            next: filmeCallBack => this.filme = filmeCallBack,
            error: err => console.log('Error', err)
        });
        }
      );
  }


}
