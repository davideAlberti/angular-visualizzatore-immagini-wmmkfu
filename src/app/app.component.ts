import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  images: string[] = [
    'https://www.bibibi.it/wp-content/uploads/2018/09/scarica-immagini-ad-alta-qualita.jpeg',
    'https://www.addlance.com/blog/wp-content/uploads/2019/04/immagini-da-scaricare.jpg',
    'https://eppen.ecodibergamo.it/wp-content/uploads/2018/11/immagini-di-via_2018_11_21T15_01_36_752288_detail_box.jpg',
    'https://technoblitz.it/wp-content/uploads/2018/06/immagini-4k.jpg',
    'https://themes.tielabs.com/qamar/wp-content/uploads/2012/12/4652641178_dcc614bb1f_b-480x360.jpg',
    'https://www.donnamoderna.com/wp-content/uploads/2019/11/BERLIN_WALL-480x360.jpg',
    'https://www.brokerleader.it/wp-content/uploads/2019/06/rischi-tecnologici-3-480x360.jpg',
    'https://www.donnamoderna.com/wp-content/uploads/2015/04/shutterstock_476301484-480x360.jpg',
    'https://media.crimewatchdaily.com/2016/11/02/la-tease-480x360-1.jpg',
    'https://www.greatlakesnow.org/wp-content/uploads/2014/03/DetroitSkyline-480x360.jpg',
    'https://stophavingaboringlife.com/wp-content/uploads/2019/05/best-cities-to-visit-in-France-Paris-480x360.jpeg',
    'https://cdn.5280.com/2019/10/Great-Divide-Brewing-Co._Courtesy-480x360.jpg',
    'https://3lt85v2kc2fd49qvij3tu14v-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/blueprint-blueground-best-cities-for-young-people-seattle-downtown-skyline-with-Mt-Rainier-in-background-1-480x360.jpg',
    'https://www.unhabitat.org/wp-content/uploads/sites/3/2016/07/201511UN-Habitat-and-UNAIDS-present-new-report-at-Africities-480x360.jpg',
    'https://9714423570r3k9t761lyx98m-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/09/1-3-480x360.jpg'
  ]
}
