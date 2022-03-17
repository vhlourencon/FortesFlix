import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { Filme } from "./filme";
import { FilmeDto } from "./filme-dto";

const url = 'http://localhost:8080/api/filmes'
const url_salvar = 'http://localhost:8080/api/filmes/salvar/'
const url_alugar = 'http://localhost:8080/api/filmes/alugar/'
const url_devolver = 'http://localhost:8080/api/filmes/devolver/'
const url_deletar = 'http://localhost:8080/api/filmes/deletar/'
@Injectable({
    providedIn: 'root'
})

export class FilmeService {
    constructor(private httpCliente: HttpClient) {
    }

    alugar(filme: Filme): Observable<Filme> {
        return this.httpCliente.post<Filme>(`${url_alugar}`, filme);
    }

    devolver(filme: Filme): Observable<Filme> {
        return this.httpCliente.post<Filme>(`${url_devolver}`, filme);
    }

    deleteById(id: number): Observable<any> {
        return this.httpCliente.delete<any>(`${url_deletar}${id}`);
    }
    salvar(filme: Filme): Observable<Filme> {
        return this.httpCliente.post<Filme>(url_salvar, filme);
    }
    save(filme: Filme) {
        if (filme.id) {
            const index = FILMES.findIndex((filmeIterator: Filme) => filmeIterator.id === filme.id);
            if (!index) {
                throw new Error("Function not implemented.");
            } else {
                FILMES[index] = filme;
            }

        }
    }
    retrieveAll(): Observable<Filme[]> {
        return this.httpCliente.get<Filme[]>(url);
    }

    retrieveById(id: number): Observable<Filme> {
        return this.httpCliente.get<Filme>(`${url}/${id}`);
    }


}




var FILMES: Filme[] = [

];



