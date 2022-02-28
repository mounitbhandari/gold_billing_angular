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
  userObject: any;
  imageSrc: string | ArrayBuffer | null ="";
  file: File | undefined;
  defaultPicture: string = "assets/img/users/2.jpg";
  constructor(private authService: AuthService, private storage: StorageMap) { }

  ngOnInit(): void {



    this.storage.get('userObject').subscribe((userObject) => {
      this.userObject = userObject;
    });


  }
  onChange(event: any){
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e => this.imageSrc = reader.result);
    // @ts-ignore
    reader.readAsDataURL(this.file);
    this.authService.upload(this.file).subscribe((response) => {
        console.log(response);
        if (response.success === 100){
        }
      }
    );
    event.srcElement.value = null;
  }

}
