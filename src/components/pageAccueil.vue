<template>
    <div class="body">
        <img src="..//assets/V.jpg" alt="logo" class="imgs">
        <nav>
            <ul>
               
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
    </div>
</template>
<style>
ul{
    display: block;
    justify-content: space-between;
    list-style: none;
    border: solid;
    width: 20rem;
    height: 32rem;

}
a{
    text-decoration: none;
    font-size: 1.5rem;
    position: relative;
    left: 23%;
    
}
 .imgs{
    height: 7rem;
    width: 7rem;
    border-radius: 100%;
    z-index: -1 ;
    height: 5rem;
}
li{
    margin: 5%;
   
    box-shadow: 0px 0px 2Px 2px gainsboro;
    width: 15rem;
    height: 4rem;
    position: relative;
    right: 10%;
}
.body{
    width: 95%;
}

</style>