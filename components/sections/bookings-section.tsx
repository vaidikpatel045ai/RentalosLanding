import { FeatureSplit } from "./feature-split";
import { BookingWizardMock } from "@/components/mocks/booking-wizard-mock";

export function BookingsSection() {
  return (
    <FeatureSplit
      id="bookings"
      eyebrow="03 / Bookings & Customer Care"
      headline="From the first inquiry to the final fitting."
      copy="Keep customer details, garment selections, rental dates, and payment records connected throughout the booking journey."
      reverse
      tint
      mock={<BookingWizardMock />}
      features={[
        "Guided booking creation wizard",
        "Live availability checks during booking",
        "Multiple garments per booking",
        "Customer profiles and contact details",
        "Wedding dates, venues, event types, style preferences, and notes",
        "Versioned customer measurements",
        "Measurement snapshots attached automatically to tailoring jobs",
        "Appointments and calendar views for month, week, and day",
      ]}
    />
  );
}
