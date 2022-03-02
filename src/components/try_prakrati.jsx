import "./pratry.css"
const Prakrititry = (props) => {

    
          return (
            <div>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
              <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet" />
              <link rel="stylesheet" href="style.css" />
              <div className="wrapper" id="listq">
                <div className="wrap">
                  <div className="questions" id="q1">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">1 of 5</div>
                    </div>
                    <div className="h4 font-weight-bold">Select your Physique type..</div>
                    <div className="pt-4">
                      <form>
                        <label className="options">Answer 1.1<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 1.2<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 1.3<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 1.4<input type="radio" name="radio" /><span className="checkmark" />
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="questions" id="q2">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">2 of 5</div>
                    </div>
                    <div className="h4 font-weight-bold">Question 2</div>
                    <div className="pt-4">
                      <form>
                        <label className="options">Answer 2.1<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 2.2<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 2.3<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 2.4<input type="radio" name="radio" /><span className="checkmark" />
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="questions" id="q2">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">3 of 5</div>
                    </div>
                    <div className="h4 font-weight-bold">Question 3</div>
                    <div className="pt-4">
                      <form>
                        <label className="options">Answer 3.1<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 3.2<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 3.3<input type="radio" name="radio" /><span className="checkmark" /></label>
                        <label className="options">Answer 3.4<input type="radio" name="radio" /><span className="checkmark" />
                        </label>
                      </form>
                    </div>
                  </div>
                  <div className="questions" id="q3">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">4 of 5</div>
                    </div>
                    <div className="h4 font-weight-bold">Contact Information</div>
                    <div className="pt-4 details">
                      <form>
                        <input type="text" name="fname" id="fname" placeholder="First Name" required defaultValue />
                        <input type="text" name="lname" id="lname" placeholder="Last Name" required defaultValue /><br />
                        <input type="email" name="email" id="email" placeholder="Email" required defaultValue /><br />
                        <input type="tel" name="phno" id="phno" placeholder="Phone" required defaultValue /><br />
                        <select className="w-long input" id="occupation" placeholder="Choose your occupation" required>
                          <option>Student</option>
                          <option>Employee</option>
                          <option>House Wife</option>
                          <option>Others</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="questions" id="q4">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">5 of 5</div>
                    </div>
                    <div className="h4 font-weight-bold">Address</div>
                    <div className="pt-4 details">
                      <form>
                        <textarea className="addr-text" name="address" id="address" placeholder="Address" required value rows={2} defaultValue={""} /><br />
                        <input className="input" type="text" name="address" id="city" placeholder="City" required defaultValue />
                        <input className="input" type="text" name="address" id="state" placeholder="State" required defaultValue />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end pt-2 navigator">
                  <button className="btn btn-primary mx-3 hidden" id="back"><span className="fas fa-arrow-left pr-1" />Previous</button>
                  <button className="btn btn-primary" id="next">Next <span className="fas fa-arrow-right" /></button>
                  <button className="btn btn-primary hidden" id="submit">Submit <span className="fas fa-arrow-down" /></button>
                </div>
              </div>
            </div>
          );
        }




export default Prakrititry;