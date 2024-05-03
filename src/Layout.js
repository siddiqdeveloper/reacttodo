import { Link, Outlet } from "react-router-dom";


const Layout = () =>{
    return <>

    <div className="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Todo App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

      <li class="nav-item">
      <Link  class="nav-link active" to="">Dashabord</Link>
        </li>

        <li class="nav-item">
          <Link  class="nav-link active" to="addtodo">Add todo</Link>
       
        </li>
        <li class="nav-item">
        <Link  class="nav-link active" to="list">List</Link>
       
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
    
    </div>
    <Outlet></Outlet>
    </>
}

export default Layout;