import { Container } from "@/components/ui/container";
import { readInquiries } from "@/lib/inquiry-store";
import { InquiriesTable } from "@/components/admin/inquiries-table";

// Reads the local file at request time — never statically prerendered.
export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const records = await readInquiries();

  return (
    <section className="py-14">
      <Container>
        <InquiriesTable records={records} />
      </Container>
    </section>
  );
}
