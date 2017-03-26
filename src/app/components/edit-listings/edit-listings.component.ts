import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-edit-listings',
  templateUrl: './edit-listings.component.html',
  styleUrls: ['./edit-listings.component.css']
})
export class EditListingsComponent implements OnInit {
	id;
	title;
	owner;
	city;
	bedrooms;
	price;
	image;
	type;

  constructor(
  	private firebaseService:FirebaseService,
  	private router:Router,
  	private route:ActivatedRoute
  	) { }

  ngOnInit() {

  	this.id=this.route.snapshot.params['id'];

  	this.firebaseService.getListingDetails(this.id).subscribe(listing => {

  		this.title=listing.title;
  		this.owner=listing.owner;
  		this.city=listing.city;
  		this.bedrooms=listing.bedrooms;
  		this.price=listing.price;
  		this.type=listing.type;


  	});

  }

  onEditSubmit(){
  	let listing={
  		title:this.title,
  		owner:this.owner,
  		city:this.city,
  		bedrooms:this.bedrooms,
  		type:this.type,
  		price:this.price

  	}

  	this.firebaseService.updateListing(this.id,listing);

  	this.router.navigate(['/listings']);
  }


}
