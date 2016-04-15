import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';


export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

   context = {
        showMe: true,
        showTab: false
    };
    
    toggleTab() {
        this.context.showTab = false;
        this.context.showMe = true;
    }
    
    toggleSecond() {
        this.context.showMe = false;
        this.context.showTab = true;
    }
    
    
}

register.viewControl('howtoplay-vc', HowtoplayViewControl);
