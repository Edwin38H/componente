import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
    
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
    backdropDismiss:false,
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'Este es un mensaje de alerta',
    buttons: ['OK']
    });
    await alert.present();
    }

}
