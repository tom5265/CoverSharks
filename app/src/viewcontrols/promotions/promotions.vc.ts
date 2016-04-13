import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');

    context = {
        showRegModal: false
    };
    
    // Here, you need to toggle the boolean. From false to true, true to false.
    toggleModal() {
        if (this.context.showRegModal === false) {
            this.context.showRegModal = true;
        } else {
            this.context.showRegModal = false;
        }
    }
    
}

register.viewControl('promotions-vc', PromotionsViewControl);
