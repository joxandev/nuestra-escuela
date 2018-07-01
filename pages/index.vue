<template>
<div>
   
 

   <h1 class="mainheading">Nuestra Escuela Leeds</h1>
         <ul class="sections">
                <li><nuxt-link to="quienes-somos"><i class="far fa-address-card"></i><span>Quienes Somos?</span>
                <p>Somos la primera escuela suplementaria de español creada en Yorkshire
                  con el fin de mantener nuestras raíces socioculturales además de fomentar la destreza lingüística del idioma que compartimos: el español.</p>
                </nuxt-link></li>
                <li><nuxt-link to="donde-estamos"><i class="fas fa-map-marked-alt"></i><span>Donde Estamos?</span>
                 <p>Las clases de español de la escuela suplementaria "Nuestra Escuela Leeds" se imparten en el instituto:
                </p>
                <address class="address"> Christi Catholic College<br/>
                Neville Rd<br />
                Leeds LS9 0TT, UK</address>
               
                </nuxt-link></li>
                <li><nuxt-link to="calendario-escolar"><i class="far fa-calendar-check"></i><span>Calendario</span>
                 <p>El primer dia lectivo del curso 2018-2019 es el 9 de septiembre. El 2 de septiembre celebramos nuestra primera jornada de puertas abiertas</p>
               
                </nuxt-link></li>
               
                 <li><nuxt-link to="clases-grupos"><i class="fas fa-user-graduate"></i><span>Clases y Grupos</span>
                 <p>Nuestra Escuela Leeds tiene grupos para ninos desde 0 a 12 anos divididos en Pre Escolar (niveles 1,2 y 3) y Juniors (1 y 2) </p>
                </nuxt-link></li>
                 <li><nuxt-link to="clases-grupos"><i class="fas fa-coins"></i><span>Precios</span>
                 <p>Nuestra Escuela Leeds es una asociacion sin animo de lucro e intentamos que nuestro precios sean lo menores posible.</p>
                </nuxt-link></li>
                
            </ul>
 
</div>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    
  }
}
</script>

<style>
body{font-family: Quicksand; padding:0; margin: 0; background-color: #0086f2;};
.container h1.mainheading{font-size:3.2em; letter-spacing: -3px !important}

.sections a address{font-style: normal !important; font-weight: bold; color:#0086f2}
.container {
  background-color: #fff;


}

.sections{display: flex; list-style: none; flex-wrap: wrap;  margin: 30px 0 10px 0; padding:0}
 

.sections a{ font-weight: bold; color:#0f2c44; display: flex; flex-wrap: wrap; flex-direction: column; padding: 10px; text-align: center}
.sections a i{font-size: 2.5em !important; color:#0086f2 !important; margin-bottom: 15px}
.sections a span{font-size:1.8em; line-height: 1em}
.sections p{font-weight: normal; font-size:1.1em; color:#333; line-height: 1.3em; margin: 15px 0 !important}

@media screen and(max-width: 500px) {
   .sections li{flex:0 0 100%}
}

@media screen and (min-width: 500px) {
  .sections li{flex:0 0 50%}
}

@media screen and (min-width: 900px) {
 
  .sections li{flex:0 0 20%}
}
</style>
