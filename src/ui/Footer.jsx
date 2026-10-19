import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";

function Footer() {
  return (
    <div className="h-50 px-10 pt-5 grid grid-cols-[1fr_5fr] sm:grid-cols-[1fr_3fr] grid-rows-[3fr_1fr] shadow-amber-400 shadow-2xl">
      <div className="flex flex-col gap-4 items-center">
        <span>تابعونا</span>
        <div className="flex flex-col md:flex-row gap-2">
          <a href="https://www.tiktok.com/@capita.coffee.store">
            <img src={tiktok} alt="tiktok" className="h-7 hover-effect" />
          </a>
          <a href="https://www.facebook.com/capitacoffeestore">
            <img src={facebook} alt="instagram" className="h-7 hover-effect" />
          </a>
          <a href="https://www.instagram.com/capitacoffeestore">
            <img src={instagram} alt="facebook" className="h-7 hover-effect" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-end px-5 sm:items-center">
        <span className="text-2xl font-bold mb-3 text-black">
          Capita Coffee Store
        </span>
        <ul className="flex flex-col me-10 mb-5 list-disc">
          <li className="hover-effect opacity-50">اطلب بالجملة</li>
          <li className="hover-effect opacity-50">الماكينات المتوافقة</li>
          <li className="hover-effect opacity-50">اسئلة شائعة</li>
        </ul>
      </div>
      <div className="col-start-1 col-end-3">
        <div className="text-sm justify-self-end opacity-50">
          جميع الحقوق محفوظة {new Date().getFullYear()}©
        </div>
      </div>
    </div>
  );
}

export default Footer;
