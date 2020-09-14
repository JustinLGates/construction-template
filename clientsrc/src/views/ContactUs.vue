<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12">
        <h1>Contact us</h1>
      </div>
      <div class="col-12 col-md-7  m-auto ">
        <form class="text-left p-2 form-box card bg-light shadow m-auto ">
          <h2>Send us a message.</h2>
          <label class="label" for="name">Name</label>
          <input class="w-100" type="text" />
          <br />
          <label class="label" for="name">E-mail</label>
          <input class="w-100" type="text" />
          <br />
          <label class="label" for="name">Message</label>
          <textarea class="w-100" type="text" rows="8" />
        </form>
      </div>
      <div class="col-12 col-md-5 my-3">
        <ServicesComp />
      </div>
      <div class="col-12 col-lg-10 m-auto pt-2">
        <div class="pt-3">
          <h6>3402 Cleveland Blvd, Caldwell, ID 83605</h6>
          <iframe
            class="map img-fluid"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5774.375419246301!2d-116.66871732054702!3d43.64426282125748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54afb4874a255a21%3A0x12346806da8b0246!2sCraig&#39;s%20Tattoo%20Co!5e0!3m2!1sen!2sus!4v1599945184626!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <h2>
            Call us for all of your construction needs
          </h2>
          <h2 class="text-primary">(208)888-8888</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesComp from "../components/ServicesComp";
export default {
  name: "ContactUs",
  components: {
    ServicesComp,
  },
};
</script>

<style>
.map {
  height: 500px;
}
.form-box {
  max-width: 500px;
}
.label {
  min-width: 5rem;
}
</style>
