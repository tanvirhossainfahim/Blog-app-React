import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Mern-Stack</span>
        <span className="headerTitleLg">BLOG APP</span>
      </div>
      <img
        className="headerImg"
        src="https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg"
        alt=""
      />
    </div>
  );
}
