import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  coupleName = "Emely & Frank";
  anniversaryYear = "1st Wedding Anniversary";

  message = `
  Emely & Frank,
  
Hoy es un día muy especial. Hoy celebran su primer año de haber unido sus caminos 
(esclavitud), formando una bella relación de amor, respeto y algo de locura.
Admito que no esperaba ver a mi hermana con una pareja, menos estando casada y 
con una hija, pero la vida da sorpresas y ahora toda la familia está aquí 
celebrando este primer año de esta gran historia de ustedes dos.

Emely, eres la mejor hermana que pude pedir. Mi respeto hacia ti es enorme; agradezco 
mucho que me hayas cuidado de niño y bueno ahora tienes a tu propia hija, a quien 
estoy seguro que crecerá mucho y estará por buen camino por la gran mujer que 
tiene como madre. Eres para mí desde siempre una gran inspiración.

Frank, eres el primer cuñado que tengo y la verdad, aunque al comienzo estaba celoso 
porque pensé que "me quitarías" a mi hermana, eres sin duda el hermano mayor que 
muchas veces he deseado tener, alguien respetuoso, ingenioso, asertivo y admirable. 
Agradezco que seas tú quien ha logrado unir su vida con mi hermana.

Estoy seguro que ustedes llegarán muy lejos. Sé que tendrá que pasar por diferentes 
retos, pero también sé que ustedes serán capaces de superarlo. Mi sobrina crecerá con 
todo lo que necesite, puesto que tiene a los mejores padres.

  Happy First Anniversary! 💛
  `;

}