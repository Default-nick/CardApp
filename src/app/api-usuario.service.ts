import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {
  private apiCartoes="https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";
  constructor(
    private httpService: HttpClient
    ) { }
    apiUsuario(){
    return this.httpService.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
  }
  resultadoPagamento(cards){
    this.httpService.post(this.apiCartoes,cards).subscribe(resultado=>{
      console.log(resultado)
    })
  }
}
