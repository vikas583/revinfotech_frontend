import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service'
import { FormBuilder, FormGroup, RequiredValidator, Validators, } from '@angular/forms';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { Router } from "@angular/router"
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  songsData: any
  searchSongForm: FormGroup | any;
  // dtOptions: DataTables.Settings = {}
  constructor(readonly fb: FormBuilder, private backendService: BackendApiService, private router: Router) { }


  ngOnInit() {


    this.searchSongForm = this.fb.group({
      search: ['', [Validators.required]]
    })

    // this.dtOptions = {
    //   pagingType: 'full_members',
    //   pageLength: 10,
    //   lengthMenu: [10, 15, 25],
    //   processing: true
    // }

  }


  Search() {
    if (this.searchSongForm.status == "INVALID") {
      alert('search field is required!')
      return
    }
    this.backendService.searchSong(this.searchSongForm.value.search).subscribe(data => {
      console.log(data.length)
      if (data.length) {
        this.songsData = data
      }
    })



  }




}
