 <nav id="sidebarMenu" style="resize: horizontal" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
     <div class="position-sticky pt-3">
         <ul class="nav flex-column">
             <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="#">
                     <span data-feather="home"></span>
                     The Thanh Coffee
                 </a>
             </li>
             @component('components.sidebar-item', [
                 'route' => 'products',
                 'displayText' => 'Sản phẩm',
                 'roleId' => 2,
             ])
             @endcomponent
             @component('components.sidebar-item', [
                 'route' => 'jobs',
                 'displayText' => 'Công việc',
                 'roleId' => 4,
             ])
             @endcomponent
             @component('components.sidebar-item', [
                 'route' => 'questions',
                 'displayText' => 'Câu hỏi',
                 'roleId' => 5,
             ])
             @endcomponent
             @component('components.sidebar-item', [
                 'route' => 'users',
                 'displayText' => 'Người dùng',
                 'roleId' => 7,
             ])
             @endcomponent
             @component('components.sidebar-item', [
                 'route' => 'productLists',
                 'displayText' => 'Danh mục sản phẩm',
                 'roleId' => 2,
             ])
             @endcomponent
         </ul>
     </div>
 </nav>
