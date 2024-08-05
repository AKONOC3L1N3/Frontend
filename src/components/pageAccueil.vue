<template>
    <div class="body">
       
        <nav>
            <ul>
                <img src="..//assets/V.jpg" alt="logo">
                <li>
                    <a href="O">Contacts</a>
                </li>
                <li>
                    <a href="O">Services</a>
                </li>
                <li>
                    <a href="O">Login</a>
                </li>
                <li>
                    <a href="O">Clients et avis</a>
                </li>
                <li>
                    <a href="O">Get started</a>
                </li>
            </ul>
        </nav>
   
        <p class="text1">Une seule plateforme pour <br> tous vos besoins </p>
    </div>
</template>
<style>
ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
a{
    text-decoration: none;
    font-size: 1.5rem;
}
nav img{
    height: 7rem;
    width: 7rem;
    border-radius: 100%;
    z-index: -1 ;
    height: 5rem;
}

.body{
    width: 95%;
}
#auto{
z-index: -1;

}
.text1{
  color: white;
  font-size: 2rem;
  border: solid;
  width: 23rem;
  position: relative;
  bottom: 20rem;  
}

</style>