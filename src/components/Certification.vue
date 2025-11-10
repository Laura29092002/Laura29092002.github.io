<template>
    <h2>Mes certifications</h2>
  <div class="diplome">
    <a href="https://app.procertif.com/wallet/65770394d0187"><img class="img-diplome" src="../assets/images/diplome-ux-ui.jpg"></img></a>
    <a href="https://app.procertif.com/wallet/657439004aec6/2311laumus841"><img class="img-diplome" src="../assets/images/diplome-po.jpg"></img></a>
  </div>
</template>
<style>
.diplome{
  display: flex;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  z-index: 99;
  align-items: center;
  gap: 70px;
  margin-bottom: 50px;
}

.img-diplome{
  width: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.img-diplome:hover {
  transform: scale(1.1); /* agrandissement au survol */
}

</style>