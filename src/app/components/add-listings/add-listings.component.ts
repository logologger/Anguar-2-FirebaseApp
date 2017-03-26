import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../service/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listings',
  templateUrl: './add-listings.component.html',
  styleUrls: ['./add-listings.component.css']
})
export class AddListingsComponent implements OnInit {

	title:any;
	owner:any;
	city:any;
	bedrooms:any;
	price:any;
	type:any;
	image:any;

  constructor(
  	private firebaseService:FirebaseService,
  	private router:Router
  	) { }

  ngOnInit() {
  }

  onAddSubmit(){

  	let listing={
  		title:this.title,
  		city:this.city,
  		owner:this.owner,
  		bedrooms:this.bedrooms,
  		price:this.price,
  		type:this.type
  	}

  	this.firebaseService.addListing(listing);

  	this.router.navigate(['listings']);

  }

}
