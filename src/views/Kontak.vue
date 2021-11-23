<template>
    <section class="kontak">
        <div class="header pb-5">
            <h1>Kontak</h1>
            <p>Be the change that you wish to see in the world</p>
        </div>

        <div class="bg-dark1 pb-3">
            <h3>Kontak</h3>
            <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                    <iframe class="gmap_iframe maps-h mt-3" style="border-radius:40px;" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q= Jalan Layar Raya No.72, Kelapa Dua, Kelapa Dua KAB. TANGERANG - KELAPA DUA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                <div class="col-lg-3 mt-3 bg-message-me pb-4">
                  <div class="container-fluid">
                      <h3>Message Me!</h3>
                      <form action="" class="text-start">
                          <input style="border-radius:5px;" type="text" class="form-control" placeholder="your email...">
                          <textarea style="border-radius:5px;" class="form-control mt-3" name="" id="" cols="30" rows="10" placeholder="Write now ..."></textarea>
                          <button type="submit" class="btn btn-outline-primary btn-block mt-3">Send <i class="fas fa-paper-plane"></i></button> 
                          <div class="float-end">
                            <div class="text-center mt-3 mb-3">
                                <a href="">
                                    <img width="40" class="img img-fluid" src="../assets/kontak/whatsapp.svg" alt="">
                                </a>
                                <a href="">
                                    <img width="40" class="img img-fluid" src="../assets/kontak/gmail.svg" alt="">
                                </a>
                            </div>
                          </div>         
                      </form>
                  </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
    .bg-dark1 {
        padding: 30px;
        background-image: linear-gradient(to right, #C9CCD5 , #E4D8DC);
    }

    .maps-h {
        height: 600px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.29);
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.29);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.29);
    }

    .bg-message-me {
        background-color: white;
        border-radius: 40px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.29);
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.29);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.29);
    }

    @media (max-width: 575.98px) {
        .maps-h {
            height: 300px;
        }
    }
</style>