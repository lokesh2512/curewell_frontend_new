import { Component, OnInit } from '@angular/core';
//import {} from '@fortawesome/fontawesome-svg-core'
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  url!: SafeResourceUrl;
  constructor(private sanitizer:DomSanitizer){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loadHereMap(){
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl("")
  }


}
