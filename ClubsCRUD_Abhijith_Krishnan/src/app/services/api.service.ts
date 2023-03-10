import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client:HttpClient) { }

  getAllClubs()
  {
    return this.client.get<any>("http://localhost:3000/clubs").pipe(
    map((response:any) => {
      return response;
    })
    );
  }

  postClub(data:any)
  {
    return this.client.post<any>("http://localhost:3000/clubs",data).pipe(
      map((response:any) => {
          return response;
        }
      )
    );
  }

  deleteClub(data:number)
  {
    return this.client.delete<any>("http://localhost:3000/clubs/"+data).pipe(
      map( (response:any)=>
      {
        return response;
      })
    )
  }

  updateClub(data:any,id:number)
  {
    return this.client.put<any>("http://localhost:3000/clubs/"+id,data).pipe(
      map( (response:any) =>
      {
        return response;
      })
    )
  }

  viewClub(id:any)
  {
    return this.client.get<any>("http://localhost:3000/clubs/"+id).pipe(
    map((response:any) => {
      return response;
    })
    );
  }

}
