import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<h3>{{title | uppercase}}</h3>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gallen_Kallela_Lemminkainens_Mother.jpg/1280px-Gallen_Kallela_Lemminkainens_Mother.jpg"/>
  <p>{{about}}</p>`,
  styles: [`img {height: auto;max-width: 50%;}`]
})
export class AboutComponent {
  title = 'about us';
  about = 'The Kalevala is a 19th-century work of epic poetry compiled by Elias Lönnrot from Karelian and ' +
    'Finnish oral folklore and mythology.\n' +
    'It is regarded as the national epic of Karelia and Finland and is one of the most significant works ' +
    'of Finnish literature. The Kalevala was ' +
    'instrumental in the development of the Finnish national identity, the intensification of Finland\'s ' +
    'language strife and the growing sense of ' +
    'nationality that ultimately led to Finland\'s independence from Russia in 1917\n' +
    'The first version of The Kalevala (called The Old Kalevala) was published in 1835. The version most ' +
    'commonly known today was first published in 1849 and consists of 22,795 verses, divided into fifty folk stories';
}
