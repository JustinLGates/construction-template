<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 col-lg-8 my-3">
        <h1 class="p-2 text-center">Contact us</h1>
        <div class="pt-5">
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            tempore corrupti architecto, id, veritatis quod dicta mollitia
            libero totam repellendus distinctio quas hic cum. Itaque libero a
            corrupti et dicta?
          </p>
        </div>
      </div>

      <div class="col-12 col-lg-4 my-3">
        <ServicesComp />
      </div>
    </div>
    <div class="col-12">
      <form className="text-left p-lg-4 px-lg-5 mx-lg-5 shadow">
        <label className="p-1 pt-3 px-2 m-0">
          Name
        </label>
        <br />
        <input
          className="p-2 w-100"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <br />
        <label className="p-1 m-0 mt-3 px-2">
          E-mail
        </label>
        <br />
        <input
          className="p-2 w-100"
          type="text"
          placeholder="john@email.com"
          name="Email"
          required
        />
        <br />
        <label className="p-1 m-0 pt-3 px-2">
          Phone
        </label>
        <br />
        <input
          className="p-2 w-100"
          type="text"
          placeholder="If you prefer a phone call (208-123-4567)"
          name="phone"
        />
        <br />
        <label className="pt-3 px-2 m-0">
          Message
        </label>
        <textarea
          name="Body"
          placeholder="What would you like to know"
          className="w-100 px-2 p-2"
          required
        />
        <br />
        <div className="d-flex justify-content-around pt-3 ">
          <button className="btn btn-outline-primary">
            Submit
          </button>
          <button className="btn btn-danger">
            Clear form
          </button>
        </div>
      </form>
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
</style>
