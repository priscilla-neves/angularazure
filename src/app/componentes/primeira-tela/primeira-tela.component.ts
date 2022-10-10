import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeira-tela',
  templateUrl: './primeira-tela.component.html',
  styleUrls: ['./primeira-tela.component.css']
})
export class PrimeiraTelaComponent implements OnInit {
loginDisplay: any;
isIframe: any;
title: any;

  constructor() { }

  ngOnInit(): void {
  }

}
