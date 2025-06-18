export default function InfoSection() {
    return (
      <section className="bg-[#383838] text-white py-16 px-8 lg:px-30">
        <div className="max-w-3xl mx-auto space-y-8">
          <p>
            The Swift Joint app allows you to connect and control your device seamlessly using your mobile number and email ID. No OTP authentication is required for registration, making the setup quick and hassle-free.
          </p>
  
          <div>
            <h2 className="text-xl font-semibold">How to Register</h2>
            <ol className="list-decimal list-inside mt-2">
              <li>Download and install the Swift Joint app.</li>
              <li>Open the app and enter your email/phone number.</li>
              <li>Set a password and complete your registration.</li>
            </ol>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold">Connecting the Device</h2>
            <ol className="list-decimal list-inside mt-2">
              <li>Locate the QR code on the front of your Swift Joint device.</li>
              <li>Open the app and scan the QR code to connect the device.</li>
            </ol>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold">Using the App</h2>
            <ol className="list-decimal list-inside mt-2">
              <li>Once connected, scan the fitting barcode or manually set the fusion time.</li>
              <li>Press Start to begin the fusion process.</li>
              <li>Monitor the process through the app in real-time.</li>
            </ol>
          </div>
  
          <div>
            <h2 className="text-xl font-semibold">Dynamic Updates</h2>
            <p className="mt-2">
              The app content is dynamic and may change based on live data updates, user interactions, and system modifications. Ensure you refresh the app regularly for the latest features and information. For further assistance, visit our support section or contact customer service.
            </p>
          </div>
        </div>
      </section>
    );
  }
  