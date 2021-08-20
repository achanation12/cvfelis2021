<template>
    <section class="profile"> 
        <div class="header pb-5">
            <h1>Live as if you were to die tomorrow</h1>
            <p>My friend call me Galih</p>
        </div>
    </section>
    <section class="content container mt-5">
        <div class="row">
            <div class="col-lg-3" style="border-left:1px solid #FF4C29;">
                <h3>Profile</h3>
            </div>
            <div class="col-lg-9 float-start">
                <div class="profile-images pt-5">
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
        height: 250px;
        object-fit: cover;
        background-image: linear-gradient(to right, #082032 , #334756);
    }
    .sub-profile {
        background-color: white;
        padding: 12px;
    }
</style>