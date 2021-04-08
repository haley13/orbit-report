import { Component, OnInit} from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent{
  sourceList: Satellite[];
  displayList: Satellite[];
  
  constructor() {

    this.sourceList = [];//the array is going to be put through. 
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    this.displayList = [];

   
       window.fetch(satellitesUrl).then(function(response) { 
       response.json().then(function (data) {//this is the data
        
        let fetchedSatellites = data.satellites;
         
         for (let i=0; i < data.satellites.length; i++) {
           let satellite1= new Satellite (fetchedSatellites[i].name,fetchedSatellites[i].orbitType, fetchedSatellites[i].type, fetchedSatellites[i].operational,fetchedSatellites[i].launchDate);
             this.sourceList.push(satellite1);  
         }
          }.bind(this));
          this.displayList = this.sourceList.slice(0);
  }.bind(this));
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
        if (name.indexOf(searchTerm) >= 0) {
           matchingSatellites.push(this.sourceList[i]);
        }
      }
       this.displayList = matchingSatellites;
    }
      

  
    
    
    
    
  
      
      }
