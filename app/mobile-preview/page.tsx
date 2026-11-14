import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile preview",
  robots: { index: false, follow: false }
};

export default function MobilePreviewPage() {
  return (
    <div className="phone-preview-shell">
      <p>Mobile preview · 390 px wide</p>
      <iframe title="Hospital website at mobile width" src="/" className="phone-preview-frame" />
    </div>
  );
}
