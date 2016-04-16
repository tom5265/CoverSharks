import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';


export default class HowtoplayViewControl extends BaseViewControl {
    templateString: string = require('./howtoplay.vc.html');

   context = {
        showMe: true,
        showTab: false,
        link: document.links
    };
    
    toggleTab() {
        this.context.showTab = false;
        this.context.showMe = true;
    }
    
    toggleSecond() {
        this.context.showMe = false;
        this.context.showTab = true;
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

register.viewControl('howtoplay-vc', HowtoplayViewControl);
