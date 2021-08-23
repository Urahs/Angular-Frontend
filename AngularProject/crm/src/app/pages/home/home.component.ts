import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  areas: Area[] = [{
    country: "Russia",
    area: 12
    }, {
        country: "Canada",
        area: 7
    }, {
        country: "USA",
        area: 7
    }, {
        country: "China",
        area: 7
    }, {
        country: "Brazil",
        area: 6
    }, {
        country: "Australia",
        area: 5
    }, {
        country: "India",
        area: 2
    }, {
        country: "Others",
        area: 85
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
