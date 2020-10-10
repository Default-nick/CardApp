import { AbrirModalService } from './../abrir-modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit { 
  showDisplay:boolean
  constructor(public displays: AbrirModalService) { }

  statusModal = false
  fecharModal(){
  this.statusModal = this.statusModal
  this.displays.mudarValor(this.statusModal, this.displays.getUsuarioModal())
  }
  ngOnInit(): void {
    this.displays.mostrarModal.subscribe((valor) => {
      this.showDisplay=valor
    })
  }
  q: any;
  maskSearch(event) {
    if (event.keyCode == 8 && this.q != "") {
      this.q = "";
    }
    if (this.q == undefined) {
      this.q ="";
    }
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
      this.q = this.q + event.key
      this.q = this.q.replace(/\,/gi,'').replace(/(\d{2})$/g, ',$1');
      this.q = this.q.replace(/\./gi,'').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
  }
  maskSearchDown(event) {
    event.preventDefault();
  }
}
