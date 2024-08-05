<template>
     <div class="appli">
        <router-view></router-view>
        <div class="container">
            <h1><i><b>INSCRIPTION</b></i></h1>
            <p>NOM :</p><input type="text" required>
            <p>PRENOM :</p><input type="text" required>
            <p>SEXE :</p>
            <p>MASCULIN </p><input type="radio" name="SEXE">
            <p>FEMININ </p><input type="radio" name="SEXE">
            <p>EMAIL :</p><input type="mail" required>
           <p>MOT DE PASSE :</p><input type="password" required><br>
          <input type="submit" value="ENVOYEZ" name="ENVOYEZ">
        </div>
    </div>
</template>
<style>
h1{
    margin: 36px;
    height:2px;
    color: white;
}
input[type="submit"]{
    margin: 15px;
    height: 37px;
    width: 120PX;
    border: 1PX solid #6567;
    border-radius:6PX ;
    font-size: 15PX;
    background:#8889 ;
}
input{
    margin: 0px;
    padding: 0PX;
    border-width: 0PX 0PX 1PX 1PX;
    border-color: white;
    background: transparent;
    border-radius:5PX;
    font-size: 25PX;
    color: white;
}
p{
    margin: 3PX;
    padding:0PX;
    color: white;
    font-size: 16PX;
    font-weight: bold;
}
.container{
    height: 347PX;
    width: 208PX;
    border: 1PX solid white;
    border-radius: 10PX;
    box-shadow: 0PX 0PX 10PX 10PX #8868;
    justify-content: center;
    align-items: center;
    background: grey;
    text-align: center;
    height: 30rem;
    width: 20rem;
    margin-top: 10%;

}
.appli{
    display: flex;
    margin: auto;
    width: 80%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 39rem;
    
}

</style>