import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';


export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context = {
        showVideoTab: false
    };
    
    toggleTab() {
        console.log("it's working!")
        this.context.showVideoTab = true;
        
        //click event with mouse click, deativates on click release
        // document.getElementById(...)
        // active-started-tab
        // active-videos-tab 
    };
    
    
    
}
// if (this.context.toggleTab){
// this.context.toggleTab = true,

// };

register.viewControl('howtoplay-vc', HowtoplayViewControl);
