<template>
<header>
    <div class="logo"><h2><nuxt-link to="/" >
    <i class="fas fa-child"></i><span>Nuestra Escuela<span class="black light"> | Leeds</span></span></nuxt-link></h2></div>
    <nav>
     
    <ul class="menu-med">
                <li><nuxt-link to="quienes-somos"><i class="far fa-address-card"></i> ¿Quienes Somos?</nuxt-link></li>
                <li><nuxt-link to="donde-estamos"><i class="fas fa-map-marked-alt"></i> ¿Dónde estamos?</nuxt-link></li>
                <li><nuxt-link to="calendario-escolar"><i class="far fa-calendar-check"></i> Calendario</nuxt-link></li>
                <li><nuxt-link to="clases-grupos"><i class="fas fa-user-graduate"></i> Classes</nuxt-link></li>
             <li><nuxt-link to="precios"><i class="fas fa-coins"></i> Precios</nuxt-link></li>
        
            </ul>
        <ul class="menu-toggle">
            <li><button class="btn-burger" @click="toggleMenu"><i class="fas fa-align-right"></i></button></li>
        </ul>
    
    </nav>

    <nav class="mobile" v-if="showMenu">
        <button class="btn-burger" @click="toggleMenu"><i class="fas fa-times"></i></button>
        <ul>
            <li><a @click="navigate('quienes-somos')"><i class="far fa-address-card"></i> Quienes somos?</a></li>
            <li><a @click="navigate('donde-estamos')"><i class="fas fa-map-marked-alt"></i> Donde estamos</a></li>
            <li><a @click="navigate('calendario-escolar')"><i class="far fa-calendar-check"></i> Calendario Escolar</a></li>
            <li><a @click="navigate('clases-grupos')"><i class="fas fa-user-graduate"></i>  Classes y Grupos</a></li>
        <li><a @click="navigate('precios')"><i class="fas fa-coins"></i>  Precios</a></li>
       
        </ul>
    </nav>
</header>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.logo{margin-right:10px;}
.logo h2{margin: 0 !important; padding: 0 !important; letter-spacing: -1px; font-size:1.5em;};
 a:visited i{color:#333 !important}
 .black{color:#666}
.logo h2 span.light{font-weight: normal !important}
.logo span{font-weight:bold; margin-left: 5px}
header{display: flex; padding: 20px; background-color: #fff}
ul{ margin: 0; padding: 0; list-style: none;}

nav ul li a{font-weight: bold; color:#333; display: block; border-bottom: solid 3px transparent; padding:10px 0}
nav ul li a i{color:#0086f2; display: inline-block; margin-right:5px}
nav ul li a.exact-active-link{border-bottom: solid 3px #0086f2}

nav{margin-left:auto}
ul.menu-toggle{margin-left:auto; padding: 0; margin: 0}

button.btn-burger{border:none; background: #fff; font-size: 1.5em}




@media screen and (max-width: 900px) {
    nav ul.menu-med{ display: none}
    nav.mobile{ display: flex; flex-direction: column; z-index: 100; position: fixed; top:0; width:100%; height: 100%; left:0; 
    background-color: #0086f2; border: solid 1px #0086f2; animation: slide-in .5s ease-out }
    nav.mobile ul{ margin:0 10px; padding: 0; font-size: 1.5em; display: flex; flex-wrap: wrap; flex-direction:row}
    nav.mobile ul li{ flex: 0 0 50%; text-align: center; line-height: 1em}
    nav.mobile ul li a i{color:#fff; display: block; font-size: 1.2em; line-height: 1.3em}

    .mobile button{font-size: 3em !important; color:#333; background-color: transparent; margin: 10px 0 }
}

@media screen and (min-width: 900px) {

    .logo h2{margin: 0 !important; padding: 0 !important; letter-spacing: -1px; font-size:2em;};
    nav ul.menu-med{display: flex; visibility: visible;}
    ul.menu-toggle{display:none}
    nav ul li{display: inline-block; visibility: visible; margin-left:30px}
    
}

@keyframes slide-in {
    from{left:-100%}
    to{left:0}
    
}


</style>

<script>
export default {
    data:()=>{ return {showMenu:false}}
       
  
    ,
    methods:{
        toggleMenu(){
            this.showMenu=!this.showMenu;
        },

        navigate(pageName){
            this.showMenu = false;
            this.$router.push(pageName);
        }


    }
}
</script>
