<template>
    <div class="footer-bg">
        <footer class="container footer-bg">
            <ul class="social-media">
                <li><a href="https://www.facebook.com/NuestraEscuelaLeeds/" target="new"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://twitter.com/nelnestraescue1?lang=ens"><i class="fab fa-twitter-square"></i></a></li>
                <li><a href="."><i class="fab fa-instagram"></i></a></li>
            </ul>
           
            <ul class="enlaces">
                <li><nuxt-link to="quienes-somos"><i class="far fa-address-card"></i> ¿Quiénes Somos?</nuxt-link></li>
                <li><nuxt-link to="donde-estamos"><i class="fas fa-map-marked-alt"></i> ¿Dónde Estamos?</nuxt-link></li>
                <li><nuxt-link to="calendario-escolar"><i class="far fa-calendar-check"></i> Calendario</nuxt-link></li>
                <li><nuxt-link to="clases-grupos"><i class="fas fa-user-graduate"></i>Classes y Grupos</nuxt-link></li>
                <li><nuxt-link to="precios"><i class="fas fa-coins"></i> Precios</nuxt-link></li>
                <li><nuxt-link to="colabora"><i class="fas fa-hands-helping"></i> Colabora</nuxt-link></li>
        
            </ul>

            <p>Nuestro correo electrónico es <a class="mail" href="mailto:nuestraescuelaleeds@gmail.com">nuestraescuelaleeds@gmail.com</a></p>
            <p><strong>UK Registered Charity No 1180223</strong></p>
          
        </footer>
    </div>
</template>



<style scoped>
.footer-bg {
  background-color: #fd392dff;
}
footer {
  padding: 10px;
  min-height: 200px;
  color: #fff;
}
footer p {
  font-weight: bold;
  text-align: center;
  font-size: 1em;
}
footer ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}
footer li {
  margin: 3px 5px;
}
footer ul.enlaces {
  margin: 20px auto;
}
footer .enlaces li {
  flex: 0 0 100%;
  text-align: center;
}
footer a i {
  color: #116b5f;
  display: inline-block;
  margin-right: 5px;
}
ul a {
  color: #fff;
  font-weight: bold;
}
ul.social-media li {
  font-size: 2em;
  margin: 5px 10px;
}
ul.social-media li a i {
  color: #fff;
}
ul.social-media li a:hover i {
  color: #116b5f;
}
.mail {
  color: #fab804;
}

@media screen and (min-width: 500px) {
  footer {
    padding: 20px;
  }
  footer li {
    margin: 3px 25px;
  }
  footer ul.enlaces li {
    flex: 0 0 20%;
    margin: 0;
  }

  footer li i {
    display: inline-block;
    margin-right: 5px;
  }
  footer li a {
    font-size: 1.2em;
  }
  ul.social-media li {
    font-size: 1.85em;
  }
}

@media screen and (min-width: 900px) {
  footer ul.enlaces li {
    flex: 0 0 20%;
    margin: 0;
  }

  footer li i {
    display: inline-block;
    margin-right: 5px;
  }
}
</style>
