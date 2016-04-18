import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class PromotionsViewControl extends BaseViewControl {
    templateString: string = require('./promotions.vc.html');

    context = {
        showRegModal: false,
        link: document.links
    };
    
    // Here, you need to toggle the boolean. From false to true, true to false.
    toggleModal() {
        if (this.context.showRegModal === false) {
            this.context.showRegModal = true;
        } else {
            this.context.showRegModal = false;
        }
    }
    loaded() {
       let links:any = this.context.link;
       let url = window.location.href;
        console.log(url);
        console.log(links);
        for (var i = 0; i < links.length; i++) {
            if (links[i].className == 'active') {
                links[i].classList.remove('active');
            }
            if (url == links[i].href) {
                links[i].className = 'active';
            }
       }
       super.loaded();  
   }
}

register.viewControl('promotions-vc', PromotionsViewControl);
