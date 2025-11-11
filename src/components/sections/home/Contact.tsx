'use client';

import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react';

const DEFAULT_CONTACT = {
  badge: 'Get in Touch',
  mainTitle: 'Ready to Streamline Your',
  mainTitleHighlight: 'Invoicing?',
  mainDescription:
    "Have questions about our invoicing platform? We're here to help you get started and optimize your billing process. Reach out and we'll respond within 24 hours.",
  formTitle: 'Start the Conversation',
  formDescription:
    "Tell us about your invoicing needs and we'll show you how our platform can help your business grow.",
  submitButton: 'Send Message',
  contactSectionTitle: 'Connect With Us',
  method1Title: 'Email Support',
  method1Description: 'Get detailed help via email',
  method1Contact: 'support@invoiceflow.com',
  method2Title: 'Sales Inquiries',
  method2Description: 'Speak with our sales team',
  method2Contact: '+1 (555) 847-2910',
  method3Title: 'Live Chat',
  method3Description: 'Instant support chat',
  method3Contact: 'Available 9 AM - 6 PM EST',
  officesSectionTitle: 'Our Locations',
  office1City: 'San Francisco',
  office1Address: '450 Mission Street, Suite 200',
  office1Timezone: 'PST (UTC-8)',
  office2City: 'Austin',
  office2Address: '301 Congress Avenue, Floor 12',
  office2Timezone: 'CST (UTC-6)',
  office3City: 'Remote Hub',
  office3Address: 'Distributed Team Worldwide',
  office3Timezone: 'All Timezones',
  hoursTitle: 'Support Hours',
  hoursWeekdayLabel: 'Monday - Friday',
  hoursWeekdayTime: '9:00 AM - 6:00 PM EST',
  hoursSaturdayLabel: 'Saturday',
  hoursSaturdayTime: '10:00 AM - 2:00 PM EST',
  hoursSundayLabel: 'Sunday',
  hoursSundayTime: 'Closed',
  supportNote: 'Priority support available for Pro and Enterprise customers',
  nameLabel: 'Full Name *',
  namePlaceholder: 'John Smith',
  emailLabel: 'Business Email *',
  emailPlaceholder: 'john@yourcompany.com',
  companyLabel: 'Company Name',
  companyPlaceholder: 'Your Business Name',
  messageLabel: 'Tell us about your invoicing needs *',
  messagePlaceholder:
    'How many invoices do you send monthly? What features are most important to you? Any specific integrations needed?',
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };

  // ✅ Use the universal form submit hook
  const { handleSubmit, isSubmitting, isSuccess, message } = useFormSubmit();

  const contactMethods = [
    {
      icon: Mail,
      title: config.method1Title,
      description: config.method1Description,
      contact: config.method1Contact,
    },
    {
      icon: Phone,
      title: config.method2Title,
      description: config.method2Description,
      contact: config.method2Contact,
    },
    {
      icon: MessageSquare,
      title: config.method3Title,
      description: config.method3Description,
      contact: config.method3Contact,
    },
  ];

  const offices = [
    {
      city: config.office1City,
      address: config.office1Address,
      timezone: config.office1Timezone,
    },
    {
      city: config.office2City,
      address: config.office2Address,
      timezone: config.office2Timezone,
    },
    {
      city: config.office3City,
      address: config.office3Address,
      timezone: config.office3Timezone,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                <span data-editable="formTitle">{config.formTitle}</span>
              </CardTitle>
              <CardDescription>
                <span data-editable="formDescription">{config.formDescription}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* ✅ Hook handles everything - just add data-form-id and onSubmit */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-form-id="6912923f631c8ed6a63b7d14"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      <span data-editable="nameLabel">{config.nameLabel}</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={config.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      <span data-editable="emailLabel">{config.emailLabel}</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={config.emailPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    <span data-editable="companyLabel">{config.companyLabel}</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={config.companyPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    <span data-editable="messageLabel">{config.messageLabel}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder={config.messagePlaceholder}
                  />
                </div>

                {/* ✅ Status message from backend */}
                {message && (
                  <div
                    className={`p-4 rounded-lg border ${
                      isSuccess
                        ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300'
                        : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300'
                    }`}
                  >
                    {message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-base py-6 group"
                >
                  <span data-editable="submitButton">
                    {isSubmitting ? 'Sending...' : config.submitButton}
                  </span>
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                <span data-editable="contactSectionTitle">{config.contactSectionTitle}</span>
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">
                              <span data-editable={`method${index + 1}Title`}>{method.title}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              <span data-editable={`method${index + 1}Description`}>
                                {method.description}
                              </span>
                            </p>
                            <p className="font-medium text-primary">
                              <span data-editable={`method${index + 1}Contact`}>
                                {method.contact}
                              </span>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                <span data-editable="officesSectionTitle">{config.officesSectionTitle}</span>
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">
                          <span data-editable={`office${index + 1}City`}>{office.city}</span>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          <span data-editable={`office${index + 1}Address`}>{office.address}</span>
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        <span data-editable={`office${index + 1}Timezone`}>{office.timezone}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  <span data-editable="hoursTitle">{config.hoursTitle}</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursWeekdayLabel">{config.hoursWeekdayLabel}</span>
                    </span>
                    <span data-editable="hoursWeekdayTime">{config.hoursWeekdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSaturdayLabel">{config.hoursSaturdayLabel}</span>
                    </span>
                    <span data-editable="hoursSaturdayTime">{config.hoursSaturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayLabel">{config.hoursSundayLabel}</span>
                    </span>
                    <span className="text-muted-foreground">
                      <span data-editable="hoursSundayTime">{config.hoursSundayTime}</span>
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    <span data-editable="supportNote">{config.supportNote}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
