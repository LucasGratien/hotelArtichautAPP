<template>
  <!--  zone de fond -->
  <div class=" md:p-8">
    <!--    ensemble des trois cards-->
    <div class="flex flex-col md:grid md:grid-cols-4 gap-8">
      <!-- Colonne principale avec les deux premières cards -->
      <div class="col-span-3 space-y-8">
        <!-- UserInfoAdmin-->
        <AdminUserInfoDash/>

        <!-- UserBookingHistory-->
        <!-- Deuxième card avec tableau et pagination -->
        <AdminUserBookingHistory/>
      </div>

      <!-- UserReviewPref-->
      <!-- Colonne de droite avec la troisième card verticale -->
        <AdminUserReviewPref/>
    </div>
  </div>
</template>