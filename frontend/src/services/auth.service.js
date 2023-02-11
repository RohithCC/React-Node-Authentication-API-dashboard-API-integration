import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/";

class AuthService {
  login(email, password) {
    {console.log({
      email,
      password
    })}
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
     
      .then(response => {
        
 
        if(response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
       }
      console.log(response)
        return response.data;
       
       
        
       
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    console.log(name,email,password)
    return axios
    .post(API_URL + "register", {
      name,
      email,
      password
    })
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
