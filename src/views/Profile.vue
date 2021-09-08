<template>
    <section class="profile"> 
        <div class="header pb-5">
            <h1>Profil</h1>
            <p>Live as if you were to die tomorrow</p>
        </div>
    </section>
    <section class="content container">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-8 float-start">
                <div class="profile-images">
                    <div class="container-fluid">
                        <h4 class="text-light">Galih Junaedi Pelis</h4>
                        <h6 class="mt-3 sub-profile"><i class="fas fa-calendar-alt"></i> Tangerang, 27 05 1998</h6>
                        <h6 class="mt-3 sub-profile"><i class="fas fa-map-marker-alt"></i> Tangerang, Banten</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .profile-images {
        width: 100%;
        object-fit: cover;
        background-image: linear-gradient(to right, #C9CCD5 , #E4D8DC);
        border-radius: 40px;
        padding-top: 5px;
        padding-bottom: 50px;
    }
    .sub-profile {
        background-color: white;
        padding: 12px;
        border-radius: 40px;
    }
</style>