import { FeatureSplit } from "./feature-split";
import { PaymentsMock } from "@/components/mocks/payments-mock";

export function PaymentsSection() {
  return (
    <FeatureSplit
      id="payments"
      eyebrow="07 / Payment Tracking"
      headline="Keep rental fees, deposits, and payment status in view."
      copy="Track booking-related payment records and understand what has been paid, what remains outstanding, and which deposits are being held."
      tint
      mock={<PaymentsMock />}
      features={[
        "Rental fee and deposit records",
        "Refund records and a deposit refund workflow",
        "Payment status tracking",
        "Unpaid, partially paid, paid, overdue, and refunded statuses",
      ]}
      note="This is payment tracking and record management, not integrated card payment processing."
    />
  );
}
