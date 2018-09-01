<template>
<header>
    <div class="logo"><h2><nuxt-link to="/" >
    <span>Nuestra Escuela<span class="black light"> | Leeds</span></span></nuxt-link></h2></div>
    <nav>
     
    <ul class="menu-med">
                <li><nuxt-link to="quienes-somos"><i class="far fa-address-card"></i> ¿Quiénes Somos?</nuxt-link></li>
                <li><nuxt-link to="donde-estamos"><i class="fas fa-map-marked-alt"></i> ¿Dónde estamos?</nuxt-link></li>
                <li><nuxt-link to="calendario-escolar"><i class="far fa-calendar-check"></i> Calendario</nuxt-link></li>
                <li><nuxt-link to="clases-grupos"><i class="fas fa-user-graduate"></i> Classes</nuxt-link></li>
             <li><nuxt-link to="precios"><i class="fas fa-coins"></i> Precios</nuxt-link></li>
        
            </ul>
        <ul class="menu-toggle">
            <li><button class="btn-burger" @click="toggleMenu"><i class="fas fa-align-right"></i></button></li>
        </ul>
    
    </nav>

    <nav class="mobile"  :class="{'show': showMenu}">
        <button class="btn-burger" @click="toggleMenu"><i class="fas fa-times"></i></button>
        <ul>
            <li><a @click="navigate('quienes-somos')"><i class="far fa-address-card"></i> ¿Quiénes somos?</a></li>
            <li><a @click="navigate('donde-estamos')"><i class="fas fa-map-marked-alt"></i> ¿Dónde estamos</a></li>
            <li><a @click="navigate('calendario-escolar')"><i class="far fa-calendar-check"></i> Calendario Escolar</a></li>
            <li><a @click="navigate('clases-grupos')"><i class="fas fa-user-graduate"></i>  Classes y Grupos</a></li>
        <li><a @click="navigate('precios')"><i class="fas fa-coins"></i>  Precios</a></li>
       
        </ul>
    </nav>
</header>
    
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    navigate(url) {
      this.toggleMenu();
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.logo {
  margin-right: 10px;
  background-image: url(~/assets/images/nel-logo.png);
  background-size: auto 95px;
  background-repeat: no-repeat;
  height: 95px;
  width: auto;
  text-indent: -3000em;
  margin: 0;
}
.logo h2 {
  margin: 0 !important;
  padding: 0 !important;
  letter-spacing: -1px;
  font-size: 1.5em;
}
a:visited i {
}
.black {
  color: #fff;
}
.logo h2 span.light {
  font-weight: normal !important;
}

.logo h2 a {
  display: block;
  line-height: 95px;
  width: 120px;
}
.logo span {
  font-weight: bold;
  margin-left: 5px;
}
header {
  display: flex;
  padding: 10px;
  background-color: #31bfcbff;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav ul li a {
  font-weight: bold;
  color: #fff;
  display: block;
  border-bottom: solid 3px transparent;
  padding: 10px 0;
  font-size: 20px;
}
nav ul li a i {
  color: #114646;
  display: inline-block;
  margin-right: 5px;
  font-size: 24px;
}
nav ul li a.exact-active-link {
  border-bottom: solid 3px #fd392dff;
}

nav {
  margin-left: auto;
}
ul.menu-toggle {
  margin-left: auto;
  padding: 0;
  margin: 0;
}

button.btn-burger {
  border: none;
  color: #fff;
  background: transparent;
  font-size: 2.2em;
  margin: 10px;
}

@media screen and (max-width: 900px) {
  nav ul.menu-med {
    display: none;
  }
  nav.mobile {
    display: flex;
    flex-direction: column;
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    left: -100%;
    background-color: #fd392dff;
    border: solid 1px #fd392dff;
    transition: all 0.3s;
    /* animation: slide-in 0.5s ease-out; */
  }

  nav.mobile.show {
    left: 0;
    transition: all 0.3s;
  }

  nav.mobile ul {
    margin: 0 10px;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  nav.mobile ul li {
    flex: 0 0 50%;
    text-align: center;
    line-height: 1em;
    font-size: 2.5em;
  }
  nav.mobile ul li a i {
    color: #114646;
    display: block;
    font-size: 2em;
    line-height: 1.3em;
  }

  .mobile button {
    font-size: 4em !important;
    color: #333;
    background-color: transparent;
    margin: 10px 0;
  }
}

@media screen and (min-width: 900px) {
  header {
    padding: 20px;
  }
  .logo {
    background-size: auto 140px;
    height: 140px;
  }
  .logo h2 {
    margin: 0 !important;
    padding: 0 !important;
    letter-spacing: -1px;
    font-size: 2em;
  }

  .logo h2 a {
    display: block;
    line-height: 140px;
    width: 180px;
  }
  nav ul.menu-med {
    display: flex;
    visibility: visible;

    margin-top: 30px;
  }
  ul.menu-toggle {
    display: none;
  }
  nav ul li {
    display: inline-block;
    visibility: visible;
    margin-left: 30px;
  }

  nav.mobile {
    display: none;
  }
}

@keyframes slide-in {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    navigate(url) {
      this.toggleMenu();
      this.$router.push(url);
    }
  }
};
</script>
