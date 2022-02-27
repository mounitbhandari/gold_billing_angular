import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { StorageMap } from '@ngx-pwa/local-storage';





@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private authService: AuthService, private storage: StorageMap) { }

  ngOnInit(): void {


    
    this.storage.get('company').subscribe((response) => {
      console.log(response);
    });


  }

}
