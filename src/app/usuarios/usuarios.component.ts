import { ApiUsuarioService } from './../api-usuario.service';
import { Component, OnInit } from '@angular/core';
import { AbrirModalService } from '../abrir-modal.service';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
    })

export class UsuariosComponent implements OnInit {  
constructor(private apiService: ApiUsuarioService, public displays: AbrirModalService) { }
    usuarios: any = []
    exibirUsuarios(){
        this.apiService.apiUsuario().subscribe((resultado) =>{
            this.usuarios = resultado
        })
    }
    statusModal = true
    abrirModal(username){
        this.statusModal = this.statusModal
        this.displays.mudarValor(this.statusModal, username)
        }
    ngOnInit(): void {
    this.exibirUsuarios();
}
}
