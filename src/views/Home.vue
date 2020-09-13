<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <h1>Home</h1>
      </div>
      <div class="col-12">
        <div class="text-center">
          <img class="img-fluid" src="@/assets/TeamImg.jpg" alt="img" />
          <div class="photo-caption">
            <p class="p-2 m-0">You have found the expert your looking for.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-3 pt-md-5">
      <div class="col-12 col-md-6 ">
        <h2 class="p-2">Boise's best buliding team.</h2>
        <img class="img-fluid" src="@/assets/HeroImg.jpg" alt="img" />
        <div class="p-1 pt-3">
          <h5>Professional</h5>
          <p>
            We are ranked number one by the boise weekly. Our employees are
            certified. Were licenced bonded insured.
          </p>
          <hr />
          <h5>Highly recommended</h5>
          <p>
            We are ranked number one by the boise weekly. Our employees are
            certified. Were licenced bonded insured.
          </p>
          <hr />
          <h5>Highly recommended</h5>
          <p>
            We are ranked number one by the boise weekly. Our employees are
            certified. Were licenced bonded insured.
          </p>
          <hr />
        </div>
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
