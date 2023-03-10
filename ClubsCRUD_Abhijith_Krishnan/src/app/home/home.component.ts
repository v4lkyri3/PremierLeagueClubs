import { Component } from '@angular/core';
import { ClubModel } from './clubs.model';
import { ApiService } from '../services/api.service';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  club:ClubModel = new ClubModel();
  clubs:any;
  formValue!:FormGroup; 
  showAdd!:boolean;
  showUpdate!:boolean;
countries: any;
regularDistribution: any;


  constructor(private formBuilder:FormBuilder,private api:ApiService,private router:Router)
  {

  }

  ngOnInit()
  {
    this.router.routeReuseStrategy.shouldReuseRoute=()=> false;
    this.formValue = this.formBuilder.group(
      {
        ClubName: [''],
        ClubOwner:[''],
        HomeGround:[''],
        ManagerName:[''],
        FoundingYear:[''],
        Trophies:[''],
        AllTimeTopScorer:['']
      });
    this.getAllClubDetails();
  }

  clickAddClub()
  {
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postClubDetails()
  {
    this.club.ClubName=this.formValue.value.ClubName;
    this.club.ClubOwner=this.formValue.value.ClubOwner;
    this.club.HomeGround=this.formValue.value.HomeGround;
    this.club.ManagerName=this.formValue.value.ManagerName;
    this.club.FoundingYear=this.formValue.value.FoundingYear;
    this.club.Trophies=this.formValue.value.Trophies;
    this.club.AllTimeTopScorer=this.formValue.value.AllTimeTopScorer;

    this.api.postClub(this.club).subscribe(
      response => {
        console.log(response);
        alert("Employee Added Successfully!!")
        let close = document.getElementById('cancel');
        close?.click();
        this.formValue.reset();
        this.getAllClubDetails();
      },
        err => {
          alert("Something went wrong!");
        }
    );
  }


  getAllClubDetails()
  {
    this.api.getAllClubs().subscribe(
      res => {
        this.clubs=res;
      }
    );
  }

  deleteClub(emp:any)
  {
    this.api.deleteClub(emp.id).subscribe(
      res => {
        alert("Employee Deleted!");
        this.getAllClubDetails();
      }
    );

  }

  editClub(data:any)
  {
    this.club.id = data.id;
    this.club.Logo = data.Logo;
    this.showAdd=false;
    this.showUpdate=true;

    this.formValue.controls['ClubName'].setValue(data.ClubName);
    this.formValue.controls['HomeGround'].setValue(data.HomeGround);
    this.formValue.controls['ClubOwner'].setValue(data.ClubOwner);
    this.formValue.controls['ManagerName'].setValue(data.ManagerName);
    this.formValue.controls['FoundingYear'].setValue(data.FoundingYear);
    this.formValue.controls['Trophies'].setValue(data.Trophies);
    this.formValue.controls['AllTimeTopScorer'].setValue(data.AllTimeTopScorer);
  }

  updateClub()
  {
    this.club.ClubName=this.formValue.value.ClubName;
    this.club.ClubOwner=this.formValue.value.ClubOwner;
    this.club.HomeGround=this.formValue.value.HomeGround;
    this.club.ManagerName=this.formValue.value.ManagerName;
    this.club.FoundingYear=this.formValue.value.FoundingYear;
    this.club.Trophies=this.formValue.value.Trophies;
    this.club.AllTimeTopScorer=this.formValue.value.AllTimeTopScorer;

    this.api.updateClub(this.club,this.club.id).subscribe(
      response => {
        console.log(response);
        alert("Employee Updated Successfully!!")
        let close = document.getElementById('cancel');
        close?.click();
        this.formValue.reset();
        this.getAllClubDetails();
      },
        err => {
          alert("Something went wrong!");
        }
    );
  }

  getClubDetail(c:any)
  { 
    //this.router.navigate(['/view',c.id]);
    this.router.navigate(['/view',c.id]);
  }
}
