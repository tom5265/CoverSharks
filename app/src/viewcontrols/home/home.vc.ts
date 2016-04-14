import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import AboutViewControl from '../about/about.vc';
import HowToPlayViewControl from '../howtoplay/howtoplay.vc';
import PromotionsViewControl from '../promotions/promotions.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

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

register.viewControl('home-vc', HomeViewControl);
