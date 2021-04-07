export class Satellite {
    name: string;
    orbitType:string;
    type: string;
    operational: boolean;
    launchDate: string;

    alternateColor: string = 'black';
    bulletType: string = 'A';
    changeColor: boolean = true;
    constructor (name: string, orbitType: string, type: string, operational: boolean, launchDate: string) {
    this.name= name;
    this.orbitType= orbitType;
    this.type= type;
    this.operational=operational;
    this.launchDate=launchDate;
    }

shouldShowWarning() {
  if(this.orbitType='Space Debris'){
    return true;
    } else {
    return false;
  }
}

}


