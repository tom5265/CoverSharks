import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc'
import AboutViewControl from '../../viewcontrols/about/about.vc';
import HowToPlayViewControl from '../../viewcontrols/howtoplay/howtoplay.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';

export default class TopnavTemplateControl extends ui.TemplateControl {
    templateString: string = require('./topnav.tc.html');
    context: any = {
        status: false,
        home: HomeViewControl,
        about: AboutViewControl,
        howtoplay: HowToPlayViewControl,
        promotions: PromotionsViewControl
        
    }
    
    toggleModal():void {
        this.context.status = !this.context.status;
    }
}

register.control('topnav', TopnavTemplateControl);
