import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

    context: any = {};
}

// if (this.context.toggleTab){
// this.context.toggleTab = true,

// };

register.viewControl('howtoplay-vc', HowtoplayViewControl);
