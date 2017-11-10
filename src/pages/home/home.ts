import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface Recherche {
title : string;
author : string;
date : string;
image : string;
}

const Resultats : Array<Recherche> = [{title:"Titre",author:"author",date:"date",image:"http://www.lorempixel.com/400/200"},
  { title: "Titre2", author: "author2", date: "date2", image: "http://www.lorempixel.com/400/200" },
  { title: "Titre3", author: "author3", date: "date3", image: "http://www.lorempixel.com/400/200" }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  liste: Recherche[] = Resultats;
  query :string = "";
  ionInput():void{

    console.log(this.query);

  }
  constructor(public navCtrl: NavController) {

  }

}
