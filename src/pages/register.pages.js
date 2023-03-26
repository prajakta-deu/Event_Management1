const Register=()=>{
    return(
        <>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <div class="card">
                <div class="card-header bg-primary text-white">
                  <h3 class="card-title mb-0">Register</h3>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Enter name"/>
                    </div>
                    <div class="form-group">
                      <label for="email">Email address</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                      <label for="confirmPassword">Confirm Password</label>
                      <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password"/>
                    </div>
                    <div class="form-check mb-3">
                      <input type="checkbox" class="form-check-input" id="agree"/>
                      <label class="form-check-label" for="agree">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Register;