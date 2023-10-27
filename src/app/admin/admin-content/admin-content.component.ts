import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/services/api/api.service';
import { User } from 'src/core/models/user.model';

import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit{
  
  constructor(private apiService: ApiService,private router: Router, private authService: AuthService) {}
  ngOnInit() {
    
    this.showUser();
    
  }
  users: User[] = [];
  userCount: number = 0;

  showUser() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data.filter((user) => user.userType === 1); //müşterileri getirir
      console.log(response);
    });
  }




//Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

}
