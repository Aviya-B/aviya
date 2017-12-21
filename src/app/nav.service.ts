import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
public navItems: NavItem[];
  constructor() {
      this.navItems = [
      new NavItem("Home", "home"),
      new NavItem("Gallery", ""),
      new NavItem("About", ""),
      new NavItem("Contact us", "")
     
    ]
   }

}
  export class NavItem{
  
  constructor(public text: string, public url: string){

  }
}
