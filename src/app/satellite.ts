import { style } from "@angular/animations";
import { assert } from "console";
import { logWarnings } from "protractor/built/driverProviders";

export class Satellite {
    name: string;
    orbitType:string;
    type: string;
    operational: boolean;
    launchDate: string;
    alternateColor: string = 'red';
    checkWarning: boolean = true;

    constructor (name: string, orbitType: string, type: string, operational: boolean, launchDate: string) {
    this.name= name;
    this.orbitType= orbitType;
    this.type= type;
    this.operational=operational;
    this.launchDate=launchDate;
    }
    shouldShowWarning() {
        if (this.type==="Space Debris") {
           return true;
          } else {
            return false;
        
          }
        }
        
      }
    

  

