export default function FooterLegal() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Imprint</h4>
            <p>Leovora GmbH<br/>Tierstrasse 12, 10115 Berlin, Germany<br/>CEO: Alex Meyer<br/>VAT ID: DE123456789</p>
            <p className="mt-2">Contact: hello@leovora.com<br/>Phone: +49 30 1234567</p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Privacy Policy</h4>
            <p>We respect your privacy. We only collect data necessary to process your order and improve our services. We never sell personal data. You can request access, correction or deletion of your data at any time via privacy@leovora.com.</p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Terms & Conditions / Right of Withdrawal</h4>
            <p>By placing an order, you accept our terms of sale and delivery. Consumers have a 14-day right of withdrawal starting from the day of receipt. To exercise this right, notify us by email with your order number. Returned items must be unused and in original packaging.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Leovora. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>Shipping worldwide</span>
            <span>Secure checkout</span>
            <span>Made with love for animals</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
