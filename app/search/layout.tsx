import HomeFooter from "@/components/home/homefooter";
export default function SearchLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <HomeFooter />
    </div>
  );
}
