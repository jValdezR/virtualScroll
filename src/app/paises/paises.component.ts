import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: [
  ]
})
export class PaisesComponent implements OnInit {

  paises: any = [];
  url = 'https://restcountries.eu/rest/v2/lang/es';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url).subscribe(data => this.paises = data );
  }

  drop(evento: CdkDragDrop<any>): void{
    console.log('ok', evento);
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
