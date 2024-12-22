import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png'

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-black border border-t-[2px] border-sky-800 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-center mb-3 gap-4 p-3 py-6 items-center rounded-md bg-zinc-900">
      <button className="flex  h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                DCB Web Mail
              </button>
              <button className="flex  h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                Admin Login
              </button>
              <button className="flex  h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                Circular Login
              </button>

      </div>
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
          <Link href="/">
            <Image src={logo} alt="" width={120}/>
          </Link>
          <p className="text-white">
          Taliya Bagh, Lahurabir, Tella Bagh Po, Varanasi, Uttar Pradesh 
          </p>
          <span className="font-semibold text-white">hello@lama.dev</span>
          <span className="font-semibold text-white">+1 234 567 890</span>
          <div className="flex gap-6 ">
            <Image className="" src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/3">
          <div className="flex flex-col  text-white justify-start items-start gap-8">
            <h1 className="font-medium text-lg">Activties</h1>
            <div className="flex flex-col gap-6">
            <Link href="">Financial</Link>
              <Link href="/aboutus">Press Release / Notice</Link>
              <Link href="">Tendors</Link>
            
              <Link href="">Public Circular</Link>
              <Link href="">Recruitment</Link>
              <Link href="">Forms</Link>

            </div>
          </div>
        
          <div className="flex flex-col text-white justify-start items-start gap-8">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Quick Links</Link>
            
              <Link href="">Holidays</Link>
              <Link href="/privacyPolicy">Terms & Policy</Link>
             
            </div>
            <h1 className="font-medium text-lg">Customer Care </h1>
            <div className="flex flex-col gap-6">
             +91**********
             
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
          <h1 className="font-medium text-white text-lg">SUBSCRIBE</h1>
          <p className="text-white">
            Be the first to get the latest news. 
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 bg-zinc-600 rounded-full outline-none"
            />
            <button className="w-1/4 bg-blue-950 rounded-full text-white">JOIN</button>
          </div>
         
        </div>
      </div>
      {/* BOTTOM */}
    
    </div>
  );
};

export default Footer;
