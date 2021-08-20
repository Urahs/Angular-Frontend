import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  areas: Area[] = [{
    country: "Kurumsal",
    area: 12
    }, {
        country: "Bireysel",
        area: 7
    }, {
        country: "Özel",
        area: 7
    }, {
        country: "Aktif",
        area: 7
    }, {
        country: "Pasif",
        area: 6
    }, {
        country: "Diğer",
        area: 15
    }];

  constructor(private elementRef: ElementRef) { 
      
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = '#ffffff';
        
}
  ngOnInit(): void {
  }

  pointClickHandler(e: { target: any; }) {
      this.toggleVisibility(e.target);
  }

  legendClickHandler (e: { target: any; component: { getAllSeries: () => { getPointsByArg: (arg0: any) => any[]; }[]; }; }) {
      let arg = e.target,
          item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
  }

  toggleVisibility(item: { isVisible: () => any; hide: () => void; show: () => void; }) {
      if(item.isVisible()) {
          item.hide();
      } else { 
          item.show();
      }
  }

}

export class Area {
  country: string;
  area: number;
}
