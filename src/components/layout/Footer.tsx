import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function Footer() {
  return (
    <footer
      className={cn('bg-black text-white py-12 px-6 md:px-30')}
      aria-labelledby="footer"
    >
      {/* Desktop & Tablet Layout (md and above) */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-start space-x-12 space-y-10 ml-5 md:ml-0">
        <div className="space-y-3 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold">Swift Joint</h3>
          <h3 className="text-2xl font-semibold"><Link to="/application">App </Link></h3>
        </div>

        <div className="space-y-4" id="contact-us">
          <h3 className="text-2xl md:text-3xl font-semibold">Contact</h3>
          <p className="text-sm">
            <span className="font-semibold">Email: </span>info@swiftjoint.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Location: </span>Bengaluru, Karnataka
          </p>
        </div>

        <img src="/logo.svg" alt="Swift Joint Logo" width={180} height={180} />
      </div>

      {/* Mobile Layout (<md) */}
      <div className="flex md:hidden justify-between items-center ml-5 mr-5">
        <div className="flex flex-col space-y-3">
          <h3 className="text-2xl font-semibold">Swift Joint</h3>
          <h3 className="text-2xl font-semibold"><Link to="/application">App </Link></h3>

          <div className="space-y-4 mt-4" id="contact-us">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="text-sm">
              <span className="font-semibold">Email: </span>info@swiftjoint.com
            </p>
            <p className="text-sm">
              <span className="font-semibold">Location: </span>Bengaluru, Karnataka
            </p>
          </div>
        </div>

        <img
          src="/logo.svg"
          alt="Swift Joint Logo"
          width={100}
          height={100}
          className="flex-shrink-0 mr-5"
        />
      </div>
    </footer>
  );
}