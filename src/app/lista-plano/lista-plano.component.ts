import { Component, OnInit } from '@angular/core';
import { Plano } from '../plano';
import { PlanoAPIService } from '../service/plano-api.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'has-lista-plano',
  templateUrl: './lista-plano.component.html',
  styleUrls: ['./lista-plano.component.css']
})
export class ListaPlanoComponent implements OnInit {

  planos : Plano[];

  constructor(private service: PlanoAPIService) { }

  ngOnInit() {
    this.service
      .getPlanos()
      .subscribe((data: Plano[]) => this.planos = data,
                error => console.log(error));
    }

}
