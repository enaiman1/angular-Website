import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  partOfLink = "hi";
  data =[
    { name: "James", age: 24, job: 'Designer', employeed: true},
    { name: "Jill", age: 26, job: 'Engineer', employeed: false},
    { name: "Elyse", age: 25, job: 'Engineer', employeed: true},
  ];

  headers =[
    {key: "employeed", label: "Has a Job"},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
