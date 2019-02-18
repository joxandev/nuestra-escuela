<template>
<section class="container article">
     <h1><i class="far fa-calendar-check"></i>  Calendario Escolar 2018/2019</h1>
     <p>Nuestras clases se celebran los domingos de 3 a 5 de la tarde.</p>

     <h2>Primer Trimestre</h2>
     <div class="terms">
         <div>
            <h3>Septiembre</h3>
            <ul class="calendario">
                <li class="yellow">2</li>
                <li>9</li>
                <li>16</li>
                <li>23</li>
                <li>30</li>
            </ul>
         </div>
           <div>
            <h3>Octubre</h3>
            <ul class="calendario">
                <li>7</li>
                <li>14</li>
                <li>21</li>
            </ul>
         </div>
           <div>
            <h3>Noviembre</h3>
            <ul class="calendario">
                <li>11</li>
                <li>18</li>
                <li>25</li>
            </ul>
         </div>
         <div>
            <h3>Diciembre</h3>
            <ul class="calendario">
                <li>2</li>
                <li>9</li>
                <li>16</li>
            </ul>
         </div>
     </div>

      <h2>Segundo Trimestre</h2>
     <div class="terms">
         <div>
            <h3>Enero</h3>
            <ul class="calendario">
                <li>13</li>
                <li>20</li>
                <li>27</li>
    
            </ul>
         </div>
           <div>
            <h3>Febrero</h3>
            <ul class="calendario">
                <li>3</li>
                <li>10</li>
        
            </ul>
         </div>
           <div>
            <h3>Marzo</h3>
            <ul class="calendario">
                <li>3</li>
                <li>10</li>
                <li>17</li>
                <li>24</li>
                <li>31</li>
            </ul>
         </div>
     </div>

      <h2>Tercer Trimestre</h2>
     <div class="terms">
         <div>
            <h3>Abril</h3>
            <ul class="calendario">
                <li>28</li>
            
            </ul>
         </div>
           <div>
            <h3>Mayo</h3>
            <ul class="calendario">
                <li>5</li>
                <li>12</li>
                <li>19</li>
            </ul>
         </div>
           <div>
            <h3>Junio</h3>
            <ul class="calendario">
                <li>9</li>
                <li>16</li>
                <li>23</li>
                <li>30</li>
            </ul>
         </div>
         <div>
            <h3>Julio</h3>
            <ul class="calendario">
                <li>7</li>
                <li>14</li>
            </ul>
         </div>
     </div>

    <p>* El domingo 2 de septiembre es jornada de puertas abiertas</p>
    
</section>
   
</template>

<style scoped>
ul.calendario li.yellow {
  background-color: rgb(243, 208, 7);
  color: #333;
}
h3 {
  font-size: 1.4em;
  color: #333;
  margin: 5px 0 15px 0;
}
ul.calendario {
  display: flex;
  list-style: none;
  margin: 10px 0;
  padding: 0;
}
ul.calendario li {
  margin-right: 10px;
  height: 30px;
  width: 30px;
  background-color: #88c1f0;
  line-height: 30px;
  color: #000;
  text-align: center;
  font-weight: bold;
  border-radius: 50%;
}

div.terms {
  display: flex;
  flex-direction: column;
}
div.terms div {
  background-color: #eee;
  border-radius: 15px;
  margin: 5px 0;
  padding: 10px;
}

@media screen and (min-width: 700px) {
  div.terms {
    flex-direction: row;
  }
  ul.calendario li {
    height: 30px;
    width: 30px;
    line-height: 30px;
  }
}

@media screen and (min-width: 900px) {
  h2 {
    font-size: 2.2em !important;
  }
  h3 {
    font-size: 1.6em !important;
  }
  div.terms {
    display: flex;
    margin: 20px 0;
  }
  ul.calendario li {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
  div.terms div {
    margin-right: 20px;
    padding: 10px 20px;
    background-color: #eee;
    border-radius: 15px;
  }
}

@media screen and (min-width: 1200px) {
  h3 {
    font-size: 1.6em;
  }
}
</style>

