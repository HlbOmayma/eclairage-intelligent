export class LightingData {
    startedLightingDate: Date;
    stoppedLightingDate: Date;

    constructor(){
        this.startedLightingDate = new Date();
        this.stoppedLightingDate = new Date();
    }
}