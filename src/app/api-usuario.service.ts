import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {
  constructor(
    private httpService: HttpClient
    ) { }
    apiUsuario(){
    return this.httpService.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
  }
}
