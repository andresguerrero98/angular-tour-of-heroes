import { Component, OnInit } from '@angular/core';

interface Heroe {
  name: string;
  description: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'Componente de heroes';

  public heroes: Heroe[] = [
    {
      name: 'superman',
      description: 'a superhero'
    },
    {
      name: 'superman',
      description: 'a superhero'
    },
    {
      name: 'superman',
      description: 'a superhero'
    },
    {
      name: 'superman',
      description: 'a superhero'
    },
    {
      name: 'superman',
      description: 'a superhero'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
