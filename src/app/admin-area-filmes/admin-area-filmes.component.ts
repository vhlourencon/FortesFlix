import { Component, OnInit } from '@angular/core';
import { Filme } from '../lista-filmes/filme';
import { FilmeService } from '../lista-filmes/lista-filmes.service';

@Component({
  selector: 'app-admin-area-filmes',
  templateUrl: './admin-area-filmes.component.html',
  styleUrls: ['./admin-area-filmes.component.css']
})
export class AdminAreaFilmesComponent implements OnInit {

  filmes: Filme[] = [];
 constructor(private filmeService: FilmeService) { }

 retrieveAll(): void { 
  this.filmeService.retrieveAll().subscribe({
      next: filmesCallback => {
          this.filmes = filmesCallback;
      },
      error: err => console.log('Error', err) 
  }) 
}

  devolver(filme : Filme): void {
  this.filmeService.devolver(filme).subscribe({
      next: filmeCallBack =>{ console.log('Saved with success', filmeCallBack)
         this.retrieveAll();
    },
      error: err => console.log('Error', err)
    }) 
  }


  deletar(filme : Filme): void {
    this.filmeService.deleteById(filme.id).subscribe({
        next: filmeCallBack =>{ console.log('Deleted with success', filmeCallBack)
           this.retrieveAll();
      },
        error: err => console.log('Error', err)
      }) 
    }


  ngOnInit(): void {
    this.retrieveAll();
  }

}
