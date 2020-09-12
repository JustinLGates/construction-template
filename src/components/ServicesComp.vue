<template>
  <div class="row">
    <div class="col-12 text-center p-2">
      <button class="btn btn-outline-primary">Request a Quote</button>
    </div>
    <div class="col-12 p-2">
      <h3 class="text-center">Our Services</h3>
      <div class="font-md text-center bg-primary p-2">
        <div class="p-3 bg-secondary">Residental</div>
        <div class="p-3">Commerial</div>
        <div class="p-3 bg-secondary">Industiral</div>
        <div class="p-3">Data communication</div>
        <div class="p-3 bg-secondary">Data communication</div>
        <div class="p-3">Data communication</div>
        <div class="p-3 bg-secondary">Data communication</div>
      </div>
    </div>
    <div class="col-12">
      <i class="text-primary fas fa-quote-left"></i>
      <p class="quote text-dark text-center d-inline p-2">
        Our mission is to provide the best quality work at an affordable price.
      </p>
      <i class="text-primary fas fa-quote-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesComp",
};
</script>

<style>
.font-md {
  font-size: large;
}
.quote {
  font-size: x-large;
  font-weight: bold;
}
.quote-block {
  font-size: xx-large;
}
</style>
