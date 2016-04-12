import {register, ui} from 'platypus';

export default class TopnavTemplateControl extends ui.TemplateControl {
    templateString: string = require('./topnav.tc.html');
}

register.control('topnav', TopnavTemplateControl);
