import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  start(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
