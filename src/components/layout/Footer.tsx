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
          <h3 className="text-sm">Support</h3>
          <h3 className="text-2xl md:text-3xl font-semibold">Swift Joint</h3>
          <h3 className="text-2xl md:text-3xl font-semibold">App</h3>
          <h3 className="text-2xl md:text-3xl font-semibold">Learn</h3>
          <div className="space-y-2">
            <Link
              to="#support"
              className="text-sm text-muted-foreground hover:text-blue-500 block"
            >
              FAQs
            </Link>
            <Link
              to="#about-sable"
              className="text-sm text-muted-foreground hover:text-blue-500 block"
            >
              About Sable
            </Link>
          </div>
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
          <h3 className="text-sm">Support</h3>
          <h3 className="text-2xl font-semibold">Swift Joint</h3>
          <h3 className="text-2xl font-semibold">App</h3>
          <h3 className="text-2xl font-semibold">Learn</h3>
          <div className="space-y-2">
            <Link
              to="#support"
              className="text-sm text-muted-foreground hover:text-blue-500 block"
            >
              FAQs
            </Link>
            <Link
              to="#about-sable"
              className="text-sm text-muted-foreground hover:text-blue-500 block"
            >
              About Sable
            </Link>
          </div>

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

      <hr className="my-8 border-t border-[#2F2F2F]" />

      <div>
        <p className="text-sm text-muted-foreground">
          Privacy Policy | Terms and Conditions
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          This Privacy Policy explains how Swift Joint collects, uses, and shares
          information when you use our mobile application ("App") and
          electrofusion machine ("Product"). We collect information you provide
          when using our Services, such as account details and payment
          information. We also gather usage data and device information
          automatically. We use your information to deliver and improve our
          Services, process transactions, and communicate with you. We may share
          your information with service providers and business partners as
          necessary. You can update your information and preferences through our
          Services. If you have questions or concerns, please contact us at
          [Contact Information].
        </p>
        <div className="mt-4 ml-4">
          <p className="text-sm text-muted-foreground">
            Please see{' '}
            <a
              href="https://www.swiftjoint.com/terms-and-conditions"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.swiftjoint.com/terms-and-conditions
            </a>{' '}
            for terms and conditions. Some exclusions apply.
          </p>
          <p className="text-sm text-muted-foreground">
            Please see{' '}
            <a
              href="https://www.swiftjoint.com/terms-and-conditions"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.swiftjoint.com/terms-and-conditions
            </a>{' '}
            for terms and conditions.
          </p>
          <p className="text-sm text-muted-foreground">
            Swift Joint estimated annual value
          </p>
          <p className="text-sm text-muted-foreground">
            Swift Joint product comparisons
          </p>
        </div>
        <p className="text-sm text-muted-foreground mt-4">† SWIFT JOINT</p>
      </div>
    </footer>
  );
}