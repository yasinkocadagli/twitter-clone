import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="py-0.5">
      <Link
        to="/"
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors"
      >
        <svg
          width={30}
          height={30}
          viewBox="0 0 48 48"


        >
          <path
            d="M36.6526 3.80782H43.3995L28.6594 20.6548L46 43.5798H32.4225L21.7881 29.6759L9.61989 43.5798H2.86886L18.6349 25.56L2 3.80782H15.9222L25.5348 16.5165L36.6526 3.80782ZM34.2846 39.5414H38.0232L13.8908 7.63408H9.87892L34.2846 39.5414Z"
            fill="#fff"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
