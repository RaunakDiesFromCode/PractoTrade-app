import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="flex items-center justify-center mb-8">
        <Shield className="h-10 w-10 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg mb-8 flex items-center">
        <Lock className="h-5 w-5 text-muted-foreground mr-2" />
        <p className="text-muted-foreground">
          <span className="font-medium">Effective Date:</span> April 18, 2025
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg leading-relaxed mb-6">
          Thank you for using Practo Trade. We are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our stock sentiment and
          prediction platform Practo Trade.
        </p>

        <Card className="p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
              1
            </span>
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information when you use the
            Service:
          </p>

          <div className="ml-4 mb-4">
            <h3 className="font-medium mb-2">a. Personal Information</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                Email address (if you create an account or subscribe to updates)
              </li>
              <li>Name (optional)</li>
              <li>Login credentials (if applicable)</li>
            </ul>
          </div>

          <div className="ml-4 mb-4">
            <h3 className="font-medium mb-2">b. Usage Data</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring URL</li>
              <li>Device information</li>
            </ul>
          </div>

          <div className="ml-4">
            <h3 className="font-medium mb-2">
              c. Cookies & Tracking Technologies
            </h3>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience and improve the platform&apos;s performance.
            </p>
          </div>
        </Card>

        <Card className="p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
              2
            </span>
            How We Use Your Information
          </h2>
          <p className="mb-3">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>To provide and improve the Service</li>
            <li>To personalize your experience</li>
            <li>To send relevant updates or alerts (if you opt in)</li>
            <li>To analyze usage trends and optimize platform performance</li>
            <li>To ensure platform security and prevent abuse</li>
          </ul>
        </Card>

        <Card className="p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
              3
            </span>
            Data We Don&apos;t Collect
          </h2>
          <p className="mb-3">We do not collect:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Financial information or bank account details</li>
            <li>Any sensitive personal information</li>
            <li>Social media credentials or private messages</li>
          </ul>
        </Card>

        <Card className="p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
              4
            </span>
            Third-Party Data Sources
          </h2>
          <p>
            Our platform gathers public data from third-party news portals,
            social media platforms, and public stock APIs to analyze market
            sentiment. We do not store or republish proprietary content; our
            models only interpret publicly available information for analytical
            purposes.
          </p>
        </Card>

        <Card className="p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
              5
            </span>
            Data Sharing & Disclosure
          </h2>
          <p className="mb-3">
            We do not sell or share your personal data with third parties,
            except:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>If required by law or regulatory authorities</li>
            <li>
              To service providers assisting with analytics or infrastructure,
              bound by confidentiality obligations
            </li>
          </ul>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 shadow-sm h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                6
              </span>
              Data Retention
            </h2>
            <p>
              We retain personal data only as long as necessary to fulfill the
              purposes outlined in this policy. You can request deletion of your
              data at any time by contacting us.
            </p>
          </Card>

          <Card className="p-6 shadow-sm h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                7
              </span>
              Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or deletion</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 shadow-sm h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                8
              </span>
              Security
            </h2>
            <p>
              We implement industry-standard measures to protect your data from
              unauthorized access, alteration, or loss. However, no system is
              entirely secure.
            </p>
          </Card>

          <Card className="p-6 shadow-sm h-full">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
                9
              </span>
              Children&apos;s Privacy
            </h2>
            <p>
              Our Service is not intended for users under the age of 13, and we
              do not knowingly collect information from minors.
            </p>
          </Card>
        </div>

        <Card className="p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="bg-primary/10 text-primary rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
              10
            </span>
            Updates to This Policy
          </h2>
          <p>
            We may update this policy from time to time. When we do, we will
            revise the &quote;Effective Date&quote; at the top and, if
            significant, notify users via email or platform alerts.
          </p>
        </Card>

        <Card className="p-6 bg-muted/30 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="h-6 w-6 text-primary mr-2" />
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions or requests regarding this Privacy Policy,
            please contact us at:
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <span className="font-medium mr-2">Email:</span>
              <a
                href="mailto:contact@practotrade.com"
                className="text-primary hover:underline"
              >
                contact@practotrade.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Website:</span>
              <a
                href="https://practotrade.com"
                className="text-primary hover:underline"
              >
                practotrade.com
              </a>
            </div>
          </div>
        </Card>
      </div>

      <Separator className="my-8" />
    </div>
  );
}
