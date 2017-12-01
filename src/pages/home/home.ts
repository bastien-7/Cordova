import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { api_key } from "../../app/tmdb";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

export interface Recherche {
title : string;
overview : string;
release_date : string;
poster_path : string;
backdrop_path : string;
}


@Component({

  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  liste: Observable<Recherche[]>;
  query :string = "";
  lang : string = "fr-FR";


  lien: string = "https://api.themoviedb.org/3/search/movie";




  // results: HttpParams;

  fetchResults ():Observable<Recherche[]>{


    return this.http.get<Recherche[]>(this.lien,{
      params : new HttpParams().set("api_key",api_key).set("query",this.query).set("language",this.lang)
    }).pluck('results');


  }

  ionInput():void{

    if(this.query) {
      this.liste=this.fetchResults();

    }else{
      this.liste=Observable.of([]);

    }
  }
  push(item:Recherche) {

    console.log("view");
    this.navCtrl.push(DetailsPage,{item:item});
  }
  constructor(public navCtrl: NavController, private http : HttpClient) {
  this.ionInput();
  }


}
