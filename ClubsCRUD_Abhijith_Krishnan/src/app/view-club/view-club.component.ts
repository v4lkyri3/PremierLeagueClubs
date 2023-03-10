import { Component,Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Params} from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-view-club',
  templateUrl: './view-club.component.html',
  styleUrls: ['./view-club.component.css']
})
export class ViewClubComponent {

  public Cid:any;
  public club:any;

  constructor(private api:ApiService,private route:ActivatedRoute)
  {
  }

  ngOnInit()
  { 
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id')+' is id value');
    
    this.Cid = id
    this.viewSingleClub(this.Cid);  
  }

  viewSingleClub(id:number)
  {
    console.log("Hi");
    this.api.viewClub(id).subscribe(
      res => {
        this.club=res;
      }
    );
  }

}
