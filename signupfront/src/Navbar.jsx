

function App(){

    const navigateTouserLogin = () => {
        window.location.href = '/userLogin'
    }

    const navigateToAdminLogin = () => {
        window.location.href = '/adminLogin'

    }

    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
          
      </ul>

      <a class="navbar-brand fw-bolder fs-4 mx-auto" href="#">SE INTERNSHIP ASSESSMENT</a>
        
      <button onClick={navigateToAdminLogin} className="btn btn-outline-primary ms-auto px-4 ">
        <i className="fa fa-sign-in me-2"></i>Admin</button>
      <button  onClick={navigateTouserLogin} className="btn btn-outline-primary ms-2 px-4 ">
        <i className="fa fa-sign-in me-2"></i>User</button>
    </div>
  </div>
</nav>
</div>
    )
}

export default App