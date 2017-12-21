import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { NavService } from "../nav.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title=" My Doll";
description="A doll shop from the movies";

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

}
