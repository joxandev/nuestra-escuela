<template>

  <div>
  <HeaderSection></HeaderSection>
     <div class="bg"></div>
     <section>
<div class="container">
    <nuxt/>
    </div>
     </section>
  
  <footer-section></footer-section>
  </div>
</template>

<script>
import  HeaderSection  from '~/components/HeaderSection'
import FooterSection from '~/components/FooterSection'
export default {
  components:{HeaderSection, FooterSection}
  
}
</script>


<style>
*{box-sizing: border-box}
html, body{font-size:1em}
ul{margin:10px 0; padding:0 0 0 20px }
.blue{color:#0086f2 }
.blue-bg{background-color:#0086f2 !important}
.dark-blue{color:#0f2c44}
a, a:visited{text-decoration: none; color:#0086f2}
.bg{height: 200px; background-repeat: no-repeat; background-size:80% auto; background-position: 50% 70%; background-color:#0086f2 !important; background-image: url('~/assets/images/nuestra-escuela.png') }
.container{padding: 10px; background-color: #fff}
h1{font-size:2em; text-align: center; margin: 10px; padding:0; line-height: 1em}
h1 i{color:#0086f2}
h1.mainheading{letter-spacing: -2px; margin: 20px 0; font-size: 2.2em}
section{background-color: #fff}
.container section{margin: 10px 20px}
.container section p,.article ul{font-size: 1.3em; line-height: 1.5em}
.article address{font-size: 1.3em; line-height: 1.1em; font-weight: bold; font-style: normal; margin: 15px 0}

section.article h2{color:#0086f2; margin:10px 0; padding: 0 !important; line-height: 1.1em}
div.table{overflow-x: auto}
table{width: 100%; border:solid 1px #ccc; margin: 20px 0; border-collapse: collapse; font-size: 1.3em;}
td, th{padding: 10px 20px; border: solid 1px #ccc; text-align: left}
tr:nth-child(odd) td{background-color:#eee}
th{background-color: #0086f2; color: #fff; border-color: transparent}
.align-center{text-align: center !important}

@media screen and (max-width: 500px) {
  .article h1 i{display: block}
  .article{font-size:.8em !important}
  
}

@media screen and (min-width: 900px) {
  .bg{height: 250px; background-repeat: no-repeat; background-size:60% auto; background-position: 50% 70%;}
  .container{max-width: 900px; margin:auto}
  h1, h1.mainheading{font-size:3em; text-align: center; margin: 10px; padding:0}

  .container section{margin:30px 50px; padding-bottom: 30px}
  section.article h2{font-size:2.3em; margin: 30px 0 20px 0 !important}
  .article h1{margin-bottom: 40px}
}


@media screen and (min-width: 1200px) {
  .container{max-width: 1000px; margin:auto}
  .container section{margin:30px 100px}
}

@media screen and (min-width: 1300px) {
  .container{max-width: 1200px; margin:auto}
}

</style>
