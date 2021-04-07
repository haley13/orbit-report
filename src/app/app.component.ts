import { Component, OnInit} from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {
  sourceList: Satellite[];
  
  constructor() {
    this.sourceList = [];//the array is going to be put through. 
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) { 
       response.json().then(function (data) {//this is the data
        
        let fetchedSatellites = data.satellites;

         
         for (let i=0; i < data.satellites.length; i++) {
          
         
            let satellite1= new Satellite (fetchedSatellites[i].name,fetchedSatellites[i].orbitType, fetchedSatellites[i].type, fetchedSatellites[i].operational,fetchedSatellites[i].launchDate);
      
             this.sourceList.push(satellite1);
         }
        
      }.bind(this));
   
    }.bind(this));
    }
  }

