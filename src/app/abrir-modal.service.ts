import { Injectable } from '@angular/core';
import { Observable, observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbrirModalService {
  mostrarModal: Observable <boolean>
  constructor() {
    this.showSubject = new Subject <boolean>();
    this.mostrarModal = this.showSubject.asObservable();
    this.showSubject.next(false)
  }
  private showSubject: Subject <boolean>
  usuarioModal:any
  getUsuarioModal(){
    return this.usuarioModal
  }
  mudarValor(valor, username){
    this.usuarioModal = username
    this.showSubject.next(valor)
    return valor
  }
}
