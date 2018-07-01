<template>
    <div class="blue-bg">
        <footer class="container blue-bg">
            <ul class="social-media">
                <li><i class="fab fa-facebook-square"></i></li>
                <li><i class="fab fa-twitter-square"></i></li>
                <li><i class="fab fa-instagram"></i></li>
            </ul>
           
            <ul class="enlaces">
                <li><nuxt-link to="quienes-somos"><i class="far fa-address-card"></i> Quienes Somos?</nuxt-link></li>
                <li><nuxt-link to="donde-estamos"><i class="fas fa-map-marked-alt"></i> Donde Estamos?</nuxt-link></li>
                <li><nuxt-link to="calendario-escolar"><i class="far fa-calendar-check"></i> Calendario</nuxt-link></li>
                <li><nuxt-link to="clases-grupos"><i class="fas fa-user-graduate"></i>Classes y Grupos</nuxt-link></li>
                <li><nuxt-link to="clases-grupos"><i class="fas fa-coins"></i> Precios</nuxt-link></li>
            </ul>

            <p>Nuestro correo electronico es <a class="mail" href="mailto:nuestraescuelaleeds@gmail.com">nuestraescuelaleeds@gmail.com</a></p>
          
        </footer>
    </div>
</template>



<style scoped>

footer {padding:10px; min-height: 200px; color:#fff}
footer p{font-weight: bold; text-align: center; font-size: 1em}
footer ul{display: flex;; flex-wrap: wrap; justify-content: center; list-style: none}
footer li{margin:3px 5px;}
footer ul.enlaces{margin:20px  auto;}
footer .enlaces li{flex:0 0 100%; text-align: center}
footer a i{color:#0f2c44; display: inline-block; margin-right:5px}
ul a{color:#fff; font-weight: bold}
 ul.social-media li{font-size:1.5em; margin: 5px 10px; }
 .mail{color:#fab804}

@media screen and (min-width: 500px) {
    footer{padding:20px;};
    footer li{ margin:3px 25px;}
    footer ul.enlaces li{ flex:0 0 20%;  margin:0 }

    footer li i{display: inline-block; margin-right:5px}
    footer li a{font-size: 1.2em}
     ul.social-media li{font-size:2em}
   
    
}

@media screen and (min-width: 900px) {
  
    footer ul.enlaces li{ flex:0 0 20%; margin:0 }

    footer li i{display: inline-block; margin-right:5px}
    

   
    
}



</style>
