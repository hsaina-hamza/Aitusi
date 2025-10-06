export function createNavbar() {
    return `
        <!-- Header -->
        <header class="site-header" id="nav">
            <div class="container mx-auto max-w-6xl">
                <h1 class="header-title">بسم الله الرحمن الرحيم</h1>
                <p class="header-subtitle">اخماس قبيلة أيتوســــى</p>
                <div class="flex justify-center mt-6">
                    <div class="h-1 w-24 bg-yellow-500 rounded"></div>
                </div>
            </div>
        </header>

        <!-- Navigation -->
        <nav class="nav-wrapper" >
            <div class="nav-container">
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <i class="fas fa-bars"></i>
                </button>
                <ul class="nav-list" id="navList">
                    <li><a href="#nav" class="nav-link">الرئيسية</a></li>
                    <li><a href="#toc" class="nav-link">فهرس القبائل</a></li>
                    <li><a href="communication.html" class="nav-link">تواصل معنا</a></li>
                </ul>
            </div>
        </nav>
    `;
}
