
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Filme } from './filme';
import { FilmeService } from './lista-filmes.service';

@Component({
  templateUrl: 'lista-filmes.component.html',
  styleUrls: ['lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  filmes: Filme[] = [];
  filteredFilmes: Filme[] = [];
  _filterByNome: string ="";
  _filterByGenero: string = "";
  modelData!: NgbDateStruct;


  generos: any[] = [
    { id: 0, name: 'TODOS' },
    { id: 1, name: 'Ação' },
    { id: 2, name: 'Romance' },
    { id: 3, name: 'Aventura' },
    { id: 4, name: 'Terror' },
    { id: 5, name: 'Ficção cientifica' },
    { id: 6, name: 'Comédia' },
    { id: 7, name: 'Aventura' },
    { id: 7, name: 'Drama' },
  ];
  selected: number = 1;

  constructor(private modalService: NgbModal, private filmeService: FilmeService) {
  }

  selectedOption!: string;
  selectedDataDevolucao!: string; 
  
  ngOnInit(): void {



    this.obterTodos();
  }

  obterTodos(): void {
    this.filmeService.retrieveAll().subscribe({
      next: callBackFilmes => {

        this.filmes = callBackFilmes;
        this.filteredFilmes = this.filmes;
      },
      error: err => console.log('Error', err)
    }
    )
  }
  filtrar(): void {
    this.filteredFilmes = this.filmes.filter((filme: Filme) => filme.nome.toLocaleLowerCase().indexOf(this._filterByNome.toLocaleLowerCase()) > -1)
    this.filteredFilmes = this.filteredFilmes.filter((filme: Filme) => filme.categoria.toLocaleLowerCase().indexOf(this._filterByGenero.toLocaleLowerCase()) > -1)
  }

  set filtraPorNome(value: string) {
    this._filterByNome = value;
    this.filtrar();
  }

  set filtraPorGenero(value: string) {
    this.selectedOption = value;
    this._filterByGenero = this.generos.find((g: any) => g.id === +value).name;
    if(value =="0") { 
           this._filterByGenero = "";
    }
    this.filtrar()
  }

  closeResult = '';
  teste!: string;
  val!: string;

  set dataDevolucao(value: string) { 
   
     this.selectedDataDevolucao = JSON.parse(value);
    alert(this.selectedDataDevolucao);
  }
  
  

  open(content: any,filme: Filme) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      filme.dataDevolucao = this.modelData.day +"/" + this.modelData.month + "/" + this.modelData.year;
       this.alugar(filme);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  alugar(filme : Filme): void {
    this.filmeService.alugar(filme).subscribe({
        next: filmeCallBack =>{ console.log('Saved with success', filmeCallBack)
          this.obterTodos()
      },
        error: err => console.log('Error', err)
    });
}


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

interface language {
  id: number;
  name: string;
}

