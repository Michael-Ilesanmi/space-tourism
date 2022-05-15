<template>
  <div class="font-barlow">
    <div class="flex justify-between items-center fixed w-full top-0 lg:top-7 pl-5 pr-5 py-5 md:pl-12 md:pr-0">
        <img src="@/assets/img/icons/logo.png" alt="Logo" class="max-h-7 h-auto md:max-h-14">
        <div class="hidden lg:block border-t w-3/12 -mr-52 opacity-25 border-light z-10"></div>
        <nav class="px-12 lg:px-24 w-4/6 backdrop-blur-[81px] bg-[#ffffff0a] hidden md:block topnav">
          <ul class="flex justify-between items-center text-nav-text  text-white">
            <li class=" border-b-[3px] border-white"><span class="hidden lg:inline font-bold">00</span> HOME</li>
            <li><span class="hidden lg:inline font-bold">01</span> DESTINATION</li>
            <li><span class="hidden lg:inline font-bold">02</span> CREW</li>
            <li><span class="hidden lg:inline font-bold">03</span> TECHNOLOGY</li>
          </ul>
        </nav>
        <div class="block md:hidden">
          <button class="flex items-center text-light" @click="openNav = !openNav">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
    </div>
    <div :class="[openNav ? 'max-w-[65vw] min-w-[65vw] pl-7 pt-7' : 'max-w-[0vw] min-w-[0vw] pl-0 pt-0']" class="min-h-screen backdrop-blur-[81px] bg-[#ffffff0a] fixed top-0 right-0 text-white transition-all ease-in-out duration-200">
      <div class="flex flex-col">
        <button :class="[openNav ? 'flex' : 'hidden' ]" class="flex items-center text-white pr-7 mb-5 self-end" @click="openNav = !openNav">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <nav class="sidenav">
          <ul>
            <li class=" border-r-[3px] border-white"><span class="font-semibold">00</span> HOME</li>
            <li><span class="font-semibold">01</span> DESTINATION</li>
            <li><span class="font-semibold">02</span> CREW</li>
            <li><span class="font-semibold">03</span> TECHNOLOGY</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      openNav : false
    }
  }
}
</script>

<style>
.topnav ul li{
@apply py-6 cursor-pointer min-w-fit tracking-[2.7px] hover:border-b-[3px] hover:border-light transition-all ease-in-out;
}
.sidenav ul li{
@apply my-6 cursor-pointer min-w-fit tracking-[2.7px] hover:border-r-[3px] hover:border-light transition-all ease-in-out text-xs;
}
</style>