import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {
imagePath="../../assets/oyak.png"

downloads = ["Download Trial For Visual Studio", "Download Trial For All Platforms", "Package Managers"];
  
  constructor() { }

  ngOnInit(): void {
  }


onItemClick(e: { itemData: { name: any; }; }) {
  notify(e.itemData.name || e.itemData, "success", 600);
}
}
function notify(arg0: any, arg1: string, arg2: number) {
throw new Error('Function not implemented.');
}


