import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ContentProvider } from "@/context/ContentContext";
import SiteShell from "@/components/layout/SiteShell";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoHindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-hindi",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071A33"
};

export const metadata: Metadata = {
  title: "उत्तर प्रदेश चुनाव प्रबंधन 2027 | Workforce Infotech Pvt. Ltd.",
  description: "उत्तर प्रदेश विधानसभा चुनाव 2027 के लिए संपूर्ण चुनाव प्रबंधन, डेटा एवं रिसर्च, डिजिटल मीडिया, बूथ प्रबंधन, कॉल सेंटर, तकनीकी समाधान, मीडिया, क्रिएटिव और वार रूम सेवाएं। “आप जनता से जुड़िए, चुनाव प्रबंधन की जिम्मेदारी हमें दीजिए।”",
  keywords: [
    "Election Campaign Management Uttar Pradesh",
    "Political Campaign Management UP 2027",
    "Election Data Research",
    "Booth Management UP",
    "Political Digital Marketing",
    "Election War Room Lucknow",
    "Candidate Branding",
    "Political Campaign Technology",
    "Election Call Center",
    "Workforce Infotech"
  ],
  authors: [{ name: "Workforce Infotech Private Limited" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={`${jakarta.variable} ${notoHindi.variable} dark scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-navy-900 text-off-white selection:bg-accent-orange selection:text-white font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          <ContentProvider>
            <LanguageProvider>
              <SiteShell>
                {children}
              </SiteShell>
            </LanguageProvider>
          </ContentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
