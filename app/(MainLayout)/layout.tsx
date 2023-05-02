import MainLayout from "components/components/screens/layouts/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
