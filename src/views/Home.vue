<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <img class="img-fluid" src="@/assets/TeamImg.jpg" alt="img" />
          <div class="photo-caption">
            <p class="p-2 m-0">Message here...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col-12 col-md-6">
        <h2 class="p-2">Boise's best contractor</h2>
        <img class="img-fluid" src="@/assets/HeroImg.jpg" alt="img" />
        <p class="p-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          perferendis possimus illo corrupti quam quod, dolorem beatae ducimus
          quas sit! Tempora laudantium odit earum, id magni sed eos animi sit!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          adipisci, explicabo pariatur sunt praesentium perspiciatis. Quos aut
          possimus nobis culpa excepturi, repudiandae magni deleniti in magnam
          doloremque reiciendis, odio enim!
        </p>
        <hr />
        <h2></h2>
        <ul>
          <li>Point one</li>
          <li>Point one</li>
          <li>Point one</li>
        </ul>
      </div>
      <div class="col-12 col-md-6">
        <Services />
      </div>
    </div>
  </div>
</template>

<script>
import Services from "../components/ServicesComp";

export default {
  name: "Home",
  components: {
    Services,
  },
};
</script>

<style>
.photo-caption {
  position: absolute;
  bottom: 50px;
  background-image: linear-gradient(
    to bottom right,
    rgba(238, 146, 33, 0.842),
    rgba(255, 136, 0, 0.219)
  );
  text-align: left;
  color: rgb(255, 255, 255);
  width: 90%;
  box-shadow: 2px 2px 2px rgba(255, 140, 0, 0.493);
}
</style>
