import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent implements OnInit {

  constructor( private router: Router, private activatedRoute : ActivatedRoute) {}
  ngOnInit(): void {
    
  //  this.activatedRoute.children
    this.router.navigate([{ outlets: { sub: ['filmes'] }}], { relativeTo: this.activatedRoute} );
   // this._router.navigate(["admin/filmes"]);
  }
   
 

  


}
