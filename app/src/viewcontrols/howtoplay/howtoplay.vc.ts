import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';


export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

   context = {
        showMe: true,
        showTab: false
    };
    
    toggleTab() {
        console.log("it's working!")
        this.context.showMe = !this.context.showMe;
        this.context.showTab = !this.context.showTab;
    }
    
    toggleSecond() {
        this.context.showTab = !this.context.showTab;
        this.context.showMe = !this.context.showMe;

    }
    
    
}

register.viewControl('howtoplay-vc', HowtoplayViewControl);
