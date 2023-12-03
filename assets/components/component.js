const navBar = `
    <nav class="bg-primary p-2 text-Onprimary text-nav">
    <div class="container mx-auto flex justify-between items-center">
    <div class="space-x-6 flex justify-center items-center">
        <!-- Logo or Brand -->
        <a href="#" class="text-white text-lg font-bold">
        <img src="../assets/images/Sala-Logo.png" alt="" class="w-[70px] h-[70px]">
        </a>
        <!--Search bar-->
        <div class="bg-Onprimary rounded-sm-radius">
        <i class="fa-solid fa-magnifying-glass text-Onsecondary p-2"></i>
        <input type="text" name="" class="outline-none text-Onsecondary text-body bg-Onprimary" placeholder="ស្វែងរក...">
        </div>
    </div>
    <!-- Navbar Links -->
    <div class="space-x-4 flex items-center">
        <a href="#" class="text-white hover:text-secondary">សាលារៀន</a>
        <a href="#" class="text-white hover:text-secondary">បណ្ណាល័យ</a>
        <a href="#" class="text-white hover:text-secondary">មេរៀន</a>
        <a href="#" class="text-white hover:text-secondary">អត្ថបទ</a>
        <a href="#" class="text-white hover:text-secondary">អំពីយើង</a>
        <a href="#" class="bg-secondary rounded-sm-radius">
        <i class="fa-regular fa-user p-3 text-Onsecondary"></i>
        </a>
    </div>
    </div>
    </nav>
`

document.getElementById("navbar").innerHTML = navBar