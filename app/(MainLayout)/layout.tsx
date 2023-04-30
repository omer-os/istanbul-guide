import MainLayout from "components/components/screens/layouts/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html data-theme="light" lang="en">
        <body>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </>
  );
}
