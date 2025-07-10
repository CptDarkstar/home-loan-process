import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  FileText,
  Building,
  Phone,
  Mail,
  MapPin,
  Globe,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/RNS Logo 2022 - Copy.png"
                alt="RNS - Residential Network Systems"
                className="h-12 w-auto"
                width={48}
                height={48}
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#process"
                className="text-gray-600 hover:text-gray-900"
              >
                Process
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
              {/* <Button className="bg-red-600 hover:bg-red-700">Get Started</Button> */}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-80 md:h-96 overflow-hidden">
            <Image
              src="/couple-buy-new-house.jpg"
              alt="couple-buy-new-house"
              objectFit="cover"
              layout="fill"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">
                100% Free Service
              </Badge>
              <Badge className="mb-4 bg-red-50 text-red-800 hover:bg-red-100 opacity-70">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-wrap">
                  Simplify Your Journey to{" "}
                  <span className="text-green-500">Homeownership</span>
                </h1>
              </Badge>
              <Badge className="mb-4 bg-red-50 text-red-800 hover:bg-red-100 opacity-70">
                <p className="text-xl text-gray-600 mb-8 max-w-3xl text-wrap">
                  We help you secure the best home loan deals from major South
                  African banks. Our support is completely free, and we are
                  committed to making the process quick, transparent, and
                  stress-free.
                </p>
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Home Loan Application Process
              </h2>
              <p className="text-xl text-gray-600">
                Three simple steps to secure your home loan
              </p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                      <FileText className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        Step 1: Application & Documentation
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4" />
                        Estimated time: 2 working days
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We collect key documents needed by banks to assess your home
                    loan application:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Completed application form",
                      "Sale agreement",
                      "Identity documents",
                      "Proof of income",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Additional documents may be required depending on property
                    type, buyers legal and employment status, and income
                    sources.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-l-4 border-l-amber-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full">
                      <Building className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        Step 2: Bank Assessment & Approval
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4" />
                        Estimated time: 5 working days
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Banks will:</p>
                  <div className="space-y-3">
                    {[
                      "Review your credit history",
                      "Check affordability based on income",
                      "Issue preliminary approval (subject to property valuation and insurance)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4">
                    If approved, a formal quote will be issued. Upon your
                    acceptance, a bond attorney will be instructed.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-l-4 border-l-teal-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full">
                      <CheckCircle className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">
                        Step 3: Loan Registration
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4" />
                        Estimated time: 30 to 90 days
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Once approved, attorneys prepare documents for registration.
                    You will be contacted to sign necessary paperwork and pay
                    fees. The sellers attorney handles the title transfer. Once
                    lodged with the Deeds Office, the title is registered in
                    your name.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> The bank holds the title deed until
                      the loan is fully repaid.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Potential Delays */}
            <Card className="mt-12 border-orange-200 bg-orange-50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-xl text-orange-900">
                    Potential Delays
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800 mb-3">Delays can occur due to:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Missing or incorrect documentation",
                    "Delayed payments",
                    "Slow responses from buyer, seller, or banks",
                    "Outstanding municipal rates or taxes",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                      <span className="text-orange-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-600">
                Ready to start your home loan application? Get in touch with us
                today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get Started Today</CardTitle>
                  <CardDescription>
                    Contact us to begin your home loan application process
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-gray-600">
                        4th Floor, Gihon Building, Bellville, 7530
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+27 21 910 5900</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@yourcompany.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-gray-600">www.yourcompany.co.za</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "100% free service - no hidden costs",
                    "Access to major South African banks",
                    "Quick and transparent process",
                    "Expert guidance throughout",
                    "Stress-free experience",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              {/* <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Start Your Application Now
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Image
                src="/RNS Logo 2022 - Copy.png"
                alt="RNS - Residential Network Systems"
                className="h-12 w-auto"
                width={48}
                height={48}
              />
            </div>
            <p className="text-gray-400 mb-4">
              RNS - Residential Network Systems. Simplifying your journey to
              homeownership with expert guidance and free service.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 RNS - Residential Network Systems. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
