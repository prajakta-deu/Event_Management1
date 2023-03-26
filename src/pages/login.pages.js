const Login=()=>
{
    return(
        <>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h3 class="card-title mb-0">Login</h3>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="email">Email address</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                  </form>
                </div>
                <div class="card-footer text-center">
                  <p class="mb-0">Don't have an account? <a href="#">Register here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Login;