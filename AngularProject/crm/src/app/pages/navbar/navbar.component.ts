import { Component, OnInit } from '@angular/core';
export class SimpleObject {
  value: number | string;
  name: string;
  icon?: string;
  badge?: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileSettings: SimpleObject[] = [
    { value: 1, name: "Profile", icon: "user" },
    { value: 4, name: "Messages", icon: "email", badge: "5" },
    { value: 2, name: "Friends", icon: "group" },
    { value: 3, name: "Exit", icon: "runner" }
];
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