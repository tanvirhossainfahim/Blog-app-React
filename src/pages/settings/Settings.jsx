import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://scontent.fdac49-1.fna.fbcdn.net/v/t1.6435-9/87174678_2785017431784557_8130645465269010432_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeE4sxXjLJTaG60GBMbfYiGOnOzO6EIJp0-c7M7oQgmnT14Wntoor7xti0sieIuBtfhPb3FFJuIozun5Fuxw_Yls&_nc_ohc=0-ro8wCkH_EAX-d6Vfn&_nc_oc=AQm_nW7M7TypOmA3rK3EIEdrfpq9tQjf4pIpoVM4FuGB76HYQJfPxVX1eaJdWW4UdXg&_nc_ht=scontent.fdac49-1.fna&oh=686689c430cd09ea5a956ac847daf4c2&oe=60D7D3C3"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Tanvir Hossain Fahim" name="name" />
          <label>Email</label>
          <input type="email" placeholder="tanvirhossainfahim89@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
