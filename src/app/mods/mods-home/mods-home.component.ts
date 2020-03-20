import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'What color are aircraft black boxes?', 
      content: 'Bright orange.'
    },
    {
      title: 'What kind of animal is the jackrabbit?', 
      content: 'A Hare.'
    },
    {
      title: 'Why type of musical instrument is the English horn?', 
      content: 'An oboe.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

}
