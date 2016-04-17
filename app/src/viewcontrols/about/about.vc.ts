import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class AboutViewControl extends BaseViewControl {
    templateString: string = require('./about.vc.html');

    context: any = {
        link: document.links
    };
    
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

register.viewControl('about-vc', AboutViewControl);
