import { AbrirModalService } from './../abrir-modal.service';
import { Component, OnInit } from '@angular/core';
import { ApiUsuarioService } from '../api-usuario.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit { 
  infoCartao;
  cards = [
    // valid card
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    // invalid card
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  showDisplay:boolean
  constructor(
    public displays: AbrirModalService,
    private verPagamento: ApiUsuarioService
    ) { }
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
  realizarPagamento(){
    console.log(this.infoCartao)
    this.verPagamento.resultadoPagamento(this.infoCartao)
  }
}
