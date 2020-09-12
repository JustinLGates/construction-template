<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <img class="img-fluid" src="@/assets/TeamImg.jpg" alt="img" />
        </div>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-6">
        <h3 class="p-1">High quality work at an afordable price.</h3>
        <img class="img-fluid" src="@/assets/HeroImg.jpg" alt="img" />
        <p
          class="p-1"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis possimus illo corrupti quam quod, dolorem beatae ducimus quas sit! Tempora laudantium odit earum, id magni sed eos animi sit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci, explicabo pariatur sunt praesentium perspiciatis. Quos aut possimus nobis culpa excepturi, repudiandae magni deleniti in magnam doloremque reiciendis, odio enim!</p>
      </div>
      <div class="col-6">
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
