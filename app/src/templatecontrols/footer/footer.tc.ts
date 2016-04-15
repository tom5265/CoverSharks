import {register, ui} from 'platypus';
import HomeViewControl from '../../viewcontrols/home/home.vc'
import AboutViewControl from '../../viewcontrols/about/about.vc';
import HowToPlayViewControl from '../../viewcontrols/howtoplay/howtoplay.vc';
import PromotionsViewControl from '../../viewcontrols/promotions/promotions.vc';

export default class FooterTemplateControl extends ui.TemplateControl {
    templateString: string = require('./footer.tc.html');
    context: any = {
        home: HomeViewControl,
        about: AboutViewControl,
        howtoplay: HowToPlayViewControl,
        promotions: PromotionsViewControl
        
    }
}

register.control('footer', FooterTemplateControl);
